import { Card, Button, Col, Badge } from "react-bootstrap";

const CardMenu = ({ producto }) => {
    const { nombre, precio, detalle, categoria, imagen } = { ...producto };
    return (
        <Col md={6} className={"my-3"}>
            <Card>
                <Card.Img variant="top" src={imagen} />
                <Card.Title className="fw-bold ms-3 my-3">{nombre}</Card.Title>
                <Badge className="ms-3 w-25">{categoria}</Badge>
                <Card.Body>
                    <Card.Text>{detalle}</Card.Text>

                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <Card.Text className="fw-bold fs-2">${precio}</Card.Text>
                        <div>
                            <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold">-</Button>
                            <p className="d-inline mx-1 fw-bold">0</p>
                            <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold">+</Button>
                        </div>
                        <Button className="btn-sm boton mx-2 my-3">Agregar</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardMenu;
