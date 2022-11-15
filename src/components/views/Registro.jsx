import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Registro = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
          <Form className="letra">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Eliseo" autoFocus />
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
              <Form.Control type="password" placeholder="*********" autoFocus />
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
