import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
const Error404 = () => {
    return (
        <div className="d-flex flex-column"> 
            <h1 className="text-center fontTitulos">Error</h1>
            <Player src="https://assets9.lottiefiles.com/packages/lf20_a2svj19k.json"  className="player errorLottie" loop controls autoplay></Player>
            <p className="text-center">PAGINA NO ENCONTRADA</p>
            <Link to={"/"} type='button' className='btn boton'>Volver al inicio</Link>
        </div>
    );
};

export default Error404;
