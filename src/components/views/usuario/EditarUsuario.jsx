import { Form, Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
const EditarUsuario = () => {
    return (
        <>
            <Container className="mainSection mb-5">
                <Breadcrumb className="fs-small">
                    <Link className="linksMenu hoverLinksMenu" to="/">
                        Inicio /
                    </Link>
                    <Link className="linksMenu hoverLinksMenu" to="/administrar">
                        Admininistrar /
                    </Link>
                    <Breadcrumb.Item active>Editar Usuario</Breadcrumb.Item>
                </Breadcrumb>
                <section className="container mt-5">
                    <h3 className="display-3 mt-3 fontTitulos">Editar Usuario</h3>
                    <hr />
                </section>
                <section className="container my-3">
                    <Form className="container">
                        <Form.Group className="mb-3" controlId="formNombreUsuario">
                            <Form.Label className="fontTitulos fs-5">Usuario</Form.Label>
                            <Form.Control required type="text" placeholder="Ej:Moshi" />
                            <Form.Text className="text-danger ms-3">el nombre de usuario es requerido</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label className="fontTitulos fs-5">Email</Form.Label>
                            <Form.Control required type="email" placeholder="ejemplo@mail.com" />
                            <Form.Text className="text-danger ms-3">el emai es obligatorio </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label className="fontTitulos fs-5">Password</Form.Label>
                            <Form.Control required type="text" placeholder="Ej:Sushi" />
                            <Form.Text className="text-danger ms-3">la contraseña es requerida</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEstado">
                            <Form.Label className="fontTitulos fs-5">Estado*</Form.Label>
                            <Form.Select aria-label="Default select">
                                <option value="">Seleccione una opción...</option>
                                <option value="Activo">Activo</option>
                                <option value="Suspendido">Suspendido</option>
                            </Form.Select>
                            <Form.Text className="text-danger ms-3">Debe elegir un Estado</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPerfil">
                            <Form.Label className="fontTitulos fs-5">Perfil*</Form.Label>
                            <Form.Select aria-label="Default select">
                                <option value="">Seleccione una opción...</option>
                                <option value="Cliente">Cliente</option>
                                <option value="Administrador">Administrador</option>
                            </Form.Select>
                            <Form.Text className="text-danger ms-3">Debe elegir un Perfil</Form.Text>
                        </Form.Group>
                        <div className="text-center">
                            <button className="backgroundBotones rounded border-0 fontTitulos fs-4" type="submit">
                                Guardar
                            </button>
                        </div>
                    </Form>
                </section>
            </Container>
        </>
    );
};

export default EditarUsuario;
