import { Form, Card, ListGroup, Accordion, Table } from "react-bootstrap";

const PedidoConfirmado = () => {
  return (
    <main>
      <section className="box1">
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

        <span class="custom-dropdown">
          <select>
            <option>METODOS DE PAGO</option>
            <option>Tarjeta de credito</option>
            <option>Tarjeta de debito</option>
            <option>Efectivo</option>
            <option>Transferencia</option>
          </select>
        </span>
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
      </section>
    </main>
  );
};

export default PedidoConfirmado;
