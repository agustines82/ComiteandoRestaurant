import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ItemMenu = ({ producto, setProductos }) => {
    const { _id, nombre, estado, precio, detalle, categoria, imagen } = { ...producto };
    return (
        <>
            <tr>
                <th className="text-truncate thLargo">{_id}</th>
                <th>{nombre}</th>
                <th>{estado}</th>
                <th>${precio}</th>
                <th className="text-truncate thLargo">{detalle}</th>
                <th>{categoria}</th>
                <th className="text-truncate thLargo">{imagen}</th>
                <td className="text-center">
                    <Link className="btn btn-outline-light me-1" to="/administrar/editar/:id">
                        <i className="bi bi-arrow-clockwise text-warning"></i>
                    </Link>
                    <Button variant="outline-light">
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemMenu;
