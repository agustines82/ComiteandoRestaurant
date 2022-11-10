import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import comitiandoLogo from "../../assets/img/comitiandoLogo.jpg";

const Menu = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} end to="/">
                        <img src={comitiandoLogo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink end to="/" className={"nav-item nav-link"}>
                                Inicio
                            </NavLink>
                            <NavLink end to="/haz" className={"nav-item nav-link"}>
                                Haz tu Pedido
                            </NavLink>
                            <NavLink end to="/administrar" className={"nav-item nav-link"}>
                                Aministrador
                            </NavLink>
                            <NavLink end to="/administrar/usuario/registro" className={"nav-item nav-link"}>
                                Registro
                            </NavLink>
                            <NavLink end to="/usuario/login" className={"nav-item nav-link"}>
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
