import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemPedido from "./menu/ItemPedido";
import ItemMenu from "./menu/ItemMenu";
import ItemUsuario from "./usuario/ItemUsuario";
import { useEffect, useState } from "react";
import { consultarApiPedidos, consultarApiProductos, consultarApiUsuarios } from "../helpers/queries";
import { InputGroup, Form, Button } from "react-bootstrap";

const Administrador = () => {
    //Variables de estado para Lista Pedido, su paginación y filtrado
    const [pedidos, setPedidos] = useState([]);
    console.log(pedidos);
    const [paginaActualPedidos, setPaginaActualPedidos] = useState(1);
    //filtrado
    const [pedidosFiltrados, setPedidosFiltrados] = useState([]);

    //Variables de estado para Lista Productos y su paginacion
    const [productos, setProductos] = useState([]);
    const [paginaActualProductos, setPaginaActualProductos] = useState(1);
    //filtrado
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [inputBuscar, setInputBuscar] = useState("");

    //Variables de estado para Lista Usuarios y su paginacion
    const [usuarios, setUsuarios] = useState([]);
    const [paginaActualUsuarios, setPaginaActualUsuarios] = useState(1);
    //filtrado
    const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);

    useEffect(() => {
        consultarApiPedidos().then((respuestaListaPedidos) => {
            setPedidos(respuestaListaPedidos);
        });
        consultarApiProductos().then((respuestaListaProductos) => {
            setProductos(respuestaListaProductos);
        });
        consultarApiUsuarios().then((respuestaListaUsuarios) => {
            setUsuarios(respuestaListaUsuarios);
        });
    }, [paginaActualPedidos, paginaActualUsuarios]);

    //LOGICA PAGINACION Y FILTRADO LISTA PEDIDOS PENDIENTES
    //paginado
    const pedidosPorPagina = 4;
    const indexUltimoPedido = paginaActualPedidos * pedidosPorPagina;
    const indexPrimerPedido = indexUltimoPedido - pedidosPorPagina;
    const pedidosPaginados = pedidos.slice(indexPrimerPedido, indexUltimoPedido);
    //filtrado
    const pedidosFiltradosPaginados = pedidosFiltrados.slice(indexPrimerPedido, indexUltimoPedido);
    //cambiar la pagina
    const nextPagePedidos = () => {
        if (pedidosFiltrados.length === 0 || paginaActualPedidos < pedidosFiltrados.length / pedidosPorPagina) {
            if (paginaActualPedidos < pedidos.length / pedidosPorPagina) {
                setPaginaActualPedidos(paginaActualPedidos + 1);
            }
        }
    };
    const previusPagePedidos = () => {
        if (paginaActualPedidos > 1) {
            setPaginaActualPedidos(paginaActualPedidos - 1);
        }
    };
    //filtrar pedidos
    const handleChangePedidoFiltrado = (e) => {
        const valor = e.target.value;
        setPaginaActualPedidos(1);
        const filtroPedidosRealizados = pedidos.filter((pedido) => pedido.estado === true);
        const filtroPedidosPendientes = pedidos.filter((pedido) => pedido.estado === false);

        if (valor === "true") {
            setPedidosFiltrados(filtroPedidosRealizados);
        } else if (valor === "false") {
            setPedidosFiltrados(filtroPedidosPendientes);
        } else if (valor === "0") {
            setPedidosFiltrados([]);
        }
    };

    //LOGICA PAGINACION Y FILTRADO LISTA PRODUCTOS
    const productosPorPagina = 10;
    const indexUltimoProducto = paginaActualProductos * productosPorPagina;
    const indexPrimerProducto = indexUltimoProducto - productosPorPagina;
    const productosPaginados = productos.slice(indexPrimerProducto, indexUltimoProducto);
    //filtrado de productos
    const productosFiltradosPaginados = productosFiltrados.slice(indexPrimerProducto, indexUltimoProducto);

    const handleChangeProductoFiltrado = (e) => {
        const valor = e.target.value;
        setPaginaActualProductos(1);
        const filtroProductosDisponibles = productos.filter((producto) => producto.estado === true);
        const filtroProductosND = productos.filter((producto) => producto.estado === false);
        if (valor === "true") {
            setProductosFiltrados(filtroProductosDisponibles);
        } else if (valor === "false") {
            setProductosFiltrados(filtroProductosND);
        } else if (valor === "0") {
            setProductosFiltrados([]);
        }
    };
    const buscarProducto = () => {
        const productoBuscadoInput = productos.filter((producto) => producto.nombre.includes(inputBuscar));
        if (productoBuscadoInput.length > 0) {
            setProductosFiltrados(productoBuscadoInput);
        } else if (productoBuscadoInput.length === 0) {
            setProductosFiltrados([]);
        }
    };
    //cambiar la pagina
    const nextPageProductos = () => {
        if (productosFiltrados.length === 0 || paginaActualProductos < productosFiltrados.length / productosPorPagina) {
            if (paginaActualProductos < productos.length / productosPorPagina) {
                setPaginaActualProductos(paginaActualProductos + 1);
            }
        }
    };
    const previusPageProductos = () => {
        if (paginaActualProductos > 1) {
            setPaginaActualProductos(paginaActualProductos - 1);
        }
    };

    //LOGICA PAGINACION Y FILTRADO LISTA USUARIOS
    const usuariosPorPagina = 5;
    const indexUltimoUsuario = paginaActualUsuarios * usuariosPorPagina;
    const indexPrimerUsuario = indexUltimoUsuario - usuariosPorPagina;
    const usuariosPaginados = usuarios.slice(indexPrimerUsuario, indexUltimoUsuario);
    //filtrado
    const usuariosFiltradosPaginados = usuariosFiltrados.slice(indexPrimerUsuario, indexUltimoUsuario);
    //cambiar la pagina
    const nextPageUsuarios = () => {
        if (usuariosFiltrados.length === 0 || paginaActualUsuarios < usuariosFiltrados.length / usuariosPorPagina) {
            if (paginaActualUsuarios < usuarios.length / usuariosPorPagina) {
                setPaginaActualUsuarios(paginaActualUsuarios + 1);
            }
        }
    };
    const previusPageUsuarios = () => {
        if (paginaActualUsuarios > 1) {
            setPaginaActualUsuarios(paginaActualUsuarios - 1);
        }
    };
    //filtrar usuarios
    const handleChangeUsuarioFiltrado = (e) => {
        const valor = e.target.value;
        setPaginaActualUsuarios(1);
        const filtroUsuariosActivos = usuarios.filter((usuario) => usuario.estado === true);
        const filtroUsuariosSuspendidos = usuarios.filter((usuario) => usuario.estado === false);
        const filtroUsuariosAdmin = usuarios.filter((usuario) => usuario.perfil === "Administrador");
        const filtroUsuariosClientes = usuarios.filter((usuario) => usuario.perfil === "cliente");

        if (valor === "true") {
            setUsuariosFiltrados(filtroUsuariosActivos);
        } else if (valor === "false") {
            setUsuariosFiltrados(filtroUsuariosSuspendidos);
        } else if (valor === "Administrador") {
            setUsuariosFiltrados(filtroUsuariosAdmin);
        } else if (valor === "cliente") {
            setUsuariosFiltrados(filtroUsuariosClientes);
        } else if (valor === "0") {
            setUsuariosFiltrados([]);
        }
    };

    return (
        <Container fluid className="mainSection">
            <article className="d-flex justify-content-between align-items-center mt-5 ">
                <h1 className="display-3 mt-3 fontTitulos">Pedidos Solicitados</h1>
            </article>
            <div className="d-flex justify-content-end mt-0 mb-2">
                <select className="filtradoSelect" onChange={handleChangePedidoFiltrado}>
                    <option value="0">Filtrar...</option>
                    <option value="false">Pendiente</option>
                    <option value="true">Realizado</option>
                </select>
            </div>
            <hr />
            <Table responsive striped hover size="sm" className="shadow">
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Usuario</th>
                        <th>Fecha</th>
                        <th>Productos</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {pedidosFiltrados.length === 0
                        ? pedidosPaginados.map((pedido) => <ItemPedido key={pedido._id} pedido={pedido} setPedidos={setPedidos} />)
                        : pedidosFiltradosPaginados.map((pedido) => <ItemPedido key={pedido._id} pedido={pedido} setPedidos={setPedidos} />)}
                </tbody>
            </Table>
            <div className="d-flex justify-content-end me-2">
                <button className="paginacion" onClick={previusPagePedidos}>
                    <i className="bi bi-arrow-left"></i>
                </button>
                <button className="paginacion" onClick={nextPagePedidos}>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
            <article className="d-flex justify-content-start align-items-center mt-5 ">
                <h1 className="display-3 mt-3 fontTitulos">Productos del Menu</h1>
                <Link className="ms-3 p-2 backgroundBotones rounded linksMenu" to="/administrar/crear">
                    Agregar
                </Link>
            </article>
            <div className="d-flex justify-content-between align-items-end mt-0 mb-2">
                <InputGroup className="mb-0 w-25 me-3">
                    <Form.Control
                        placeholder="Nombre del producto"
                        aria-label="Nombre del Producto"
                        aria-describedby="basic-addon2"
                        onChange={(e) => {
                            setInputBuscar(e.target.value);
                        }}
                        value={inputBuscar}
                    />
                    <Button variant="outline" id="button-addon2" onClick={buscarProducto}>
                        <i className="bi bi-search"></i>
                    </Button>
                </InputGroup>
                <select className="filtradoSelect h-50" onChange={handleChangeProductoFiltrado}>
                    <option value="0">Filtrar...</option>
                    <option value="true">Disponible</option>
                    <option value="false">No Disponible</option>
                </select>
            </div>
            <hr />
            <Table responsive striped hover size="sm" className="shadow">
                <thead>
                    <tr>
                        <th className="codTable">Cod</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Precio</th>
                        <th>Detalle</th>
                        <th>Categoria</th>
                        <th>Imagen</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productosFiltrados.length === 0
                        ? productosPaginados.map((producto) => <ItemMenu key={producto._id} producto={producto} setProductos={setProductos} />)
                        : productosFiltradosPaginados.map((producto) => (
                              <ItemMenu key={producto._id} producto={producto} setProductos={setProductos} />
                          ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-end me-2">
                <button className="paginacion" onClick={previusPageProductos}>
                    <i className="bi bi-arrow-left"></i>
                </button>
                <button className="paginacion" onClick={nextPageProductos}>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
            <article className="d-flex justify-content-start align-items-center mt-5 ">
                <h1 className="display-3 mt-3 fontTitulos">Usuarios</h1>
            </article>
            <div className="d-flex justify-content-end mt-0 mb-2">
                <select className="filtradoSelect" onChange={handleChangeUsuarioFiltrado}>
                    <option value="0">Filtrar...</option>
                    <option value="true">Activo</option>
                    <option value="false">Suspendido</option>
                    <option value="Administrador">Administrador</option>
                    <option value="cliente">Cliente</option>
                </select>
            </div>
            <hr />
            <Table responsive striped bordered hover size="sm" className="shadow">
                <thead>
                    <tr>
                        <th className="codTable">Cod</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Perfil</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {usuariosFiltrados.length === 0
                        ? usuariosPaginados.map((usuario) => <ItemUsuario key={usuario._id} usuario={usuario} />)
                        : usuariosFiltradosPaginados.map((usuario) => <ItemUsuario key={usuario._id} usuario={usuario} />)}
                </tbody>
            </Table>
            <div className="d-flex justify-content-end me-2">
                <button className="paginacion" onClick={previusPageUsuarios}>
                    <i className="bi bi-arrow-left"></i>
                </button>
                <button className="paginacion" onClick={nextPageUsuarios}>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
        </Container>
    );
};

export default Administrador;
