import { Card, ListGroup} from "react-bootstrap";

const HazTuPedido = () => {
  return (
    <>
      <div>
        <h1>Haz tu pedido</h1>
      </div>
      <div className="PosicionMipedido">
      <Card className="CardMiPedido">
        <Card.Title className="text-center fs-4 mt-3">Mi pedido</Card.Title>
        <hr />
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex my-2 justify-content-between"> <span className="botonpedido"><i class="bi bi-plus-circle-fill"></i></span> <span className="botonpedido2"> <i class="bi bi-trash3-fill " ></i></span></ListGroup.Item>
        </ListGroup>
        <Card.Text className="mt-4 m-3">Subtotal:</Card.Text>
        <Card.Text className="m-3">Total:</Card.Text>

          <div className="d-flex justify-content-center">
          <button className="my-3 p-3 botonconf"   >Confirmar pedido</button>
          </div>
      </Card>
      </div>
    </>
  );
};

export default HazTuPedido;
