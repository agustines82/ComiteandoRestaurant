import '../../login.css'
import { Form, Button } from 'react-bootstrap';
import { useEffect } from 'react';
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
    <>
<div className='container' id="container">
	<div className="form-container sign-up-container">
	<Form className='d-flex justify-content-center align-items-center '>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="hola1@mail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >Password</Form.Label>
                <i id='icon' class="mx-2 bi bi-eye-fill"></i>
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
	<div className="form-container sign-in-container">
		<form action="#">
			<h1 className='fs-bold'>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 className='fs-bold'>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={deslizar}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className='fs-bold'>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={deslizar}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default Login
