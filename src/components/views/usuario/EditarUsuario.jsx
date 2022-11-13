import { Form, Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const EditarUsuario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const editUser = (data) => {
        console.log("desde la funcion de editar usuario");
        console.log(data);
    };

    return (
        <>
            <Container className="mainSection mb-5">
                <Breadcrumb className="fs-small">
                    <Link className="linksMenu hoverLinksMenu" to="/">
                        Inicio /
                    </Link>
                    <Link className="linksMenu hoverLinksMenu" to="/administrar">
                        Admininistrar /
                    </Link>
                    <Breadcrumb.Item active>Editar Usuario</Breadcrumb.Item>
                </Breadcrumb>
                <section className="container mt-5">
                    <h3 className="display-3 mt-3 fontTitulos">Editar Usuario</h3>
                    <hr />
                </section>
                <section className="container my-3">
                    <Form className="container" onSubmit={handleSubmit(editUser)}>
                        <Form.Group className="mb-3" controlId="formNombreUsuario">
                            <Form.Label className="fontTitulos fs-5">Usuario</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej:Moshi"
                                {...register("nombreUsuario", {
                                    required: "El nombre del usuario es requerido",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad mínima de caracteres debe ser 2",
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "La cantidad máxima de caracteres debe ser 30",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger ms-3">{errors.nombreUsuario?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label className="fontTitulos fs-5">Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="ejemplo@mail.com"
                                {...register("email", {
                                    required: "Ingrese su email",
                                    pattern: {
                                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                        message: "Debe ingresar un email valido",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger ms-3">{errors.email?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label className="fontTitulos fs-5">Password</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej:Sushi"
                                {...register("password", {
                                    required: "Ingrese su contraseña",
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                                        message: "La contraseña debe tener al menos 8 caracteres, una minúscula y una mayúscula.",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger ms-3">{errors.password?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEstado">
                            <Form.Label className="fontTitulos fs-5">Estado*</Form.Label>
                            <Form.Select
                                aria-label="Default select"
                                {...register("estado", {
                                    required: "Debe elegir un Estado",
                                })}
                            >
                                <option value="">Seleccione una opción...</option>
                                <option value="Activo">Activo</option>
                                <option value="Suspendido">Suspendido</option>
                            </Form.Select>
                            <Form.Text className="text-danger ms-3">{errors.estado?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPerfil">
                            <Form.Label className="fontTitulos fs-5">Perfil*</Form.Label>
                            <Form.Select
                                aria-label="Default select"
                                {...register("perfil", {
                                    required: "Debe elegir un Perfil",
                                })}
                            >
                                <option value="">Seleccione una opción...</option>
                                <option value="Cliente">Cliente</option>
                                <option value="Administrador">Administrador</option>
                            </Form.Select>
                            <Form.Text className="text-danger ms-3">{errors.perfil?.message}</Form.Text>
                        </Form.Group>
                        <div className="text-center">
                            <button className="backgroundBotones rounded border-0 fontTitulos fs-4" type="submit">
                                Guardar
                            </button>
                        </div>
                    </Form>
                </section>
            </Container>
        </>
    );
};

export default EditarUsuario;
