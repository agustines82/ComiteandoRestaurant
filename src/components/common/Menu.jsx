import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import comitiandoLogo from "../../assets/img/comitiandoLogo.jpg";
import Login from "../views/Login";
import Registro from "../views/Registro";

const Menu = () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado")) || {};
    const [usuarioLogueado, setUsuarioLogueado] = useState(usuario.usuario);
    const cerrarSesion = () => {
        localStorage.removeItem("usuarioLogueado");
        sessionStorage.removeItem("pedido");
        setUsuarioLogueado();
    };
    
    return (
        <header>
            <Navbar className="backgroundGeneral" expand="lg">
                <Container fluid className="mt-3">
                    <Navbar.Brand as={Link} to="/">
                        <img src={comitiandoLogo} alt="logo menu" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className={"nav-item linksMenu fw-bold fontTitulos fs-1 hoverLinksMenu"}>
                                Inicio
                            </NavLink>
                            <NavLink
                                to="/haz"
                                className="nav-item linksMenu backgroundBotones rounded fw-bolder fontTitulos fs-1 hazTuPedidoMenu hoverHazTuPedidoMenu"
                            >
                                Haz tu Pedido
                            </NavLink>
                            {!usuarioLogueado ? (
                                <>
                                    <Registro />
                                    <Login setUsuarioLogueado={setUsuarioLogueado} />
                                </>
                            ) : (
                                <>
                                    {usuarioLogueado.perfil === "Administrador" ? (
                                        <>
                                            <NavLink to="/administrar" className={"nav-item linksMenu fw-bold fontTitulos fs-1 hoverLinksMenu"}>
                                                Administrador
                                            </NavLink>
                                            <NavLink
                                                to={"/"}
                                                onClick={cerrarSesion}
                                                className={
                                                    "nav-item linksMenu fw-bold backgroundBotones text-white fs-3 rounded h-25 hoverLoginOutMenu"
                                                }
                                            >
                                                Logout<i className="bi bi-box-arrow-in-right"></i>
                                            </NavLink>
                                        </>
                                    ) : (
                                        <NavLink
                                            to={"/"}
                                            onClick={cerrarSesion}
                                            className={"nav-item linksMenu fw-bold backgroundBotones mx-3 text-white fs-3 rounded h-25 hoverLoginOutMenu"}
                                        >
                                            Logout<i className="bi bi-box-arrow-in-right"></i>
                                        </NavLink>
                                    )}
                                </>
                            )}
                            <NavLink to="/carrito" className={"nav-item linksMenu fs-2 hoverLinksMenu"}>
                                <i className="bi bi-shop-window"></i>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Menu;
