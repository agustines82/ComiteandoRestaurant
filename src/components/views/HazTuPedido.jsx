import { Row, Container, Card, Col, ListGroup } from "react-bootstrap";
import CardMenu from "./menu/CardMenu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { consultarApiProductos } from "../helpers/queries";
const HazTuPedido = () => {
  //Productos state
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    //api productos
    consultarApiProductos().then((respuestaListaProductos) => {
      setProductos(respuestaListaProductos);
    } );
  } , []);

  const [numeroProducto, setnumeroProducto] = useState(1);

  return (
    <Container>
      <h1 className="text-center my-4">Haz tu pedido</h1>
      <Row>
        <Col md={8}>
          <Row>
            <CardMenu></CardMenu>
            <CardMenu></CardMenu>
            <CardMenu></CardMenu>
            <CardMenu></CardMenu>
            <CardMenu></CardMenu>
            <CardMenu></CardMenu>
            <CardMenu></CardMenu>
          </Row>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Title className="text-center fs-4 mt-3">Mi pedido</Card.Title>
            <hr />
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex my-2 justify-content-between">
                {/* {productos.map()} */}
                <span className="botonpedido">
                  <i
                    class="bi bi-dash-circle-fill mx-1"
                    onClick={() => {
                      setnumeroProducto(numeroProducto - 1);
                    }}
                  ></i>
                  {numeroProducto}
                  <i
                    class="bi bi-plus-circle-fill mx-1 "
                    onClick={() => {
                      setnumeroProducto(numeroProducto + 1);
                    }}
                  ></i>
                </span>
                <span className="botonpedido2"><i class="bi bi-trash3-fill "></i>
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
