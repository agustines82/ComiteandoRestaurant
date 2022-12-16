import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarPedidoAPI, consultarApiPedidos, editarPedidoAPI } from "../../helpers/queries";

const ItemPedido = ({ pedido, setPedidos }) => {
    const { _id, usuario, fecha, productos, estado } = { ...pedido };
    const [pedidoEditado, setPedidoEditado] = useState(pedido);
    let dia = fecha.slice(0,10);
    let hora = fecha.slice(11,16);
    let nuevaFecha = dia + " " + hora;

    useEffect(() => {
        if (!estado) {
            setearValorPedidoRealizado();
        }
        if (estado) {
            setearValorPedidoPendiente();
        }
    }, []);

    const setearValorPedidoRealizado = () => {
        setPedidoEditado({ ...pedidoEditado, estado: true });
    };
    const setearValorPedidoPendiente = () => {
        setPedidoEditado({ ...pedidoEditado, estado: false });
    };

    const handleChangeEditarPedido = () => {
        editarPedidoAPI(_id, pedidoEditado);
    };

    const borrarPedido = () => {
        Swal.fire({
            title: "Estas seguro de eliminar el pedido?",
            text: "No podrás revertir esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#000",
            cancelButtonColor: "#f04523",
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                borrarPedidoAPI(_id).then((respuesta) => {
                    if (respuesta.status === 200) {
                        Swal.fire("Pedido Eliminado", "El pedido se eliminó correctamente", "success");
                        consultarApiPedidos().then((response) => {
                            setPedidos(response);
                        });
                    } else {
                        Swal.fire("Ocurrio un error", "Intente esta operación en unos minutos", "error");
                    }
                });
                Swal.fire("Pedido Eliminado!", "El pedido fue borrado de la lista.", "success");
            }
        });
    };
    return (
        <>
            <tr>
                <th className="text-truncate thLargo">{_id}</th>
                <th>{usuario}</th>
                <th>{nuevaFecha}</th>
                <th className="text-truncate thLargo2">
                    {productos.map((producto) => (
                        <ul key={producto.nombre}>
                            <li>
                                {producto.cantidad}
                                <span> </span>
                                {producto.nombre}
                            </li>
                        </ul>
                    ))}
                </th>
                <th>
                    {pedido.estado ? (
                        <Form.Check defaultChecked className="ms-3" type="switch" onChange={handleChangeEditarPedido} />
                    ) : (
                        <Form.Check className="ms-3" type="switch" onChange={handleChangeEditarPedido} />
                    )}
                </th>
                <td className="text-center">
                    <Button variant="outline-light" onClick={borrarPedido}>
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemPedido;
