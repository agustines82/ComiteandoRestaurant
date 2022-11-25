import { Row, Container, Card, Col, ListGroup, Carousel, Table } from "react-bootstrap";
import CardMenu from "./menu/CardMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultarApiProductos } from "../helpers/queries";

const HazTuPedido = () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado")) || {};
    const [productos, setProductos] = useState([]);

    const categorias = ["BENTOS", "TAKA TAKOS", "BROCHETAS Y KUSHIAGES", "KAITEN SUSHI",
    "MAKI SUSHI BAR", "TAZONES DONBURI", "RAMEN", "TEPPANYAKI", "ARROZ", "NIGIRI BAR",
    "SASHIMI", "MOCKTAILS", "CERVEZA Y SAKE", "REFRESCOS"];

    const handleChangeFiltros = (e)=>{
        console.log(e.targeg.value);
    }
    const enviarPedido = ()=>{
        console.log("Enviando el pedido")
    }

    useEffect(() => {
        consultarApiProductos().then((respuestaListaProductos) => {
            let listaProductosDisponibles = respuestaListaProductos.filter(
                (producto)=> producto.estado === true
                );
            setProductos(listaProductosDisponibles);
        });
    }, []);

    return (
        <>
            <Carousel className="mt-3">
                <Carousel.Item interval={550}>
                    <img
                        className="d-block w-100"
                        src="https://static.wixstatic.com/media/a7716d_36b3a25ef9c4451ab50257c9edf8db9d~mv2.png/v1/fill/w_1280,h_320,al_c,q_90/a7716d_36b3a25ef9c4451ab50257c9edf8db9d~mv2.webp"
                        alt="comida 1"
                    />
                </Carousel.Item>
                <Carousel.Item interval={550}>
                    <img
                        className="d-block w-100"
                        src="https://static.wixstatic.com/media/a7716d_118a1a3acc0a4a278b7537dc707762f8~mv2.png/v1/fill/w_1280,h_320,al_c,q_90/a7716d_118a1a3acc0a4a278b7537dc707762f8~mv2.webp"
                        alt="comida 2"
                    />
                </Carousel.Item>
                <Carousel.Item interval={550}>
                    <img
                        className="d-block w-100"
                        src="https://static.wixstatic.com/media/a7716d_06fb654253264502968dcd0649a2aef0~mv2.png/v1/fill/w_1280,h_320,al_c,q_90/a7716d_06fb654253264502968dcd0649a2aef0~mv2.webp"
                        alt="comida 3"
                    />
                </Carousel.Item>
            </Carousel>
            <Container fluid className="mainSection">
                <Row className="mt-5">
                    <Col className="mt-4" md={12} lg={8}>
                        <section className="d-flex justify-content-end me-3">
                            <select className="filtradoSelect" onChange={handleChangeFiltros}>
                                <option defaultChecked value="">
                                    Selecciona por categoria
                                </option>
                                {
                                    categorias.map((categoria, position)=>{
                                        return <option key={position} value={categoria}>{categoria}</option>
                                    })
                                }
                            </select>
                        </section>
                        {
                            categorias.map((categoria, position)=>{
                                let productosFiltrados = productos.filter((producto)=>producto.categoria===categoria)
                                if(productosFiltrados.length > 0){
                                    return(
                                    <div key={position}>
                                        <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">{categoria}</h3>
                                        <Row>
                                            {
                                                productosFiltrados.map((producto)=>{
                                                    return <CardMenu key={producto._id} producto={producto} />
                                                })
                                            }
                                        </Row>
                                    </div>
                                    ) 
                                }                                  
                                }
                            )
                        }                        
                    </Col>
                    <Col md={12} lg={4}>
                        <aside className="px-5">
                            <Card.Title className="text-center fs-4 mt-3">Mi pedido</Card.Title>
                            <hr />
                            <ListGroup variant="flush">
                                <div>
                                    <ul>
                                        <Row className="d-flex flex-nowrap fs-4">
                                            <Col>
                                                {/* {pedido.map((pedido) => (
                                                    <div className="d-flex justify-content-between mt-1" key={pedido.productos._id}>
                                                        {pedido.cantidad} {pedido.productos.nombre} ${pedido.productos.precio}
                                                        <span className="botonpedido2" onClick={() => borrarProducto(pedido.productos._id)}>
                                                            <i className="bi bi-trash3-fill"></i>
                                                        </span>
                                                    </div>
                                                ))} */}
                                            </Col>
                                        </Row>
                                    </ul>
                                </div>
                            </ListGroup>

                            {/* {total > 0 ? <Card.Text className="m-3 fs-3 fw-bold">Total: ${total}</Card.Text> : <p>No hay productos en el carrito</p>} */}

                            <hr />
                            <div className="d-flex justify-content-center">
                                <Link to={"/pedidoconf"} className="my-3 p-3 botonconf">
                                    Confirmar pedido
                                </Link>
                            </div>
                        </aside>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HazTuPedido;
