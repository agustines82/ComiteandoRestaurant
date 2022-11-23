import { Row, Container, Card, Col, ListGroup } from "react-bootstrap";
import CardMenu from "./menu/CardMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultarApiProductos } from "../helpers/queries";

const HazTuPedido = () => {
    //Variable de estado para Listar Productos
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarApiProductos().then((respuestaListaProductos) => {
            setProductos(respuestaListaProductos);
        });
    }, []);

    return (
        <Container fluid className="mainSection">
            <Row>
                <Col md={8}>
                    <Row>
                        {productos.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} />
                        ))}
                    </Row>
                </Col>
                <Col md={4}>
                    <div>
                        <h1 className="text-center">Haz tu pedido</h1>
                    </div>
                    <Card>
                        <Card.Title className="text-center fs-4 mt-3">Mi pedido</Card.Title>
                        <hr />
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex my-2 justify-content-between">
                                <span className="botonpedido">
                                    <i className="bi bi-plus-circle-fill"></i>
                                </span>
                                <span className="botonpedido2">
                                    <i className="bi bi-trash3-fill "></i>
                                </span>
                            </ListGroup.Item>
                        </ListGroup>
                        <Card.Text className="mt-4 m-3">Subtotal:</Card.Text>
                        <Card.Text className="m-3">Total:</Card.Text>
                        <div className="d-flex justify-content-center">
                            <Link to={"/pedidoconf"} className="my-3 p-3 botonconf">
                                Confirmar pedido
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HazTuPedido;
