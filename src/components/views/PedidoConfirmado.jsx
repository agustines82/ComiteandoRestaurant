import { React } from "react";
import { Form, Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { crearPedidoAPI } from "../helpers/queries";

const PedidoConfirmado = () => {
  // cargar usuario desde localStorage
  const usuarioX = JSON.parse(localStorage.getItem("usuarioLogueado"));
  //cargar pedido desde sessionStorage
  //const pedidoCliente = JSON.parse(sessionStorage.getItem("keyPedido")) || [];
  //console.log(pedidoCliente);

  //variables de estado
  // const [pedidoCompleto, setpedidoCompleto] = useState({
  //     usuario: "",
  //     fecha: "",
  //     productos: [],
  //     domicilio: "",
  //     indicaciones: "",
  //     estado: false,
  // });

  //const [direccion, setDireccion] = useState();

  //objetos para usar hookform
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegar = useNavigate();

  const crearPedido = (dataPedido) => {
    //una vez todo validado enviamos la peticion a la API
    crearPedidoAPI(dataPedido).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Pedido creado",
          "El pedido se cargo correctamente",
          "success"
        );
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente esta operación en unos minutos",
          "error"
        );
      }
    });
    //redirecciono al usuario a la pagina de inicio
    navegar("/");
  };
  return (
    <Container>
      <Form
        noValidate
        className="formulariopedido mt-5"
        onSubmit={handleSubmit()}
      >
        <h3 className="text-center display-6 my-4">Datos del envio</h3>
        <Form.Group className="mb-3 my-3">
          <Form.Label className="fw-bold">
            ¡ Hola {usuarioX.usuario.nombre}! necesitamos nos brindes una
            dirección para la entrega.
          </Form.Label>
          <br />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Group className="mb-3 formocultar">
            <Form.Label>Fecha: </Form.Label>
            <Form.Control 
            placeholder=" " 
            type="text" 
            {...register("fechaPedido")} />
          </Form.Group>
          <Form.Group className="mb-3 formocultar">
            <Form.Label>Estado:</Form.Label>
            <Form.Control 
            placeholder="  " 
            type="text"
            {...register("fechaPedido")} />
            
          </Form.Group>
          <Form.Label>Direccion:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Escribe tu dirección"
            {...register("direccionPedido", {
              required: "La direccion es un campo obligatorio",
              minLength: {
                value: 5,
                message: "La cantidad minima de caracteres, es de 5.",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxima de caracteres, es de 100. ",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.direccionPedido?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Indicaciones:</Form.Label>
          <Form.Control
            placeholder="Escribe tu indicacion aqui"
            {...register("indicacionesPedido", {
              minLength: {
                value: 5,
                message: "La cantidad minima de caracteres es de 5.",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxima de caracteres es de 100.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.indicacionesPedido?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label className="my-3 fw-bold fs-5"> Metodos de pago</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Tarjeta de Credito"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Tarjeta de Debito"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Efectivo"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Transferencias"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group>
          <Form.Label
            className="my-3 bglabel"
            {...register("detallePedido", {
              minLength: {
                value: 5,
                message: "La cantidad minima de caracteres es de 5.",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxima de caracteres es de 100.",
              },
            })}
          >
            Detalle del pedido:
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label
            className="my-3 bglabel"
            {...register("totalPedido", {
              min: {
                value: 1,
                message: "La cantidad minima es de $1.",
              },
              max: {
                value: 10000,
                message: "La cantidad maxima es de $10000.",
              },
            })}
          >
            {" "}
            Total: ${}
          </Form.Label>
          <div className="d-flex justify-content-center">
            <button className="my-3 p-3 botonconf" type="submit">
              Comprar
            </button>
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PedidoConfirmado;
