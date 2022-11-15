import { Form } from "react-bootstrap";

const ItemUsuario = ({ usuario, setUsuario }) => {
    const { _id, nombre, email, password, perfil, estado } = { ...usuario };
    return (
        <>
            <tr>
                <th className="text-truncate thLargo">{_id}</th>
                <th>{nombre}</th>
                <th>{email}</th>
                <th>{password}</th>
                <th>{perfil}</th>
                <th className="width-1">
                    <Form.Check defaultChecked className="ms-3 mt-1" type="switch" id="custom-switch" />
                    {/* con checked podes modificar el estado del switch entre on y off */}
                </th>
            </tr>
        </>
    );
};

export default ItemUsuario;
