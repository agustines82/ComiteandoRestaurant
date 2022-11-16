import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const Inicio = () => {
    return (
        <header>
            <Container>
                <section>
                    <div id="bannerComiteandoBar" className="carousel slide" data-bs-ride="true">
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
                    </div>
                </section>

                <Row className="justify-content-center my-3">
                    <Col md={8}>
                        <div className="backgroundBotones rounded">
                            <p className="text-center fs-1 fw-bold">SOMOS COMITEANDO!!!</p>
                            <p className="mx-3 py-3">
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

                <div className="banner1">
                    <p className="textoconocenos">CONOCENOS</p>
                    <p className="par">Te ofrecemos el mejor servicio y la mejor atencion a tu comodidad.</p>
                    <a className="bnn" href="/unete">
                        {" "}
                        Haz click aquí{" "}
                    </a>
                </div>
                <div className="banner2">
                    <p className="textoevento">¿TIENES UN EVENTO?</p>
                    <p className="par">Cotiza con nosotros</p>
                    <a className="bnn" href="/catering">
                        Cotiza aquí
                    </a>
                </div>
            </Container>
        </header>
    );
};

export default Inicio;
