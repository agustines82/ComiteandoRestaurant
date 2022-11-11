import { Form, Button, Card, Alert } from 'react-bootstrap'

const Login = () => {
  return (
    <div className='d-flex align-content-center justify-content-center'>
      <Card className="login align-content-center">
        <Card.Img variant="top" src=".../src/assets/img/logoFooter.jpg" />
        <Card.Body>
          <Card.Title className="fontTitulos text-center fs-2">Ingresar</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="hola1@mail.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label id="pass">Password</Form.Label>
                <i class="mx-2 bi bi-eye-fill"></i>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </Form.Group>
              <div className='text-center'>
              <Button variant='dark' type="submit">
                Ingresar
              </Button>
              <br/>
              <Alert.Link variant='primary'>
                Registrarse
              </Alert.Link>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
