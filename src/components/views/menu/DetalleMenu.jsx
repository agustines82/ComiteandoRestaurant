import { Card, Col, Container, Row, Button, Badge } from "react-bootstrap";
import { useState } from "react";
const DetalleMenu = () => {
  let [boton, botonSumar] = useState(0);
  let [boton1, botonSumar1] = useState(0);
  let [boton2, botonSumar2] = useState(0);
  let [boton3, botonSumar3] = useState(0);

  const sumar = () => {
    botonSumar(boton + 1);
  };
  const sumar1 = () => {
    botonSumar1(boton1 + 1);
  };
  const sumar2 = () => {
    botonSumar2(boton2 + 1);
  };
  const sumar3 = () => {
    botonSumar3(boton3 + 1);
  };

  const restar = () => {
    botonSumar(boton - 1);
  };
  const restar1 = () => {
    botonSumar1(boton1 - 1);
  };
  const restar2 = () => {
    botonSumar2(boton2 - 1);
  };
  const restar3 = () => {
    botonSumar3(boton3 - 1);
  };
  return (
    <Container className="my-3">
      <Card>
        <Row>
          <Col md={8}>
            <Card.Img
              variant="top"
              src="https://tofuu.getjusto.com/orioneat-local/resized2/3pKrZM7zWnFSsEdg4-1200-1200.webp"
            />
          </Col>
          <Col md={4}>
            <Card.Body>
              <Card.Title className="fw-bold ">Crunchy Salmon</Card.Title>
              <Badge className="backgroundBotones" text="dark">
                Sushi
              </Badge>
              <Card.Text className="my-4">
                Pasta tempura, Tampico y salsa de anguila | Salmón spicy (40g).
              </Card.Text>
              <hr></hr>
              <container id="containerflexible">
                <div>
                  <Card.Text className="d-inline mx-1 fw-bold">
                    Elije tus agregados
                  </Card.Text>
                </div>
                <div>
                  <Card.Text className="d-inline mx-1">Opcionales</Card.Text>
                </div>
              </container>
              <br></br>
              <br></br>
              <container id="containerflexible2">
                <div id="div-i">
                  <Button
                    onClick={restar}
                    className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold"
                  >
                    -
                  </Button>
                  <p className="d-inline mx-1 fw-bold">{boton}</p>
                  <Button
                    onClick={sumar}
                    className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold"
                  >
                    +
                  </Button>
                </div>
                <div>
                  <Card.Text className="d-inline fw-bold">
                    Aderezo chipotle Moshi
                  </Card.Text>
                </div>
                <div>
                  <Card.Text>$200</Card.Text>
                </div>
              </container>
              <br></br>
              <container id="containerflexible2">
                <div>
                  <Button
                    onClick={restar1}
                    className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold"
                  >
                    -
                  </Button>
                  <p className="d-inline mx-1 fw-bold">{boton1}</p>
                  <Button
                    onClick={sumar1}
                    className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold"
                  >
                    +
                  </Button>
                </div>
                <div>
                  <Card.Text className="d-inline fw-bold">
                    Salsa de ajonjoli
                  </Card.Text>
                </div>
                <div>
                  <Card.Text>$200</Card.Text>
                </div>
              </container>
              <br></br>
              <container id="containerflexible2">
                <div>
                  <Button
                    onClick={restar2}
                    className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold"
                  >
                    -
                  </Button>
                  <p className="d-inline mx-1 fw-bold">{boton2}</p>
                  <Button
                    onClick={sumar2}
                    className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold"
                  >
                    +
                  </Button>
                </div>
                <div>
                  <Card.Text className="d-inline fw-bold">Tampico</Card.Text>
                </div>
                <div>
                  <Card.Text>$200</Card.Text>
                </div>
              </container>
            </Card.Body>
            <Container id="containerflexible2">
              <div>
                <Button
                  onClick={restar3}
                  className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold"
                >
                  -
                </Button>
                <p className="d-inline mx-1 fw-bold">{boton3}</p>
                <Button
                  onClick={sumar3}
                  className="btn-sm btn-light rounded-circle d-inline mx-1 fw-bold"
                >
                  +
                </Button>
              </div>
              <div>
                <Card.Text className="d-inline fw-bold">
                  {boton * 200 + boton1 * 200 + boton2 * 200 + boton3 * 2500};
                </Card.Text>
              </div>
              <div>
                <Button className="btn-sm boton mx-2 my-3">Agregar</Button>
              </div>
            </Container>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
export default DetalleMenu;
