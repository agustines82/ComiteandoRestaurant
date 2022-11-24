import { Card, CardImg, Container, Row } from "react-bootstrap";
import Agustin from '../../assets/img/AgustinSampayo.jpg'
import Eliseo from '../../assets/img/EliseoEspindola.jpg'
import Facundo from '../../assets/img/FacundoMontiel.jpg'
import Lucia from '../../assets/img/LuciaGonzalez.jpg'
import Tomas from '../../assets/img/TomasLuna.jpg'
import Gregorio from '../../assets/img/GregorioLlobeta.jpg'
const Nosotros = () => {
  return (
    <Container className="">
      <h1 className="tittlenos">Acerca de nosotros</h1>
   < Row className="justify-content-center">
        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <CardImg  className="cards"
          variant="top"
          src={Agustin}
          />
          <Card.Body>
            <Card.Title className="text-center">Agustin Sampayo</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <Card.Img
          className="cards"
            variant="top"
            src= {Eliseo}       />
          <Card.Body>
            <Card.Title className="text-center">Eliseo Espindola</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <Card.Img
          className="cards"
            variant="top"
            src={Facundo}         />
          <Card.Body>
            <Card.Title className="text-center">Facundo Montiel</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <Card.Img
          className="cards"
            variant="top"
            src={Lucia}         />
          <Card.Body>
            <Card.Title className="text-center">Lucia Gonzalez</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <Card.Img
          className="cards"
            variant="top"
            src={Tomas}         />
          <Card.Body>
            <Card.Title className="text-center">Tomas Luna</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-3 m-4 cards bgcard">
          <Card.Img
          className="cards"
            variant="top"
            src={Gregorio}         />
          <Card.Body>
            <Card.Title className="text-center">Gregorio Llobeta</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>

        </Row>
        </Container>
      
    
  );
};

export default Nosotros;
