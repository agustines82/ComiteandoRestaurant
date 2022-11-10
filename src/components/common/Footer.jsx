import { Container, Row, Col } from "react-bootstrap";
import logoFooter from "../../assets/img/logoFooter.jpg";
const Footer = () => {
    return (
        <Container>
            <Row className="text-center my-5">
                <Col>
                    <img src={logoFooter} />
                </Col>
            </Row>
            <Row className="my-5">
                <Col>
                    <aside>
                        <h3>Ubicaciòn</h3>
                        <p>
                            {" "}
                            Rolling Mall local 1,
                            <br /> Avenida Peron 1425
                            <br /> Yerba Buena, Tucumán
                        </p>
                    </aside>
                </Col>
                <Col>
                    <aside>
                        <h3>Horarios de Atenciòn</h3>
                        <ul>
                            <li>Lun - Vie: 10 AM - 11 PM</li>
                            <li>Sab - Dom: 9 AM - 2 AM</li>
                        </ul>
                    </aside>
                </Col>
                <Col>
                    <aside>
                        <h3>Reservas</h3>
                        <p>E-mail: commit@comitiando.com</p>
                        <p>Tel: 0381 4-253574</p>
                        <p>
                            <i className="bi bi-whatsapp"></i>: 381-6592001
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
