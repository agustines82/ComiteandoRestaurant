import { Form, Button, Card } from 'react-bootstrap'
import logo from "../../assets/img/comitiandoLogo.jpg"

const Login = () => {
    const mostrarContra = ()=>{
        const contra = document.getElementById('pass')
        contra.removeAttribute('type')
        const icono = document.getElementById('icon')
        icono.className("mx-2 bi bi-eye-slash-fill")
        if(!contra.type){
            contra.type('password')
            icono.className('mx-2 bi bi-eye-fill')
        }
    }
  return (
    <div className="d-flex align-content-center justify-content-center">
      <Card className="login align-content-center">
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title className="fontTitulos text-center fs-2">
            Ingresar
          </Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="hola1@mail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >Password</Form.Label>
                <i id='icon' class="mx-2 bi bi-eye-fill" onClick={mostrarContra}></i>
                <Form.Control id="pass"
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="dark" type="submit">
                  Ingresar
                </Button>
                <br />
                <div class="text-center fs-6">
                  <a href="#">Olvidaste tu Contraseña?</a> o <a href="#">Registrarse</a>
                </div>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
