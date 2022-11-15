import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[tipo, setTipo] = useState('password');
  const[icono, setIcono] = useState('bi bi-eye-fill');

  const MostrarOcultar = ()=>{
    if(tipo==='pasword'){
      setTipo('');
      setIcono('"bi bi-eye-slash-fill"');
    }else{
      setTipo('password');
      setIcono('bi bi-eye-fill')

    }
  }

  const{
    register,
    handleSubmit,
    formState:{errors},
    reset
  } = useForm();

  const onSubmit = (data)=>{
    console.log(data);
    reset();
  }
  return (
    <>
      <NavLink
        end
        onClick={handleShow}
        className={
          'nav-item linksMenu fw-bold backgroundBotones text-white fs-5 rounded h-25 hoverLoginOutMenu'
        }
      >
        Login/out<i className="bi bi-box-arrow-in-right"></i>
      </NavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fontTitulos">
            Ingresar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="letra">
            <Form.Group className="mb-3" controlId="FormIngresar.ControlEmailInput">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                {...register('email',{
                  required:'El email es obligatorio',
                  pattern:{
                    value:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                    message:'El email debe ser valido',
                  }
                })}
              />
              <Form.Text className='text-danger'>{errors.email?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormIngresar.ControlPasswordInput">
              <Form.Label>Contraseña</Form.Label><i className={icono} onClick={MostrarOcultar}></i>
              <Form.Control type={tipo} placeholder="*********" autoFocus 
              {...register('password',{
                required: 'La contraseña es obligatoria',
                mingLength:{
                  value:6,
                  message:'La cantidad minima de caracteres debe ser 8',
                },
                maxLength:{
                  value:20,
                  message:'La cantidad maxima de caracteres es de 20'
                }
              })}
              />
              <Form.Text className='text-danger'>{errors.password?.message}</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button type='submit' className="boton">
            Ingresar
          </Button>
          <Button className="boton" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Login
