import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const Inicio = () => {
    return (
        <header>
            <Container fluid>
                <Carousel className="mt-3">
                    <Carousel.Item interval={750}>
                        <img
                            className="d-block w-100"
                            src="https://tofuu.getjusto.com/orioneat-prod-resized/HdmKYR7kgvDnWJAFD-x-1800.webp"
                            alt="comida 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={750}>
                        <img
                            className="d-block w-100"
                            src="https://tofuu.getjusto.com/orioneat-prod-resized/wjnWRkQBMbEfL5xLd-x-1800.webp"
                            alt="comida 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={750}>
                        <img
                            className="d-block w-100"
                            src="https://tofuu.getjusto.com/orioneat-local/resized2/3XuSKa9qL7Y4QpKhQ-x-1800.webp"
                            alt="comida 3"
                        />
                    </Carousel.Item>
                </Carousel>
                <Row className="justify-content-center mt-3 mb-0 ">
                    <Col md={8}>
                        <div className="backgroundBotones rounded-5 my-0 text-justify p-3 ">
                            <p className="text-center fs-big fw-bold fontTitulos">SOMOS COMITIANDO!!!</p>
                            <p className="mx-3 py-3 fs-3 text-somos">
                                Somos una experiencia de hospitalidad y gastronomía Japonesa en constante movimiento. Empezamos en 2003, creando el
                                primer Kaiten Sushi* local. Desde entonces, nos dedicamos a cocinar tus platillos favoritos, recibiéndote siempre, en
                                un ambiente casual y divertido. Cada día, seleccionamos los mejores ingredientes de proveedores locales y extranjeros.
                                Trabajamos en equipo para tocar positivamente la vida de nuestros compañeros e invitados con procesos seguros,
                                excelente servicio y pasión culinaria. Nos mueve aprender, enseñar y descubrir para crecer. Creemos en aprovechar lo
                                que recibimos para convertirlo en algo mejor. Sobre todas las cosas, siempre queremos que la pases bien comiendo y
                                bebiendo delicioso con nosotros. Descubre todo nuestro menú sorprendiéndote con algo nuevo cada vez.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <section className="d-flex flex-column">
                <div className="banner1">
                    <p className="textoconocenos">CONOCENOS</p>
                    <p className="par fs-4">¿Te gustaría formar parte del equipo Comiteando? ¡Trabaja con nosotros!</p>
                    <Link className="bnn" to="/acercadenos">
                        Haz click aquí
                    </Link>
                </div>
                <div className="banner2">
                    <p className="textoevento">¿TIENES UN EVENTO?</p>
                    <p className="par fs-4">Cotiza con nosotros</p>
                    <Link className="bnn" to="/acercadenos">
                        Cotiza aquí
                    </Link>
                </div>
            </section>
            <aside>
                <div>
                    <a href="https://www.instagram.com/moshimoshimx/?hl=es-la" className="instagram" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/moshimoshimx" className="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://web.whatsapp.com/%F0%9F%8C%90/es" className="whatsApp" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </div>
            </aside>
        </header>
    );
};

export default Inicio;
