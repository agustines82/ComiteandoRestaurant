import {
  Form,
  Card,
  ListGroup,
  Accordion,
  Table,
  Container,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";

const PedidoConfirmado = () => {



  //botones + y -
  const [numeroProductoconf, setnumeroProductoconf] = useState(1);

  //objetos para usar hookform
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log("desde mi funcion submit");

    
  };

  return (
    <Container>
      <aside className="my-3">
        <Form
          noValidate
          className="formulariopedido"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-center">Datos del envio</h3>
          <Form.Group className="mb-3 my-3">
            <Form.Text>
              Necesitamos tus datos para poder realizar la entrega del pedido,
              sin problemas.{" "}
            </Form.Text>
            <br />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Escribe tu dirección"
              {...register("direccionPedido", {
                required: "La direccion es un campo obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad minima de caracteres, es de 2.",
                },
                maxLength: {
                  value: 20,
                  message: "La cantidad maxima de caracteres, es de 20. ",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.direccionPedido?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Indicaciones:</Form.Label>
            <Form.Control
              required
              placeholder="Escribe tu indicacion aqui"
              {...register("indicacionesPedido", {
                minLength: {
                  value: 5,
                  message: "La cantidad minima de caracteres es de 5.",
                },
                maxLength: {
                  value: 50,
                  message: "La cantidad maxima de caracteres es de 100.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.indicacionesPedido?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Numero de contacto:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Escribe tu numero aqui"
              {...register("numeroContacto", {
                required: "El numero de contacto es un campo obligatorio",
                minLength: {
                  value: 6,
                  message: "La cantidad minima de caracteres, es de 6.",
                },
                maxLength: {
                  value: 14,
                  message: "La cantidad maxima de caracteres, es de 14.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.numeroContacto?.message}
            </Form.Text>
          </Form.Group>
          <button className="my-3 p-3 btn botonguardar " type="submit">
            Guardar
          </button>
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
                    {" "}
                <span className="botonpedido">
                  <i
                    class="bi bi-dash-circle-fill mx-1"
                    onClick={() => {
                      setnumeroProductoconf(numeroProductoconf - 1);
                    }}
                  ></i>{numeroProductoconf}<i
                    class="bi bi-plus-circle-fill mx-1 "
                    onClick={() => {
                      setnumeroProductoconf(numeroProductoconf + 1);
                    }}
                  ></i>
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
             p
            </ListGroup.Item>
          </ListGroup>
          <Card.Text className="mt-4 m-3">Subtotal:</Card.Text>
          <Card.Text className="m-3">Total:</Card.Text>

          <div className="d-flex justify-content-center">
            <button className="my-3 p-3 botonconf" type="submit">
              Comprar
            </button>
          </div>
        </Card>
      </aside>
    </Container>
  );
};

export default PedidoConfirmado;
