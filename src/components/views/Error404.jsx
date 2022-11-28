import { Player } from "@lottiefiles/react-lottie-player";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Error404 = () => {
    return (
        <Container className="d-flex flex-column">
            <Player src="https://assets9.lottiefiles.com/packages/lf20_a2svj19k.json" className="player errorLottie" loop controls autoplay></Player>
            <p className="text-center">PAGINA NO ENCONTRADA</p>
            <Link to={"/"} type="button" className="btn boton btn-sm">
                Volver al inicio
            </Link>
        </Container>
    );
};

export default Error404;
