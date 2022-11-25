import { React, useEffect } from "react";
import { Form, Container, Accordion, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { crearPedidoAPI } from "../helpers/queries";

const PedidoConfirmado = () => {
    const usuarioX = JSON.parse(localStorage.getItem("usuarioLogueado"));
    //cargar pedido desde sessionStorage
    const pedidoCliente = JSON.parse(sessionStorage.getItem("keyPedido")) || [];
    console.log(pedidoCliente);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalAPagar = pedidoCliente.reduce((total, articulo) => total + articulo.cantidad * articulo.productos.precio, 0);
        setTotal(totalAPagar);
    }, []);

    //variables de estado
    const [pedidoCompleto, setpedidoCompleto] = useState({
        usuario: "",
        fecha: "",
        productos: [
            {
                producto: "",
                cantidad: 0,
                total: 0,
            },
        ],
        domicilio: "",
        indicaciones: "",
        estado: false,
    });

    //objetos para usar hookform
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navegar = useNavigate();

    const crearPedidoCliente = (dataPedido) => {
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
            <h2 className="text-center display-6 my-5">Datos del envio</h2>
            <h4 className="mb-1">¡Ya està casi listo {usuarioX.usuario.nombre}! necesitamos nos brindes una dirección para la entrega.</h4>
            <Form className="container" onSubmit={handleSubmit()}>
                <Form.Group>
                    <Form.Label className="fs-5 mt-3">Direccion:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Escribe tu dirección"
                        {...register("direccion", {
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
                    <Form.Text className="text-danger">{errors.direccion?.message}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="fs-5 mt-3">Indicaciones:</Form.Label>
                    <Form.Control
                        placeholder="Escribe tu indicacion aqui"
                        {...register("indicaciones", {
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
                    <Form.Text className="text-danger">{errors.indicaciones?.message}</Form.Text>
                </Form.Group>
            </Form>
            <section className="my-5 ms-3">
                <h4 className="my-3 fw-bold fs-5"> Metodos de pago</h4>
                {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Tarjeta de Credito" name="group1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="Tarjeta de Debito" name="group1" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Efectivo" name="group1" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="Transferencias" name="group1" type={type} id={`inline-${type}-2`} />
                    </div>
                ))}
            </section>

            <Accordion className="container bglabel" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Detalle de tu compra</Accordion.Header>
                    <Accordion.Body>
                        {pedidoCliente.map((pedido) => (
                            <Table responsive striped hover size="sm" key={pedido.productos._id}>
                                <tr>
                                    <th> {pedido.cantidad} un.</th>
                                    <th>{pedido.productos.nombre}</th>
                                    <th>$ {pedido.productos.precio}</th>
                                </tr>
                            </Table>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="d-flex justify-content-center">
                <p className="my-3 bglabel fs-3 fw-bold text-center">Total: ${total}</p>
            </div>

            <div className="d-flex justify-content-center">
                <button className="my-3 p-3 botonconf" type="submit" onSubmit={crearPedidoCliente}>
                    Comprar
                </button>
            </div>
        </Container>
    );
};

export default PedidoConfirmado;
