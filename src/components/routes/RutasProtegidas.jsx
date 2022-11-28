import { Navigate } from "react-router-dom";
const RutasProtegidas = ({ children }) => {
    const token = JSON.parse(localStorage.getItem("usuarioLogueado")) || null;
    if (!token || token.usuario.perfil !== "Administrador") {
        //si el token es null entonces lo redirecciono al login
        return <Navigate to={"/"}></Navigate>;
    } else {
        return children;
    }
};

export default RutasProtegidas;
