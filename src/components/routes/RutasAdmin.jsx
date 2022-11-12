import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearMenu from "../views/menu/CrearMenu";
import EditarMenu from "../views/menu/EditarMenu";
import EditarPedido from "../views/menu/EditarPedido";
import EditarUsuario from "../views/usuario/EditarUsuario";

const RutasAdmin = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Administrador />} />
                <Route exact path="/crear" element={<CrearMenu />} />
                <Route exact path="/editar/:id" element={<EditarMenu />} />
                <Route exact path="/editar/pedido/:id" element={<EditarPedido />} />
                <Route exact path="/editar/usuario/:id" element={<EditarUsuario />} />
            </Routes>
        </>
    );
};

export default RutasAdmin;
