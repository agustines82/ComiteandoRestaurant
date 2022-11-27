import {
    Row,
    Container,
    Col,
    Carousel,
    Table,
    Button
} from "react-bootstrap";
import Swal from "sweetalert2";
import CardMenu from "./menu/CardMenu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultarApiProductos } from "../helpers/queries";

const HazTuPedido = () => {
    const [productos, setProductos] = useState([]);
    const [todos, setTodos] = useState([]);
    const pedidoSession = JSON.parse(sessionStorage.getItem("pedido")) || [];
    const [pedido, setPedido] = useState(pedidoSession);
    let importeSession = 0;
    pedidoSession.forEach(producto => {
        importeSession += (producto.cantidad * producto.precio)
    });
    const [importe, setImporte] = useState(importeSession);
    const redirect = useNavigate();

    const confirmarPedido = ()=>{
       let usuario = JSON.parse(localStorage.getItem("usuarioLogueado"))
        if(usuario){
            redirect("/pedidoconf");
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Debe inicar sesión!'
            })
        }
    }
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
        if(cantidad !== 0){
            let productoExistente = pedido.find((producto)=>producto._id === productoAgregado._id);
            if(productoExistente){
                let cantidadProducto = productoExistente.cantidad + cantidad;
                productoExistente.cantidad = cantidadProducto;
                setPedido([...pedido.filter((producto)=>producto !== productoExistente._id)]);
                setImporte(importe + cantidad * productoAgregado.precio);
                
            } else {
                productoAgregado.cantidad = cantidad;
                setPedido([...pedido, productoAgregado]);
                setImporte(importe + cantidad * productoAgregado.precio);
            }
        }
        guardarPedidoSession()
    }
    
    const guardarPedidoSession = ()=>{
        sessionStorage.setItem("pedido", JSON.stringify(pedido));
    }
    
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    const borrarProducto = (productoBorrado) => {
        setPedido([...pedido.filter((producto)=>producto._id !== productoBorrado._id)]);
        setImporte(importe - productoBorrado.cantidad * productoBorrado.precio);
    }
    
    const handleChangeFiltros = (e) => {
        if(e.target.value === ""){
            setProductos(todos);
        } else {
            let categoriaFiltro = e.target.value;
            let productosFiltrados = todos.filter((producto)=>producto.categoria === categoriaFiltro);
            setProductos(productosFiltrados);
        }
    }
    
    useEffect(() => {
        consultarApiProductos().then((respuestaListaProductos) => {
            let listaProductosDisponibles = respuestaListaProductos.filter(
                (producto) => producto.estado === true
            );
            setTodos(listaProductosDisponibles);
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
                        <div className="d-flex justify-content-around my-5">
                            <select
                                className="filtradoSelect"
                                onChange={handleChangeFiltros}
                            >
                                <option defaultChecked value="">
                                    Selecciona por categoria
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
                        <div className="sticky-top my-5">
                        <h2 className="text-center">Mi Pedido</h2>
                        <Table>
                            <tbody>
                                {
                                    pedido.map((producto)=>{
                                        return(
                                        <tr key={producto._id}>
                                            <td className="align-middle">{producto.cantidad}</td>
                                            <td className="align-middle">{producto.nombre}</td>
                                            <td className="align-middle">${producto.precio * producto.cantidad}</td>
                                            <td className="align-middle"><Button variant="none" onClick={()=>{borrarProducto(producto)}}><i className="bi bi-trash3-fill"></i></Button></td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        <hr />  
                        <p className="fw-bold fs-4">Total ${importe}</p>
                        <Button variant="none" onClick={confirmarPedido} className="boton w-100">Confirmar Pedido</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HazTuPedido;
