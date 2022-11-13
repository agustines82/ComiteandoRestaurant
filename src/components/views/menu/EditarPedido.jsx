import { Form, Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const EditarPedido = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const editPedido = (dataError) => {
        console.log("desde la funcion editar el pedido");
        console.log(dataError);
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
                    <Breadcrumb.Item active>Editar Pedido</Breadcrumb.Item>
                </Breadcrumb>
                <section className="container mt-5">
                    <h3 className="display-3 mt-3 fontTitulos">Editar Pedido Solicitado</h3>
                    <hr />
                </section>
                <section className="container my-3">
                    <Form className="container" onSubmit={handleSubmit(editPedido)}>
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
                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label className="fontTitulos fs-5">Fecha</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                {...register("fecha", {
                                    required: "La fecha es requerida",
                                })}
                            />
                            <Form.Text className="text-danger ms-3">{errors.fecha?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPedido">
                            <Form.Label className="fontTitulos fs-5">Productos Solicitados</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej: Producto 1, producto 2 ..."
                                {...register("productosSolicitados", {
                                    required: "Debes agregar los productos solicitados",
                                    minLength: {
                                        value: 10,
                                        message: "La cantidad mínima de caracteres debe ser 10",
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: "La cantidad máxima de caracteres debe ser 500",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger ms-3">{errors.productosSolicitados?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEstado">
                            <Form.Label className="fontTitulos fs-5">Estado*</Form.Label>
                            <Form.Select
                                aria-label="Default select"
                                {...register("estado", {
                                    required: "Debe elegir un estado",
                                })}
                            >
                                <option value="">Seleccione una opción...</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="Realizado">Realizado</option>
                            </Form.Select>
                            <Form.Text className="text-danger ms-3">{errors.estado?.message}</Form.Text>
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

export default EditarPedido;
