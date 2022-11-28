import { Card, CardImg, Container, Row } from "react-bootstrap";
import Agustin from "../../assets/img/AgustinSampayo.jpg";
import Eliseo from "../../assets/img/EliseoEspindola.jpg";
import Facundo from "../../assets/img/FacundoMontiel.jpg";
import Lucia from "../../assets/img/LuciaGonzalez.jpg";
import Tomas from "../../assets/img/TomasLuna.jpg";
import Gregorio from "../../assets/img/GregorioLlobeta.jpg";
const Nosotros = () => {
  return (
    <Container>
      <h1 className="tittlenos">Acerca de nosotros</h1>
      <Row className="justify-content-center">
        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <CardImg className="cards" variant="top" src={Agustin} />
          <Card.Body className="text-center">
            <Card.Title className="text-center mb-4">Agustin Sampayo</Card.Title>
            <a className="display-6" href="https://github.com/agustines82" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github github"></i>
            </a>
          </Card.Body>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard ">
          <Card.Img className="cards" variant="top" src={Eliseo} />
          <Card.Body className="text-center">
            <Card.Title className="text-center">Eliseo Espindola</Card.Title>
            <a className="display-6" href="https://github.com/eliseoe95" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github github"></i>
            </a>
          </Card.Body>
        </Card>

        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <Card.Img className="cards" variant="top" src={Facundo} />
          <Card.Body className="text-center">
            <Card.Title className="text-center mb-4">Facundo Montiel</Card.Title>
            <a className="display-6" href="https://github.com/f-montiel " target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github github"></i>
            </a>
          </Card.Body>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <Card.Img className="cards" variant="top" src={Lucia} />
          <Card.Body className="text-center">
            <Card.Title className="text-center mb-4">Lucia Gonzalez</Card.Title>
            <a className="display-6" href="https://github.com/luciabgv" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github github"></i>
            </a>
          </Card.Body>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <Card.Img className="cards" variant="top" src={Tomas} />
          <Card.Body className="text-center">
            <Card.Title className="text-center mb-4">Tomas Luna</Card.Title>
            <a className="display-6" href="https://github.com/tomasluna99" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github github"></i>
            </a>
          </Card.Body>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <Card.Img className="cards" variant="top" src={Gregorio} />
          <Card.Body className="text-center">
            <Card.Title className="text-center">Gregorio Llobeta</Card.Title>
            <a className="display-6" href="https://github.com/gLlobeta" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github github"></i>
            </a>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Nosotros;
