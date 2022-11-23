import { Card, Button, Col } from "react-bootstrap";

const CardMenu = ({ producto }) => {
    const { nombre, precio, detalle, imagen } = { ...producto };
    return (
        <Col md={6} className={"my-3"}>
            <article className="d-flex flex-row">
                <div>
                    <Card.Img className="imagenHaz" variant="top" src={imagen} />
                </div>
                <div>
                    <Card.Title className="fw-bold ms-3 my-3">{nombre}</Card.Title>
                    <Card.Body>
                        <Card.Text>{detalle}</Card.Text>
                        <div className="d-flex flex-wrap justify-content-between align-items-end">
                            <Card.Text className="fw-bold fs-2">${precio}</Card.Text>
                            <div>
                                <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold">-</Button>
                                <p className="d-inline mx-1 fw-bold">0</p>
                                <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold">+</Button>
                            </div>
                            <Button className="btn-sm boton mx-2 my-3 mb-0">Agregar</Button>
                        </div>
                    </Card.Body>
                </div>
            </article>
        </Col>
    );
};

export default CardMenu;
