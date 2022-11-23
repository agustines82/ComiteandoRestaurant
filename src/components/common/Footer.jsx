import { Container, Row, Col } from "react-bootstrap";
import logoFooter from "../../assets/img/logoFooter.jpg";
const Footer = () => {
    return (
        <Container fluid>
            <Row className="text-center my-5">
                <Col>
                    <img src={logoFooter} alt="logo footer" />
                </Col>
            </Row>
            <Row className="my-5 justify-content-center">
                <Col sm={12} md={5} lg={4}>
                    <aside className="text-center mt-3">
                        <h3>Ubicaciòn</h3>
                        <p>
                            Rolling Mall Local 1,
                            <br /> Avenida Peròn 1425
                            <br /> Yerba Buena, Tucumán
                        </p>
                    </aside>
                </Col>
                <Col sm={12} md={5} lg={4}>
                    <aside className="text-center mt-3">
                        <h3>Horarios de Atenciòn</h3>
                        <ul>
                            <li>Lun - Vie: 10 AM - 11 PM</li>
                            <li>Sab - Dom: 9 AM - 2 AM</li>
                        </ul>
                    </aside>
                </Col>
                <Col sm={12} md={5} lg={4}>
                    <aside className="text-center mt-3">
                        <h3>Reservas</h3>
                        <p>E-mail: commit@comitiando.com</p>
                        <p>Tel: 0381 4-253574</p>
                        <p>
                            <i className="bi bi-whatsapp text-success"></i>: 381-6592001
                        </p>
                    </aside>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <p>&copy; Todos los derechos reservados</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
