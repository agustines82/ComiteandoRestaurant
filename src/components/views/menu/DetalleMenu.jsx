import { Card, Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerProductoAPI } from "../../helpers/queries";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const DetalleMenu = () => {
    const [producto, setProducto] = useState({});
    let { id } = useParams();

    useEffect(() => {
        obtenerProductoAPI(id).then((respuesta) => {
            let productoBuscado = respuesta.dato;
            setProducto(productoBuscado);
        });
    }, []);

    return (
        <Container className="mainSection">
            <Row className="justify-content-md-center my-5">
                <Col md={8}>
                    <Card>
                        <Row>
                            <Col md={6} className="colorFondo">
                                <Card.Img variant="top" src={producto.imagen} />
                            </Col>
                            <Col md={6}>
                                <Card.Title className="fw-bold ms-3 my-3">{producto.nombre}</Card.Title>
                                <Card.Body>
                                    <Card.Text className="altoDetallecito">{producto.detalle}</Card.Text>
                                    {producto.categoria !== "REFRESCOS" &&
                                    producto.categoria !== "CERVEZA Y SAKE" &&
                                    producto.categoria !== "MOCKTAILS" ? (
                                        <>
                                            <Card.Text>
                                                <Card.Title>Todos los productos inluyen salsas a eleccion</Card.Title>
                                                <ul>
                                                    <li>Salsa de anguila</li>
                                                    <li>Aderezo chipotle Moshi</li>
                                                    <li>Salsa de ajonjoli</li>
                                                    <li>Tampico</li>
                                                    <li>Wasabi</li>
                                                    <li>Jengibre encurtido</li>
                                                </ul>
                                            </Card.Text>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                    <div className="d-flex flex-nowrap justify-content-around align-items-end w-100">
                                        <Link to="/haz" className="btn-sm boton mx-1 my-3 mb-0 text-decoration-none text-dark">
                                            volver
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default DetalleMenu;
