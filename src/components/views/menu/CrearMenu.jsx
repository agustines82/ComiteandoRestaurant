import { Form, Container, Breadcrumb } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearProductoMenuAPI } from "../../helpers/queries";
const CrearMenu = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const navegar = useNavigate();

    const crearProductoMenu = (dataProducto) => {
        //una vez todo validado enviamos la peticion a la API
        let token = JSON.parse(localStorage.getItem("usuarioLogueado")).token;
        crearProductoMenuAPI(dataProducto, token).then((respuesta) => {
            if (respuesta.status === 201) {
                Swal.fire("Producto creado", "El producto se cargo correctamente", "success");
            } else {
                Swal.fire("Ocurrio un error", "Intente esta operación en unos minutos", "error");
            }
        });
        //reseteo el formulario
        reset();
        //redirecciono al usuario a la pagina de administracion
        navegar("/administrar");
    };

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
                    <Breadcrumb.Item active>Agregar Producto</Breadcrumb.Item>
                </Breadcrumb>
                <section className="container mt-5">
                    <h3 className="display-3 mt-3 fontTitulos">Alta de Productos del Menu</h3>
                    <hr />
                </section>
                <section className="container my-3">
                    <Form className="container" onSubmit={handleSubmit(crearProductoMenu)}>
                        <Form.Group className="mb-3" controlId="formNombreProducto">
                            <Form.Label className="fontTitulos fs-5">Nombre producto*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej:Sushi"
                                {...register("nombre", {
                                    required: "El nombre del producto del menu es requerido",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad mínima de caracteres debe ser 2",
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "La cantidad máxima de caracteres debe ser 30",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger ms-3">{errors.nombre?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEstado">
                            <Form.Label className="fontTitulos fs-5">Estado</Form.Label>
                            <Form.Check defaultChecked type="switch" id="custom-switch" label="ND / D" {...register("estado", {})} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPrecio">
                            <Form.Label className="fontTitulos fs-5">Precio*</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Ej:250"
                                {...register("precio", {
                                    required: "El precio es un valor obligatorio",
                                    min: {
                                        value: 0,
                                        message: "El precio no puede ser menor a $0",
                                    },
                                    max: {
                                        value: 10000,
                                        message: "El precio máximo admitido es de $10.000",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger ms-3">{errors.precio?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDetalle">
                            <Form.Label className="fontTitulos fs-5">Detalle del producto*</Form.Label>
                            <Form.Control
                                as="textarea"
                                required
                                type="text"
                                placeholder="Ej:Sushi"
                                {...register("detalle", {
                                    required: "El detalle del producto del menu es obligatorio",
                                    minLength: {
                                        value: 20,
                                        message: "La cantidad mínima de caracteres debe ser 20",
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: "La cantidad máxima de caracteres debe ser 500",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger ms-3">{errors.detalle?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCategoria">
                            <Form.Label className="fontTitulos fs-5">Categoria*</Form.Label>
                            <Form.Select
                                aria-label="Default select"
                                {...register("categoria", {
                                    required: "Debe elegir una categoría",
                                })}
                            >
                                <option value="">Seleccione una opción...</option>
                                <option value="BENTOS">BENTOS</option>
                                <option value="TAKA TAKOS">TAKA TAKOS</option>
                                <option value="BROCHETAS Y KUSHIAGES">BROCHETAS Y KUSHIAGES</option>
                                <option value="KAITEN SUSHI">KAITEN SUSHI</option>
                                <option value="MAKI SUSHI BAR">MAKI SUSHI BAR</option>
                                <option value="TAZONES DONBURI">TAZONES DONBURI</option>
                                <option value="RAMEN">RAMEN</option>
                                <option value="TEPPANYAKI">TEPPANYAKI</option>
                                <option value="ARROZ">ARROZ</option>
                                <option value="NIGIRI BAR">NIGIRI BAR</option>
                                <option value="SASHIMI">SASHIMI</option>
                                <option value="MOCKTAILS">MOCKTAILS</option>
                                <option value="CERVEZA Y SAKE">CERVEZA Y SAKE</option>
                                <option value="REFRESCOS">REFRESCOS</option>
                            </Form.Select>
                            <Form.Text className="text-danger ms-3">{errors.categoria?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formImagen">
                            <Form.Label className="fontTitulos fs-5">Imagen URL*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej:'https://....'"
                                {...register("imagen", {
                                    required: "La url de la imagen es obligatoria",
                                    pattern: {
                                        value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                                        message: "Debe ingresar una url valida",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger ms-3">{errors.imagen?.message}</Form.Text>
                        </Form.Group>
                        <div className="text-center">
                            <button className="backgroundBotones rounded border-0 fontTitulos fs-4" type="submit">
                                Agregar
                            </button>
                        </div>
                    </Form>
                </section>
            </Container>
        </>
    );
};

export default CrearMenu;
