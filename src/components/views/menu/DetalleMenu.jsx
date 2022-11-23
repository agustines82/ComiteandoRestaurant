import { Card, Col, Container, Row, Button, Badge } from "react-bootstrap";
const DetalleMenu = () => {
    return (
        <Container className="my-3">
            <Card>
                <Row>
                    <Col md={8}>
                        <Card.Img variant="top" src="https://tofuu.getjusto.com/orioneat-local/resized2/3pKrZM7zWnFSsEdg4-1200-1200.webp" />
                    </Col>
                    <Col md={4}>
                        <Card.Body>
                            <Card.Title className="fw-bold ">Card Title</Card.Title>
                            <Badge className="backgroundBotones" text="dark">
                                Sushi
                            </Badge>
                            <Card.Text className="my-4">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold">-</Button>
                            <p className="d-inline mx-1 fw-bold">0</p>
                            <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold">+</Button>
                            <Card.Text className="d-inline fw-bold">$2500</Card.Text>
                            <Button className="btn-sm boton mx-2 my-3">Agregar</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default DetalleMenu;
