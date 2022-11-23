import { React } from "react";
import { Form, Card, Accordion, Table, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { crearPedidoAPI } from "../helpers/queries";

const PedidoConfirmado = () => {
    // cargar usuario desde localStorage
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    //cargar pedido desde sessionStorage
    const pedidoCliente = JSON.parse(sessionStorage.getItem("pedidoCliente")) || [];

    //variables de estado
    const [direccion, setDireccion] = useState();
    //botones + y -
    const [numeroProducto, setnumeroProducto] = useState(1);
    //objetos para usar hookform
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navegar = useNavigate();

    // const dataPedido = {
    // nombre: {usuario.usuario.nombre},
    // fecha: date,
    // productos: pedidoCliente,
    // domicilio: direccion,
    // estado:false
    // }

    const crearPedido = (dataPedido) => {
        //una vez todo validado enviamos la peticion a la API
        crearPedidoAPI(dataPedido).then((respuesta) => {
            if (respuesta.status === 201) {
                Swal.fire("Pedido creado", "El pedido se cargo correctamente", "success");
            } else {
                Swal.fire("Ocurrio un error", "Intente esta operación en unos minutos", "error");
            }
        });
        //redirecciono al usuario a la pagina de inicio
        navegar("/");
    };
    return (
        <Container>
            <Form noValidate className="formulariopedido mt-5" onSubmit={handleSubmit(crearPedido)}>
                <h3 className="text-center">Datos del envio</h3>
                <Form.Group className="mb-3 my-3">
                    <Form.Label>{usuario.usuario.nombre} necesitamos nos brindes una dirección para la entrega.</Form.Label>
                    <br />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Escribe tu dirección"
                        {...register("direccionPedido", {
                            required: "La direccion es un campo obligatorio",
                            minLength: {
                                value: 5,
                                message: "La cantidad minima de caracteres, es de 5.",
                            },
                            maxLength: {
                                value: 100,
                                message: "La cantidad maxima de caracteres, es de 100. ",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">{errors.direccionPedido?.message}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Indicaciones:</Form.Label>
                    <Form.Control
                        placeholder="Escribe tu indicacion aqui"
                        {...register("indicacionesPedido", {
                            minLength: {
                                value: 5,
                                message: "La cantidad minima de caracteres es de 5.",
                            },
                            maxLength: {
                                value: 100,
                                message: "La cantidad maxima de caracteres es de 100.",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">{errors.indicacionesPedido?.message}</Form.Text>
                </Form.Group>
            </Form>
            <Form id="FormMP">
                <Form.Label className="my-3 fs-4"> Metodos de pago</Form.Label>
                {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Tarjeta de Credito" name="group1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="Tarjeta de Debito" name="group1" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Efectivo" name="group1" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Transferencias" name="group1" type={type} id={`inline-${type}-2`} />
                    </div>
                ))}
            </Form>

            <section className="my-3">
                <Accordion className="box2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Detalle del pedido</Accordion.Header>
                        <Accordion.Body>
                            <Table type responsive className="text-center">
                                <thead>
                                    <tr className="acordionpedido">
                                        <th>Cantidad</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sushi</td>
                                        <td>$1000</td>
                                        <td>
                                            {" "}
                                            <span className="botonpedido">
                                                <i
                                                    class="bi bi-dash-circle-fill mx-1"
                                                    onClick={() => {
                                                        setnumeroProducto(numeroProducto - 1);
                                                    }}
                                                ></i>
                                                {numeroProducto}
                                                <i
                                                    class="bi bi-plus-circle-fill mx-1 "
                                                    onClick={() => {
                                                        setnumeroProducto(numeroProducto + 1);
                                                    }}
                                                ></i>
                                            </span>{" "}
                                            <span className="botonpedido2">
                                                {" "}
                                                <i class="bi bi-trash3-fill "></i>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
            <section className="my-3">
                <Card className="w-100">
                    <Card.Text className="mt-4 m-3">Subtotal:</Card.Text>
                    <Card.Text className="m-3">Total:</Card.Text>

                    <div className="d-flex justify-content-center">
                        <button className="my-3 p-3 botonconf" type="submit">
                            Comprar
                        </button>
                    </div>
                </Card>
            </section>
        </Container>
    );
};

export default PedidoConfirmado;
