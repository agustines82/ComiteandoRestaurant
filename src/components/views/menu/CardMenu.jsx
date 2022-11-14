import { Card, Button, Col } from "react-bootstrap";

const CardMenu = () => {
    return (
        <Col md={6} className={"my-3"}>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://tofuu.getjusto.com/orioneat-local/resized2/3pKrZM7zWnFSsEdg4-1200-1200.webp"
                />
                <Card.Title className="fw-bold text-center my-3">
                    Crunchy Salmon
                </Card.Title>
                <Card.Body>
                    <Card.Text>
                        Pasta tempura, tampico y salsa de anguila | Salmón spicy
                        (40g)
                    </Card.Text>
                    <div className="d-flex flex-wrap justify-content-end align-items-center">
                        <div>
                    <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold">-
                    </Button>
                    <p className="d-inline mx-1 fw-bold">0</p>
                    <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold">
                        +
                    </Button>

                        </div>
                    <Button className="btn-sm boton mx-2 my-3">Agregar</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardMenu;
