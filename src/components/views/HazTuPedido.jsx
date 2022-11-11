import { Card, ListGroup, Button } from "react-bootstrap";

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
          <ListGroup.Item className=" ">Item 1</ListGroup.Item>
          <ListGroup.Item className=" ">Item 2</ListGroup.Item>
        </ListGroup>
        <Card.Text className="mt-4 m-3">Total:</Card.Text>
        <div className="text-center">
          <Button className="my-3 p-3 w-50 backgroundBotones">
            Confirmar pedido
          </Button>
        </div>
      </Card>
      </div>
    </>
  );
};

export default HazTuPedido;
