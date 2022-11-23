import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { loguearUsuarioAPI } from "../helpers/queries";
import Swal from "sweetalert2";
const Login = ({ setUsuarioLogueado }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [tipo, setTipo] = useState("password");
    const [icono, setIcono] = useState("px-2 bi bi-eye-fill");

    const mostrarOcultar = () => {
        if (tipo === "password") {
            setTipo("");
            setIcono("px-2 bi bi-eye-slash-fill");
        } else {
            setTipo("password");
            setIcono("px-2 bi bi-eye-fill");
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        loguearUsuarioAPI(data).then((respuesta) => {
            if (respuesta) {
                localStorage.setItem("usuarioLogueado", JSON.stringify(respuesta));
                console.log(respuesta);
                setUsuarioLogueado(respuesta.usuario);
                reset();
                handleClose();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Bienvenido ${respuesta.usuario.nombre}`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire("El usuario no existe", "error en el nombre de usuario o password", "error");
            }
        });
    };
    return (
        <>
            <NavLink
                end
                onClick={handleShow}
                className={"nav-item linksMenu fw-bold backgroundBotones text-white fs-5 rounded h-25 hoverLoginOutMenu"}
            >
                Login<i className="bi bi-box-arrow-in-right"></i>
            </NavLink>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center fontTitulos">Ingresar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)} className="letra">
                        <Form.Group className="mb-3" controlId="FormIngresar.ControlEmailInput">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                {...register("email", {
                                    required: "El email es obligatorio",
                                    pattern: {
                                        value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                                        message: "El email debe ser valido",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FormIngresar.ControlPasswordInput">
                            <Form.Label>Contraseña</Form.Label>
                            <i className={icono} onClick={mostrarOcultar}></i>
                            <Form.Control
                                type={tipo}
                                placeholder="*********"
                                autoFocus
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                    mingLength: {
                                        value: 6,
                                        message: "La cantidad minima de caracteres debe ser 6",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "La cantidad maxima de caracteres es de 20",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
                        </Form.Group>
                        <div className="d-flex justify-content-evenly">
                            <Button type="submit" className="boton">
                                Ingresar
                            </Button>
                            <Button className="boton" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Login;
