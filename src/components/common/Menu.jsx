import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import comitiandoLogo from "../../assets/img/comitiandoLogo.jpg";
import Login from "../views/Login";
import Registro from "../views/Registro";

const Menu = () => {
    const [usuarioLogueado, setUsuarioLogueado] = useState({});
    
    const cerrarSesion=()=>{
        localStorage.removeItem('usuarioLogueado');
        setUsuarioLogueado({})
    }
    
    return (
        <header>
            <Navbar className="backgroundGeneral" expand="lg">
                <Container className="mt-1">
                    <Navbar.Brand as={Link} end to="/">
                        <img src={comitiandoLogo} alt="logo menu" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink end to="/" className={"nav-item linksMenu fw-bold fontTitulos fs-3 hoverLinksMenu"}>
                                Inicio
                            </NavLink>
                            <NavLink
                                end
                                to="/haz"
                                className={
                                    "nav-item linksMenu backgroundBotones rounded fw-bolder fontTitulos fs-3 hazTuPedidoMenu hoverHazTuPedidoMenu"
                                }
                            >
                                Haz tu Pedido
                            </NavLink>
                            <NavLink end to="/administrar" className={"nav-item linksMenu fw-bold fontTitulos fs-3 hoverLinksMenu"}>
                                Administrador
                            </NavLink>
                            {usuarioLogueado.email?
                            <>
                            <NavLink to={'/'}
                            onClick={cerrarSesion}
                            className={
                                'nav-item linksMenu fw-bold backgroundBotones text-white fs-5 rounded h-25 hoverLoginOutMenu'
                            }
                            >
                                Logout<i className="bi bi-box-arrow-in-right"></i>
                            </NavLink>
                            </>
                            :
                            <>
                            <Registro setUsuarioLogueado={setUsuarioLogueado} />
                            <Login setUsuarioLogueado = {setUsuarioLogueado}/>
                            <NavLink end to="/carrito" className={"nav-item linksMenu fs-4 hoverLinksMenu"}>
                                <i className="bi bi-shop-window"></i>
                            </NavLink>
                            </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Menu;
