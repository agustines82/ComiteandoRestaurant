import { Button, Form } from "react-bootstrap";

const ItemPedido = ({ pedido, setPedidos }) => {
    const { _id, usuario, fecha, productos } = { ...pedido };
    return (
        <>
            <tr>
                <th className="text-truncate thLargo">{_id}</th>
                <th>{usuario}</th>
                <th>{fecha}</th>
                <th className="text-truncate thLargo2">
                    {productos}
                </th>
                <th>
                    <Form.Check className="ms-3" type="switch" id="custom-switch" />
                </th>
                <td className="text-center">
                    <Button variant="outline-light">
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
            
        </>
    );
};

export default ItemPedido;
