import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemPedido from "./menu/ItemPedido";
import ItemMenu from "./menu/ItemMenu";
import ItemUsuario from "./usuario/ItemUsuario";
import { useEffect, useState } from "react";
import { consultarApiPedidos, consultarApiProductos, consultarApiUsuarios } from "../helpers/queries";
import PaginationPedido from "./PaginationPedido";
const Administrador = () => {
    //Variables de estado para Lista Pedido y su paginacion
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginaActualPedidos, setPaginaActualPedidos] = useState(1);
    const [pedidosPorPagina] = useState(2);

    //Variables de estado para Lista Productos y su paginacion

    const [productos, setProductos] = useState([]);

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        //paginacion Lista Pedido
        //fecthPedidos();
        //original
        consultarApiPedidos().then((respuestaListaPedidos) => {
            setPedidos(respuestaListaPedidos);
        });
        consultarApiProductos().then((respuestaListaProductos) => {
            setProductos(respuestaListaProductos);
        });
        consultarApiUsuarios().then((respuestaListaUsuarios) => {
            setUsuarios(respuestaListaUsuarios);
        });
    }, []);

    //paginacion Lista Pedido
    const indexUltimoPedido = paginaActualPedidos * pedidosPorPagina;
    const indexPrimerPedido = indexUltimoPedido - pedidosPorPagina;
    const pedidosActuales = pedidos.slice(indexPrimerPedido, indexUltimoPedido);

    const Pagination = ({ pedidosPorPagina, totalPedidos }) => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalPedidos / pedidosPorPagina); i++) {
            pageNumbers.push(i);
        }
    };

    //change page
    const paginacionTablaPedidosPendientes = (pageNumber) => setPaginaActualPedidos(pageNumber);

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
                        <ItemPedido key={pedido._id} pedido={pedido} setPedidos={setPedidos} loading={loading} setLoading={setLoading} />
                    ))}
                </tbody>
            </Table>
            <PaginationPedido
                pedidosPorPagina={pedidosPorPagina}
                totalPedidos={pedidos.length}
                paginacionTablaPedidosPendientes={paginacionTablaPedidosPendientes}
            />
            {/* <Pagination size="sm" className="justify-content-end">
                <button type="submit" className="paginacion mx-1">
                    &larr;
                </button>
                <button type="submit" className="paginacion mx-1">
                    &rarr;
                </button>
            </Pagination> */}
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
                    {productos.map((producto) => (
                        <ItemMenu key={producto._id} producto={producto} setProductos={setProductos} />
                    ))}
                </tbody>
            </Table>
            <Pagination size="sm" className="justify-content-end">
                <button type="submit" className="paginacion mx-1">
                    &larr;
                </button>
                <button type="submit" className="paginacion mx-1">
                    &rarr;
                </button>
            </Pagination>
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
                    {usuarios.map((usuario) => (
                        <ItemUsuario key={usuario._id} usuario={usuario} />
                    ))}
                </tbody>
            </Table>
            <Pagination size="sm" className="justify-content-end">
                <button type="submit" className="paginacion mx-1">
                    &larr;
                </button>
                <button type="submit" className="paginacion mx-1">
                    &rarr;
                </button>
            </Pagination>
        </Container>
    );
};

export default Administrador;
