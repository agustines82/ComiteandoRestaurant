import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

const Registro = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
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
        className={'nav-item linksMenu fw-bold fontTitulos fs-3 hoverLinksMenu'}
      >
        Registro
      </NavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fontTitulos">
            Registrarse
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="letra">
            <Form.Group className="mb-3" controlId="formRegister.NombreInput">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Eliseo" autoFocus 
              {...register('nombre',{
                required: 'El nombre es un campo obligatorio',
                minLength:{
                  value:2,
                  message:'La cantidad minima de caracteres debe ser 2',
                },
                maxLength:{
                  value:40,
                  message:'La cantidad maxima de caracteres debe ser de 50'
                }
              })}
              />
              <Form.Text className='text-danger'>{errors.nombre?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRegister.EmailInput">
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
            <Form.Group className="mb-3" controlId="formRegister.ContraseñaInput">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="*********" autoFocus 
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
          <Button className="boton" onClick={handleClose}>
            Cerrar
          </Button>
          <Button className="boton" onClick={handleClose}>
            Registrarse
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Registro
