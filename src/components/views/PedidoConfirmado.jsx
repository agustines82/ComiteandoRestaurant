import { useState } from "react";
import { Form, Card, ListGroup, Accordion, Table, Container } from "react-bootstrap";

const PedidoConfirmado = () => {
    //cargar el usuario del local storage
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    //cargar el pedido del session storage
    const pedidoCliente = JSON.parse(sessionStorage.getItem("pedidoCliente")) || [];

    //variables de estado
    const [direccion, setDireccion] = useState("");
    const [indicaciones, setIndicaciones] = useState("");

    return (
        <Container>
            <Form className="formulariopedido">
                <aside className="my-3">
                    <h1 className="text-center">Datos del envio</h1>
                    <br />
                    <Form.Label>{usuario.usuario.nombre} necesitamos nos brindes una dirección para la entrega.</Form.Label>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control placeholder="Escribe tu dirección" />
                    </Form.Group>
                    <Form.Text>Indicaciones:</Form.Text>
                    <Form.Control as="textarea" placeholder="Escribe tu indicacion aqui" />
                </aside>
                <aside className="my-3">
                    <span className="custom-dropdown">
                        <select>
                            <option>METODOS DE PAGO</option>
                            <option>Tarjeta de credito</option>
                            <option>Tarjeta de debito</option>
                            <option>Efectivo</option>
                            <option>Transferencia</option>
                        </select>
                    </span>
                </aside>
                <aside className="my-3">
                    <Accordion className="box2">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Detalle del pedido</Accordion.Header>
                            <Accordion.Body>
                                <Table type responsive className="text-center">
                                    <thead>
                                        <tr className="acordionpedido">
                                            <th>Cantidad</th>
                                            <th>Producto</th>
                                            <th>Precio</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Sushi</td>
                                            <td>$1000</td>
                                            <td>
                                                <span className="botonpedido">
                                                    <i className="bi bi-plus-circle-fill"></i>
                                                </span>
                                                <span className="botonpedido2">
                                                    <i className="bi bi-trash3-fill "></i>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </aside>
                <aside className="my-3">
                    <Card className="w-100">
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
                            <button className="my-3 p-3 botonconf">Comprar</button>
                        </div>
                    </Card>
                </aside>
            </Form>
        </Container>
    );
};

export default PedidoConfirmado;
