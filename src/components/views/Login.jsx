import '../../login.css'
import { Form, Button,Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
	
	const deslizar = ()=>{
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');
		
		signUpButton.addEventListener('click', () => {
			container.classList.add("right-panel-active");
		});
		
		signInButton.addEventListener('click', () => {
			container.classList.remove("right-panel-active");
		});
	}
    
	useEffect(()=>{
		deslizar();
	},[])
  return (

<div className='contenedorlogin' id="container">        
	<div className="form-container sign-up-container">
	<Form>
    <h1 className='fw-bold text-center'>Crear Cuenta</h1>
      <div className='d-flex'>
				<Link to={'*'} className="social mx-3"><i className="bi bi-facebook text-dark"></i></Link>
				<Link to={'*'} className="social mx-3"><i className="bi bi-google text-dark"></i></Link>
				<Link to={'*'} className="social mx-3"><i className="bi bi-linkedin text-dark"></i></Link>
			</div>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eliseo"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="*********"
                autoFocus
                />
            </Form.Group>
			<Button className='boton' type="submit">
                  Registrarse
                </Button>
          </Form>
	</div>
	<div className="form-container sign-in-container">
	<Form>
			<h1 className='fs-bold'>Ingresar</h1>
			<div className='d-flex'>
				<Link to={'*'} href="#" className="social mx-3"><i className="bi bi-facebook text-dark"></i></Link>
				<Link to={'*'} href="#" className="social mx-3"><i className="bi bi-google text-dark"></i></Link>
				<Link to={'*'} href="#" className="social mx-3"><i className="bi bi-linkedin text-dark"></i></Link>
			</div>
			<Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='col-sm-12' >Email</Form.Label>
                <Form.Control type="email" placeholder="hola1@mail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >Contraseña<i id='icon' class="mx-2 bi bi-eye-fill"></i></Form.Label> 
                <Form.Control id="pass"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  />
              </Form.Group>
              <div className="text-center">
                <Button className='boton' type="submit">
                  Ingresar
                </Button>
                <br />
                <div class="text-center fs-6">
                  <a href="#">Olvidaste tu Contraseña?</a>
                </div>
              </div>
            </Form>
	</div>
                
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 className='fw-bold'>Bienvenido a Comitiando</h1>
				<p>Ingresa tus datos para registrarte</p>
        <p>Ya tenes cuenta?</p>
				<Button className="ghost" id="signIn" onClick={deslizar}>Loguearse</Button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className='fw-bold'>Bienvenido a comitiando</h1>
				<p>Ingresa tus datos para ingresar</p>
        <p>No tenes cuenta aun?</p>
				<Button className="ghost" id="signUp" onClick={deslizar}>Registrarse</Button>
			</div>
		</div>
	</div>
</div>
  )
}

export default Login