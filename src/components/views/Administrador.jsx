import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemPedido from "./menu/ItemPedido";
import ItemMenu from "./menu/ItemMenu";
import ItemUsuario from "./usuario/ItemUsuario";
import { useEffect, useReducer, useState } from "react";
import { consultarApiPedidos, consultarApiProductos, consultarApiUsuarios } from "../helpers/queries";
import PaginationPedido from "./PaginationPedido";
import PaginationMenu from "./PaginationMenu";
import PaginationUsuario from "./PaginationUsuario";

const Administrador = () => {
    const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
    //Variables de estado para Lista Pedido y su paginación
    const [pedidos, setPedidos] = useState([]);
    const [paginaActualPedidos, setPaginaActualPedidos] = useState(1);
    const [pedidosPorPagina] = useState(3);

    //Variables de estado para Lista Productos y su paginacion
    const [productos, setProductos] = useState([]);
    const [paginaActualProductos, setPaginaActualProductos] = useState(1);
    const [productosPorPagina] = useState(5);

    //Variables de estado para Lista Usuarios y su paginacion
    const [usuarios, setUsuarios] = useState([]);
    const [paginaActualUsuarios, setPaginaActualUsuarios] = useState(1);
    const [usuariosPorPagina] = useState(3);

    useEffect(() => {
        consultarApiPedidos().then((respuestaListaPedidos) => {
            setPedidos(respuestaListaPedidos);
            forceUpdate();
        });
        consultarApiProductos().then((respuestaListaProductos) => {
            setProductos(respuestaListaProductos);
        });
        consultarApiUsuarios().then((respuestaListaUsuarios) => {
            setUsuarios(respuestaListaUsuarios);
        });
    }, []);

    //LOGICA PAGINACION LISTA PEDIDOS PENDIENTES
    const indexUltimoPedido = paginaActualPedidos * pedidosPorPagina;
    const indexPrimerPedido = indexUltimoPedido - pedidosPorPagina;
    const pedidosActuales = pedidos.slice(indexPrimerPedido, indexUltimoPedido);
    //cambiar la pagina
    const paginacionTablaPedidosPendientes = (paginaNumero) => setPaginaActualPedidos(paginaNumero);

    //LOGICA PAGINACION LISTA PRODUCTOS
    const indexUltimoProducto = paginaActualProductos * productosPorPagina;
    const indexPrimerProducto = indexUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indexPrimerProducto, indexUltimoProducto);
    //cambiar la pagina
    const paginacionTablaProductos = (paginaNumero) => setPaginaActualProductos(paginaNumero);

    //LOGICA PAGINACION LISTA USUARIOS
    const indexUltimoUsuario = paginaActualUsuarios * usuariosPorPagina;
    const indexPrimerUsuario = indexUltimoUsuario - usuariosPorPagina;
    const usuariosActuales = usuarios.slice(indexPrimerUsuario, indexUltimoUsuario);
    //cambiar la pagina
    const paginacionTablaUsuarios = (paginaNumero) => setPaginaActualUsuarios(paginaNumero);

    return (
        <Container className="mainSection">
            <article className="d-flex justify-content-between align-items-center mt-5 ">
                <h1 className="display-3 mt-3 fontTitulos">Pedidos Solicitados</h1>
            </article>
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
                    {pedidosActuales.map((pedido) => (
                        <ItemPedido key={pedido._id} pedido={pedido} setPedidos={setPedidos} />
                    ))}
                </tbody>
            </Table>
            <PaginationPedido
                pedidosPorPagina={pedidosPorPagina}
                totalPedidos={pedidos.length}
                paginacionTablaPedidosPendientes={paginacionTablaPedidosPendientes}
            />

            <article className="d-flex justify-content-start align-items-center mt-5 ">
                <h1 className="display-3 mt-3 fontTitulos">Productos del Menu</h1>
                <Link className="ms-3 p-2 backgroundBotones rounded linksMenu" to="/administrar/crear">
                    Agregar
                </Link>
            </article>
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
                    {productosActuales.map((producto) => (
                        <ItemMenu key={producto._id} producto={producto} setProductos={setProductos} />
                    ))}
                </tbody>
            </Table>
            <PaginationMenu
                productosPorPagina={productosPorPagina}
                totalProductos={productos.length}
                paginacionTablaProductos={paginacionTablaProductos}
            />
            <article className="d-flex justify-content-start align-items-center mt-5 ">
                <h1 className="display-3 mt-3 fontTitulos">Usuarios</h1>
            </article>
            <hr />
            <Table responsive striped bordered hover size="sm" className="shadow">
                <thead>
                    <tr>
                        <th className="codTable">Cod</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Perfil</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {usuariosActuales.map((usuario) => (
                        <ItemUsuario key={usuario._id} usuario={usuario} />
                    ))}
                </tbody>
            </Table>
            <PaginationUsuario
                usuariosPorPagina={usuariosPorPagina}
                totalUsuarios={usuarios.length}
                paginacionTablaUsuarios={paginacionTablaUsuarios}
            />
        </Container>
    );
};

export default Administrador;
