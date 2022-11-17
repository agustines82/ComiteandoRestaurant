import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultarApiProductos } from "../../helpers/queries";
const ItemMenu = ({ producto, setProductos }) => {
    const { _id, nombre, estado, precio, detalle, categoria, imagen } = { ...producto };

    const borrarProducto = () => {
        Swal.fire({
            title: "Estas seguro de eliminar el producto?",
            text: "No podrás revertir esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#000",
            cancelButtonColor: "#f04523",
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                borrarProductoAPI(_id).then((respuesta) => {
                    if (respuesta.status === 200) {
                        Swal.fire("Producto Eliminado", "El producto se eliminó correctamente", "success");
                        //busco todos los productos en ese instante de tiempo luego de borrado el producto y actualizo el state productos de administrador
                        consultarApiProductos().then((response) => {
                            setProductos(response);
                        });
                    } else {
                        Swal.fire("Ocurrio un error", "Intente esta operación en unos minutos", "error");
                    }
                });
                Swal.fire("Producto Eliminado!", "El producto fue borrado de la lista.", "success");
            }
        });
    };

    return (
        <>
            <tr>
                <th className="text-truncate thLargo">{_id}</th>
                <th>{nombre}</th>
                <th>{estado ? "D" : "ND"}</th>
                <th>${precio}</th>
                <th className="text-truncate thLargo">{detalle}</th>
                <th>{categoria}</th>
                <th className="text-truncate thLargo">{imagen}</th>
                <td className="text-center">
                    <Link className="btn btn-outline-light me-1" to={`/administrar/editar/${_id}`}>
                        <i className="bi bi-arrow-clockwise text-warning"></i>
                    </Link>
                    <Button variant="outline-light" onClick={borrarProducto}>
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemMenu;
