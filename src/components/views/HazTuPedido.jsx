import { Row, Container, Col } from "react-bootstrap";
import CardMenu from "./menu/CardMenu";

const HazTuPedido = () => {
    return (
        <Container>
            <h1 className="text-center my-4">Haz tu pedido</h1>
            <Row>
                <Col md={8}>
                    <Row>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default HazTuPedido;
