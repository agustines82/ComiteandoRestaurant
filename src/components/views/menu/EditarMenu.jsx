import { Form, Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
const EditarMenu = () => {
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
                    <Breadcrumb.Item active>Editar Producto</Breadcrumb.Item>
                </Breadcrumb>
                <section className="container mt-5">
                    <h3 className="display-3 mt-3 fontTitulos">Editar Producto del Menu</h3>
                    <hr />
                </section>
                <section className="container my-3">
                    <Form className="container">
                        <Form.Group className="mb-3" controlId="formNombreProducto">
                            <Form.Label className="fontTitulos fs-5">Nombre producto*</Form.Label>
                            <Form.Control required type="text" placeholder="Ej:Sushi" />
                            <Form.Text className="text-danger ms-3">el nombre del producto es requerido</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEstado">
                            <Form.Label className="fontTitulos fs-5">Estado</Form.Label>
                            <Form.Check type="switch" id="custom-switch" label="ND / D" />
                            <Form.Text className="text-danger ms-3">No Disponible / Disponible</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPrecio">
                            <Form.Label className="fontTitulos fs-5">Precio*</Form.Label>
                            <Form.Control required type="number" placeholder="Ej:50" />
                            <Form.Text className="text-danger ms-3">el precio es obligatorio </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDetalle">
                            <Form.Label className="fontTitulos fs-5">Detalle del producto*</Form.Label>
                            <Form.Control as="textarea" required type="text" placeholder="Ej:Sushi" />
                            <Form.Text className="text-danger ms-3">el detalle del producto es requerido</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCategoria">
                            <Form.Label className="fontTitulos fs-5">Categoria*</Form.Label>
                            <Form.Select aria-label="Default select">
                                <option value="">Seleccione una opción...</option>
                                <option value="BENTOS">BENTOS</option>
                                <option value="TAKA TAKOS">TAKA TAKOS</option>
                                <option value="BROCHETAS Y KUSHIAGES">BROCHETAS Y KUSHIAGES</option>
                                <option value="KAITEN SUSHI">KAITEN SUSHI</option>
                                <option value="MAKI SUSHI BAR">MAKI SUSHI BAR</option>
                                <option value="TAZONES DONBURI">TAZONES DONBURI</option>
                                <option value="RAMEN">RAMEN</option>
                                <option value="TEPPANYAKI">TEPPANYAKI</option>
                                <option value="ARROZ">ARROZ</option>
                                <option value="NIGIRI BAR">NIGIRI BAR</option>
                                <option value="SASHIMI">SASHIMI</option>
                                <option value="MOCKTAILS">MOCKTAILS</option>
                                <option value="CERVEZA Y SAKE">CERVEZA Y SAKE</option>
                                <option value="REFRESCOS">REFRESCOS</option>
                            </Form.Select>
                            <Form.Text className="text-danger ms-3">Debe elegir una categoría</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formImagen">
                            <Form.Label className="fontTitulos fs-5">Imagen URL*</Form.Label>
                            <Form.Control required type="text" placeholder="Ej:'https://....'" />
                            <Form.Text className="text-danger ms-3">Debe ingresar una url valida</Form.Text>
                        </Form.Group>
                        <div className="text-center">
                            <button className="backgroundBotones rounded border-0 fontTitulos fs-4" type="submit">
                                Editar
                            </button>
                        </div>
                    </Form>
                </section>
            </Container>
        </>
    );
};

export default EditarMenu;
