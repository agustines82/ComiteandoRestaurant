import { Row, Container, Card, Col, ListGroup } from "react-bootstrap";
import CardMenu from "./menu/CardMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultarApiProductos } from "../helpers/queries";

const HazTuPedido = () => {
    //Variables de estado
    const [productos, setProductos] = useState([]);
    const [pedido, setPedido] = useState([]);
    console.log(pedido);
    console.log(pedido.subTotal)
    useEffect(() => {
        consultarApiProductos().then((respuestaListaProductos) => {
            setProductos(respuestaListaProductos);
        });
    }, []);

    //filtarado para exposicion de productos por categoria (solo se exponen los productos disponibles)
    const productosDisponibles = productos.filter((producto) => producto.estado === true);
    const bentos = productosDisponibles.filter((producto) => producto.categoria === "BENTOS");
    const takatacos = productosDisponibles.filter((producto) => producto.categoria === "TAKA TAKOS");
    const brochetas = productosDisponibles.filter((producto) => producto.categoria === "BROCHETAS Y KUSHIAGES");
    const kaiten = productosDisponibles.filter((producto) => producto.categoria === "KAITEN SUSHI");
    const maki = productosDisponibles.filter((producto) => producto.categoria === "MAKI SUSHI BAR");
    const tazones = productosDisponibles.filter((producto) => producto.categoria === "TAZONES DONBURI");
    const ramen = productosDisponibles.filter((producto) => producto.categoria === "RAMEN");
    const teppanyaki = productosDisponibles.filter((producto) => producto.categoria === "TEPPANYAKI");
    const arroz = productosDisponibles.filter((producto) => producto.categoria === "ARROZ");
    const nigiri = productosDisponibles.filter((producto) => producto.categoria === "NIGIRI BAR");
    const sashimi = productosDisponibles.filter((producto) => producto.categoria === "SASHIMI");
    const mocktails = productosDisponibles.filter((producto) => producto.categoria === "MOCKTAILS");
    const cerveza = productosDisponibles.filter((producto) => producto.categoria === "CERVEZA Y SAKE");
    const refrescos = productosDisponibles.filter((producto) => producto.categoria === "REFRESCOS");

    return (
        <Container fluid className="mainSection">
            <Row className="mt-5">
                <Col className="mt-4" md={8}>
                    <section className="d-flex justify-content-end me-3">
                        <select className="filtradoSelect h-50">
                            <option defaultChecked value="">
                                Selecciona por categoria
                            </option>
                            <option value="BENTOS">BENTOS</option>
                            <option value="TAKA TAKOS">TAKA TAKOS</option>
                            <option value="BROCHETAS Y KUSHIAGES">BROCHETAS Y KUSHIAGES</option>
                            <option value="KAITEN SUSHI">KAITEN SUSHI</option>
                            <option value="MAKI SUSHI BAR">MAKI SUSHI BAR</option>
                            <option value="TAZONES DONBURI">TAZONES DONBURI</option>
                            <option value="RAMEN">RAMEN</option>
                            <option value="TEPPANYAKI">TEPPANYAKI</option>
                            <option value="ARROZ">ARROZ</option>
                            <option value="NIGIRI BAR">NIGIRI BAR</option>
                            <option value="SASHIMI">SASHIMI</option>
                            <option value="MOCKTAILS">MOCKTAILS</option>
                            <option value="CERVEZA Y SAKE">CERVEZA Y SAKE</option>
                            <option value="REFRESCOS">REFRESCOS</option>
                        </select>
                    </section>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">BENTOS</h3>
                    <Row>
                        {bentos.map((producto) => (
                            <CardMenu
                                key={producto._id}
                                producto={producto}
                                pedido={pedido}
                                setPedido={setPedido}
                            />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">TAKA TAKOS</h3>
                    <Row>
                        {takatacos.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">BROCHETAS Y KUSHIAGES</h3>
                    <Row>
                        {brochetas.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">KAITEN SUSHI</h3>
                    <Row>
                        {kaiten.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">MAKI SUSHI BAR</h3>
                    <Row>
                        {maki.map((producto) => (
                            <CardMenu key={producto._id} producto={producto}  pedido={pedido}
                            setPedido={setPedido}/>
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">TAZONES DONBURI</h3>
                    <Row>
                        {tazones.map((producto) => (
                            <CardMenu key={producto._id} producto={producto}  pedido={pedido}
                            setPedido={setPedido}/>
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">RAMEN</h3>
                    <Row>
                        {ramen.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">TEPPANYAKI</h3>
                    <Row>
                        {teppanyaki.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">ARROZ</h3>
                    <Row>
                        {arroz.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">NIGIRI BAR</h3>
                    <Row>
                        {nigiri.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">SASHIMI</h3>
                    <Row>
                        {sashimi.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">MOCKTAILS</h3>
                    <Row>
                        {mocktails.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">CERVEZA Y SAKE</h3>
                    <Row>
                        {cerveza.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                    <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">REFRESCOS</h3>
                    <Row>
                        {refrescos.map((producto) => (
                            <CardMenu key={producto._id} producto={producto} pedido={pedido}
                            setPedido={setPedido} />
                        ))}
                    </Row>
                </Col>
                <Col md={4}>
                    <aside className="px-5">
                        <Card.Title className="text-center fs-4 mt-3">Mi pedido</Card.Title>
                        <hr />
                        <ListGroup variant="flush">
                            <div>
                                <ul>
                                        {pedido.map((pedido) => (
                                            <li key={pedido.productos._id}>{pedido.cantidad} 
                                                {pedido.productos.nombre} ${pedido.productos.precio}
                                                <span className=" ms-3 botonpedido2">
                                                    <i className="bi bi-trash3-fill"></i>
                                                </span>
                                            </li> 
                                        ))}
                                </ul>
                            </div>
                        </ListGroup>
                        <Card.Text className="m-3 fw-bold">Total:$</Card.Text>
                        <div className="d-flex justify-content-center">
                            <Link to={"/pedidoconf"} className="my-3 p-3 botonconf">
                                Confirmar pedido
                            </Link>
                        </div>
                    </aside>
                </Col>
            </Row>
        </Container>
    );
};

export default HazTuPedido;
