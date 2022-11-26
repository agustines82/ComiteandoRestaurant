import { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";

const useContador = () => {
    const [contador, setContador] = useState(0);
    const sumar = () => setContador(contador + 1);
    const restar = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    };
    const resetear = () => setContador(0); 

    return {
        contador,
        sumar,
        restar,
        resetear
    };
};

const CardMenu = ({ producto, agregarProducto }) => {
    const { nombre, precio, detalle, imagen } = { ...producto };
    const { contador, sumar, restar, resetear } = useContador();
    const agregar = ()=>{
        agregarProducto(contador, producto);
        resetear();
    }
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
                            <p className="fw-bold fs-2 my-0">${precio}</p>
                            <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold mb-2" onClick={restar}>
                                -
                            </Button>
                            <p className="d-inline mx-1 fw-bold">{contador}</p>
                            <Button className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold mb-2" onClick={sumar}>
                                +
                            </Button>

                            <Button variant="none" 
                            className="btn-sm boton mx-1 my-3 mb-0" 
                            onClick={agregar}>
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
