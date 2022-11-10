import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import comitiandoLogo from "../../assets/img/comitiandoLogo.jpg";

const Menu = () => {
    return (
        <header>
            <Navbar className="backgroundGeneral" variant="light" expand="lg">
                <Container className="mt-1">
                    <Navbar.Brand as={Link} end to="/">
                        <img src={comitiandoLogo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink end to="/" className={"nav-item nav-link fw-bold fontTitulos fs-3 hoverMenu1"}>
                                Inicio
                            </NavLink>
                            <NavLink
                                end
                                to="/haz"
                                className={"nav-item nav-link backgroundBotones rounded fw-bolder fontTitulos fs-3 hazTuPedidoMenu"}
                            >
                                Haz tu Pedido
                            </NavLink>
                            <NavLink end to="/administrar" className={"nav-item nav-link fw-bold fontTitulos fs-3 hoverMenu1"}>
                                Aministrador
                            </NavLink>
                            <NavLink end to="/administrar/usuario/registro" className={"nav-item nav-link fw-bold fontTitulos fs-3 hoverMenu1"}>
                                Registro
                            </NavLink>
                            <NavLink end to="/usuario/login" className={"nav-item nav-link fw-bold backgroundBotones text-white fs-5 rounded h-25"}>
                                Login/out
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Menu;
