import {
    Row,
    Container,
    Card,
    Col,
    ListGroup,
    Carousel,
    Table,
    Button
} from "react-bootstrap";
import CardMenu from "./menu/CardMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultarApiProductos } from "../helpers/queries";

const HazTuPedido = () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado")) || {};
    const [productos, setProductos] = useState([]);
    const [pedido, setPedido] = useState([]);

    const categorias = [
        "BENTOS",
        "TAKA TAKOS",
        "BROCHETAS Y KUSHIAGES",
        "KAITEN SUSHI",
        "MAKI SUSHI BAR",
        "TAZONES DONBURI",
        "RAMEN",
        "TEPPANYAKI",
        "ARROZ",
        "NIGIRI BAR",
        "SASHIMI",
        "MOCKTAILS",
        "CERVEZA Y SAKE",
        "REFRESCOS",
    ];

    const agregarProducto = (cantidad, productoAgregado)=>{
        productoAgregado.cantidad = cantidad;
        setPedido([...pedido, productoAgregado]);
    }

    const handleChangeFiltros = (e) => {
        let categoriaFiltro = e.target.value;
        let productosFiltrados;
        if(categoriaFiltro !== "todas"){
            productosFiltrados = productos.filter((producto)=>producto.categoria === categoriaFiltro);
            setProductos(productosFiltrados);
        } else {
            consultarApiProductos().then((respuestaListaProductos) => {
                let listaProductosDisponibles = respuestaListaProductos.filter(
                    (producto) => producto.estado === true
                );
                setProductos(listaProductosDisponibles);
            });
        }        
    };
    const enviarPedido = () => {
        console.log("Enviando el pedido");
    };

    useEffect(() => {
        consultarApiProductos().then((respuestaListaProductos) => {
            let listaProductosDisponibles = respuestaListaProductos.filter(
                (producto) => producto.estado === true
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
                <Row>
                    <Col md={8}>
                        <div className="d-flex justify-content-around">
                            <select
                                className="filtradoSelect my-3"
                                onChange={handleChangeFiltros}
                            >
                                <option defaultChecked value="">
                                    Selecciona por categoria
                                </option>
                                <option value="todas">
                                    TODAS
                                </option>
                                {categorias.map((categoria, position) => {
                                    return (
                                        <option
                                            key={position}
                                            value={categoria}
                                        >
                                            {categoria}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        {categorias.map((categoria, position) => {
                            let productosFiltrados = productos.filter(
                                (producto) => producto.categoria === categoria
                            );
                            if (productosFiltrados.length > 0) {
                                return (
                                    <div key={position}>
                                        <h3 className="fontTitulos fs-1 fw-bold ms-5 mt-5">
                                            {categoria}
                                        </h3>
                                        <Row>
                                            {productosFiltrados.map(
                                                (producto) => {
                                                    return (
                                                        <CardMenu
                                                            key={producto._id}
                                                            producto={producto}
                                                            agregarProducto={agregarProducto}
                                                        />
                                                    );
                                                }
                                            )}
                                        </Row>
                                    </div>
                                );
                            }
                        })}
                    </Col>
                    <Col md={4}>
                        <div className="sticky-top">
                        <h2 className="text-center">Mi Pedido</h2>
                        <Table>
                            <tbody>
                                {
                                    pedido.map((producto)=>{
                                        return(
                                        <tr>
                                            <td className="align-middle">{producto.cantidad}</td>
                                            <td>{producto.nombre}</td>
                                            <td>${producto.precio * producto.cantidad}</td>
                                            <td className="align-middle"><Button variant="none"><i className="bi bi-trash3-fill"></i></Button></td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        <p>Total</p>
                        <p>$importe</p>
                        <Button variant="none" className="boton w-100">Confirmar Pedido</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HazTuPedido;
