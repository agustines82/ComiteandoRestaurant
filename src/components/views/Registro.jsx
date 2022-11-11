import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const Registro = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center fontTitulos'>Registrarse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='letra'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eliseo"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
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
          </Form>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
          <button className='boton' onClick={handleClose}>
            Cerrar
          </button>
          <button className='boton' onClick={handleClose}>
            Registrarse
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Registro
