import { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";

const useContador = () => {
    const [contador, setContador] = useState(0);
    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return {
        contador,
        sumar,
        restar,
    };
};

const CardMenu = ({ producto, pedido, setPedido }) => {
    const { nombre, precio, detalle, imagen } = { ...producto };
    const { contador, sumar, restar } = useContador();
    let subTotal= contador*precio;
    const agregarProducto = () => {
        if (contador > 0) {
            setPedido([...pedido,{
                productos: producto,
                cantidad: contador,
                subTotal: subTotal
        }]);
        }
    };

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
                                <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold" onClick={restar}>
                                    -
                                </Button>
                                <p className="d-inline mx-1 fw-bold">{contador}</p>
                                <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold" onClick={sumar}>
                                    +
                                </Button>
                            </div>
                            <Button className="btn-sm boton mx-2 my-3 mb-0" onClick={agregarProducto}>
                                Agregar
                            </Button>
                        </div>
                    </Card.Body>
                </div>
            </article>
        </Col>
    );
};

export default CardMenu;
