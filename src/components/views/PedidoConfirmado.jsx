import { Form, Card, ListGroup, Accordion, Table } from "react-bootstrap";

const PedidoConfirmado = () => {
  return (
    <section className="container">
      <aside className="my-3">
        <Form className="formulariopedido">
          <h3 className="text-center">Datos del envio</h3>
          <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
            <Form.Text>
              Necesitamos tus datos para poder realizar la entrega del pedido,
              sin problemas.{" "}
            </Form.Text>
            <br />
            <Form.Label className="my-2">Email</Form.Label>
            <Form.Control type="email" placeholder="Escribe tu email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Direccion</Form.Label>
            <Form.Control placeholder="Escribe tu dirección" />
          </Form.Group>
          <Form.Text>Indicaciones:</Form.Text>
          <Form.Control
            as="textarea"
            placeholder="Escribe tu indicacion aqui"
          />
        </Form>
      </aside>
      <aside className="my-3">
        <span class="custom-dropdown">
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
                        <i class="bi bi-plus-circle-fill"></i>
                      </span>{" "}
                      <span className="botonpedido2">
                        {" "}
                        <i class="bi bi-trash3-fill "></i>
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
              {" "}
              <span className="botonpedido">
                <i class="bi bi-plus-circle-fill"></i>
              </span>{" "}
              <span className="botonpedido2">
                {" "}
                <i class="bi bi-trash3-fill "></i>
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
    </section>
  );
};

export default PedidoConfirmado;
