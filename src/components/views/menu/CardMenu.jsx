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
    let subTotal = contador * precio;
    const agregarProducto = () => {
        if (contador > 0) {
            setPedido([
                ...pedido,
                {
                    productos: producto,
                    cantidad: contador,
                    subTotal: subTotal,
                },
            ]);
        }
    };

    return (
        <Col md={6} className={"my-3"}>
            <article className="cardMenu">
                <div>
                    <Card.Img className="imagenHaz" variant="top" src={imagen} />
                </div>
                <div>
                    <Card.Title className="fw-bold ms-3 my-3">{nombre}</Card.Title>
                    <Card.Body>
                        <Card.Text className="altoDetallecito">{detalle}</Card.Text>
                        <div className="d-flex flex-nowrap justify-content-around align-items-end w-100">
                            <aside className="fw-bold fs-2">${precio}</aside>

                            <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold mb-2" onClick={restar}>
                                -
                            </Button>
                            <p className="d-inline mx-1 fw-bold">{contador}</p>
                            <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold mb-2" onClick={sumar}>
                                +
                            </Button>

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
