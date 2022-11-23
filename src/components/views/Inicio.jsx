import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const Inicio = () => {
    return (
        <header>
            <Container fluid>
                <section id="bannerComiteandoBar" className="carousel slide mt-3" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#bannerComiteandoBar"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button type="button" data-bs-target="#bannerComiteandoBar" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#bannerComiteandoBar" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://tofuu.getjusto.com/orioneat-prod-resized/HdmKYR7kgvDnWJAFD-x-1800.webp"
                                className="d-block w-100"
                                alt="menu sushi"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://tofuu.getjusto.com/orioneat-prod-resized/wjnWRkQBMbEfL5xLd-x-1800.webp"
                                className="d-block w-100"
                                alt="sushi"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://tofuu.getjusto.com/orioneat-local/resized2/3XuSKa9qL7Y4QpKhQ-x-1800.webp"
                                className="d-block w-100"
                                alt="tragos"
                            />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#bannerComiteandoBar" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#bannerComiteandoBar" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </section>

                <Row className="justify-content-center mt-3 mb-0 ">
                    <Col md={8}>
                        <div className="backgroundBotones rounded-5 my-0 text-justify">
                            <p className="text-center fs-1 fw-bold">SOMOS COMITEANDO!!!</p>
                            <p className="mx-3 py-3 fs-3 text-justify">
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

                <div className="banner1 mt-0 rounded-5">
                    <p className="textoconocenos">CONOCENOS</p>
                    <p className="par">Te ofrecemos el mejor servicio y la mejor atencion a tu comodidad.</p>
                    <Link className="bnn" to="/acercadenos">
                        Haz click aquí
                    </Link>
                </div>
                <div className="banner2 rounded-5">
                    <p className="textoevento">¿TIENES UN EVENTO?</p>
                    <p className="par">Cotiza con nosotros</p>
                    <Link className="bnn" to="/acercadenos">
                        Cotiza aquí
                    </Link>
                </div>
                <div>
                    <a href="https://www.instagram.com/moshimoshimx/?hl=es-la" className="instagram" target="_blank">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/moshimoshimx" className="facebook" target="_blank">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://web.whatsapp.com/%F0%9F%8C%90/es" className="whatsApp" target="_blank">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </div>
            </Container>
        </header>
    );
};

export default Inicio;
