import { Table, Container, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemPedido from "./menu/ItemPedido";
import ItemMenu from "./menu/ItemMenu";
import ItemUsuario from "./usuario/ItemUsuario";
import { useEffect, useState } from "react";
import { consultarApiPedidos, consultarApiProductos, consultarApiUsuarios } from "../helpers/queries";

const Administrador = () => {
    const [pedidos, setPedidos] = useState([]);
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

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
    }, []);

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
                    {pedidos.map((pedido) => (
                        <ItemPedido key={pedido._id} pedido={pedido} setPedidos={setPedidos} />
                    ))}
                </tbody>
            </Table>
            <Pagination size="sm" className="justify-content-end">
                <button className="paginacion mx-1">&larr;</button>
                <button className="paginacion mx-1">&rarr;</button>
            </Pagination>
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
                <button className="paginacion mx-1">&larr;</button>
                <button className="paginacion mx-1">&rarr;</button>
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
                <button className="paginacion mx-1">&larr;</button>
                <button className="paginacion mx-1">&rarr;</button>
            </Pagination>
        </Container>
    );
};

export default Administrador;
