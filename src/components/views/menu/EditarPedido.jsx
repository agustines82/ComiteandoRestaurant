import { Form, Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
const EditarPedido = () => {
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
                    <Form className="container">
                        <Form.Group className="mb-3" controlId="formNombreUsuario">
                            <Form.Label className="fontTitulos fs-5">Usuario</Form.Label>
                            <Form.Control required type="text" placeholder="Ej:Moshi" />
                            <Form.Text className="text-danger ms-3">el nombre del usuario es requerido</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label className="fontTitulos fs-5">Fecha</Form.Label>
                            <Form.Control required type="date" />
                            <Form.Text className="text-danger ms-3">la fecha es requerida</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPedido">
                            <Form.Label className="fontTitulos fs-5">Productos Solicitados</Form.Label>
                            <Form.Control required type="text" placeholder="Ej: Producto 1, producto 2 ..." />
                            <Form.Text className="text-danger ms-3">la lista de productos solicitados es obligatoria </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEstado">
                            <Form.Label className="fontTitulos fs-5">Estado*</Form.Label>
                            <Form.Select aria-label="Default select">
                                <option value="">Seleccione una opción...</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="Realizado">Realizado</option>
                            </Form.Select>
                            <Form.Text className="text-danger ms-3">Debe elegir una categoría</Form.Text>
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
