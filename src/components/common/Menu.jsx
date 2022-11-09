import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Menu = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link}>Comiteando</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={"nav-item nav-link"}>Inicio</NavLink>
                            <NavLink className={"nav-item nav-link"}>Haz tu Pedido</NavLink>
                            <NavLink className={"nav-item nav-link"}>Aministrador</NavLink>
                            <NavLink className={"nav-item nav-link"}>Registro</NavLink>
                            <NavLink className={"nav-item nav-link"}>Login/out</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Menu;
