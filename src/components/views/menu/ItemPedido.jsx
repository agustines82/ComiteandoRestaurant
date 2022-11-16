import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarPedidoAPI, consultarApiPedidos } from "../../helpers/queries";

const ItemPedido = ({ pedido, setPedidos }) => {
    const { _id, usuario, fecha, productos } = { ...pedido };

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
                        //busco todos los pedidos en ese instante de tiempo luego de borrado el pedido y actualizo el state pedidos de administrador
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
                <th>{fecha}</th>
                <th className="text-truncate thLargo2">
                    {productos.map((producto) => (
                        <li key={producto.nombre}>{producto.nombre}</li>
                    ))}
                </th>
                <th>
                    <Form.Check className="ms-3" type="switch" id="custom-switch" />
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
