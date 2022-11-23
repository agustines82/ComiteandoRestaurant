import { Navigate } from "react-router-dom";
const RutasProtegidas = ({ children }) => {
    const token = JSON.parse(localStorage.getItem("usuarioLogueado")) || null;
    if (!token) {
        //si el token es null entonces lo redirecciono al login
        return <Navigate to={"/usuario/login"}></Navigate>;
    } else {
        return children;
    }
};

export default RutasProtegidas;
