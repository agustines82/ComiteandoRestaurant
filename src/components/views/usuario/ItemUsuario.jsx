import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { editarUsuarioAPI } from "../../helpers/queries";

const ItemUsuario = ({ usuario }) => {
    const { _id, nombre, email, password, perfil, estado } = { ...usuario };

    const [usuarioEditado, setUsuarioEditado] = useState(usuario);

    useEffect(() => {
        if (!estado) {
            setearValorUsuarioActivo();
        }
        if (estado) {
            setearValorUsuarioSuspendido();
        }
    }, []);

    const setearValorUsuarioActivo = () => {
        setUsuarioEditado({ ...usuarioEditado, estado: true });
    };
    const setearValorUsuarioSuspendido = () => {
        setUsuarioEditado({ ...usuarioEditado, estado: false });
    };

    const handleChangeEditarUsuario = (e) => {
        //enviamos la peticion PUT a la API
        editarUsuarioAPI(_id, usuarioEditado);
    };

    return (
        <>
            <tr>
                <th className="text-truncate thLargo">{_id}</th>
                <th>{nombre}</th>
                <th>{email}</th>
                <th>{password}</th>
                <th>{perfil}</th>
                <th className="width-1">
                    {usuario.estado ? (
                        <Form.Check defaultChecked className="ms-3 mt-1" type="switch" onChange={handleChangeEditarUsuario} />
                    ) : (
                        <Form.Check className="ms-3 mt-1" type="switch" onChange={handleChangeEditarUsuario} />
                    )}
                </th>
            </tr>
        </>
    );
};

export default ItemUsuario;
