import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import HazTuPedido from "./components/views/HazTuPedido";
import Error404 from "./components/views/Error404";
import DetalleMenu from "./components/views/menu/DetalleMenu";
import Nosotros from "./components/views/Nosotros";
import PedidoConfirmado from "./components/views/PedidoConfirmado";

function App() {
    return (
        //administrar las rutas;
        <BrowserRouter>
            <Menu />
            <Routes>
                {/* dominio + path */}
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/haz" element={<HazTuPedido />} />
                <Route exact path="pedidoconf" element={<PedidoConfirmado />} />
                <Route
                    exact
                    path="/administrar/detalle/:id"
                    element={<DetalleMenu />}
                />
                <Route exact path="/acercadenos" element={<Nosotros />} />
                <Route
                    path="/administrar/*"
                    element={
                        <RutasProtegidas>
                            <RutasAdmin></RutasAdmin>
                        </RutasProtegidas>
                    }
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
