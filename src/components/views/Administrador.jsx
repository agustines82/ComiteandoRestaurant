import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemPedido from "./menu/ItemPedido";
import ItemMenu from "./menu/ItemMenu";
import ItemUsuario from "./usuario/ItemUsuario";

const Administrador = () => {
    return (
        <Container className="mainSection">
            <article className="d-flex justify-content-between align-items-center mt-5 ">
                <h1 className="display-3 mt-3 fontTitulos">Pedidos Solicitados</h1>
            </article>
            <hr />
            <Table responsive striped bordered hover size="sm" className="shadow">
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
                    <ItemPedido />
                </tbody>
            </Table>
            <article className="d-flex justify-content-start align-items-center mt-5 ">
                <h1 className="display-3 mt-3 fontTitulos">Productos del Menu</h1>
                <Link className="ms-3 p-2 backgroundBotones rounded linksMenu" to="/administrar/crear">
                    Agregar
                </Link>
            </article>
            <hr />
            <Table responsive striped bordered hover size="sm" className="shadow">
                <thead>
                    <tr>
                        <th>Cod</th>
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
                    <ItemMenu />
                </tbody>
            </Table>
            <article className="d-flex justify-content-start align-items-center mt-5 ">
                <h1 className="display-3 mt-3 fontTitulos">Usuarios</h1>
            </article>
            <hr />
            <Table responsive striped bordered hover size="sm" className="shadow">
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Estado</th>
                        <th>Perfil</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <ItemUsuario />
                </tbody>
            </Table>
        </Container>
    );
};

export default Administrador;
