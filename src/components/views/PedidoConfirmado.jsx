import { React, useEffect } from "react";
import { Form, Container, Accordion, Table, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { crearPedidoAPI } from "../helpers/queries";

const PedidoConfirmado = () => {
    //cargar usuario desde el local storage y el pedido desde sessionStorage
    const usuarioX = JSON.parse(localStorage.getItem("usuarioLogueado"));
    const pedidoCliente = JSON.parse(sessionStorage.getItem("pedido")) || [];

    //variables de estado
    const [pedidoCompleto, setPedidoCompleto] = useState();
    const [total, setTotal] = useState(0);
    const [direccion, setDireccion] = useState("");
    const [indicaciones, setIndicaciones] = useState("");

    let user = usuarioX.usuario.nombre;
    let date = new Date().toISOString();
    useEffect(() => {
        const totalAPagar = pedidoCliente.reduce((total, articulo) => total + articulo.cantidad * articulo.precio, 0);
        setTotal(totalAPagar);
        setearPedido();
    }, [direccion, indicaciones]);

    const navegar = useNavigate();

    const setearPedido = () => {
        setPedidoCompleto({
            usuario: user,
            fecha: date,
            productos: pedidoCliente,
            domicilio: direccion,
            indicaciones: indicaciones,
            estado: false,
        });
    };

    const crearPedidoCliente = () => {
        if (direccion.length > 0) {
            //una vez todo validado enviamos la peticion a la API
            crearPedidoAPI(pedidoCompleto).then((respuesta) => {
                if (respuesta.status === 201) {
                    Swal.fire("Genial!", "Tu pedido llegará a la brevedad", "success");
                    sessionStorage.removeItem("pedido");
                } else {
                    Swal.fire("Ocurrio un error", "Intente esta operación en unos minutos", "error");
                }
            });

            //redirecciono al usuario a la pagina de inicio
            navegar("/");
        } else {
            Swal.fire("cargar direccion", "Debes cargar una direccion", "warning");
        }
    };
    return (
        <Container>
            <h2 className="text-center display-6 my-5">Datos del envio</h2>
            <h4 className="mb-1">¡Ya està casi listo {usuarioX.usuario.nombre}! necesitamos nos brindes una dirección para la entrega.</h4>
            <Form className="container">
                <Form.Group>
                    <Form.Label className="fs-5 mt-3">Dirección:</Form.Label>
                    <Form.Control required type="text" placeholder="Escribe tu dirección" onChange={(e) => setDireccion(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="fs-5 mt-3">Indicaciones:</Form.Label>
                    <Form.Control placeholder="Escribe tu indicacion aqui" onChange={(e) => setIndicaciones(e.target.value)} />
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

            <Accordion className="container bglabel " defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Detalle de tu compra</Accordion.Header>
                    <Accordion.Body>
                        <Table responsive striped hover size="sm" className="shadow">
                            <thead>
                                <tr>
                                    <th>Cantidad</th>
                                    <th>Menu</th>
                                    <th>Precio unitario</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody size="sm">
                                {pedidoCliente.map((pedido) => (
                                    <tr key={pedido._id}>
                                        <th> {pedido.cantidad} un.</th>
                                        <th>{pedido.nombre}</th>
                                        <th>$ {pedido.precio}</th>
                                        <th>$ {pedido.cantidad * pedido.precio}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="d-flex justify-content-center">
                <p className="my-3 bglabel fs-3 fw-bold text-center">Total: ${total}</p>
            </div>

            <div className="d-flex justify-content-center">
                <Button variant="none" className="my-3 p-3 fs-3 fw-bold backgroundBotones" onClick={crearPedidoCliente}>
                    Comprar
                </Button>
            </div>
        </Container>
    );
};

export default PedidoConfirmado;
