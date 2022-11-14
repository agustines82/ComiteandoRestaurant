const urlPedidos = process.env.REACT_APP_API_COMITIANDOPEDIDO;
const urlProductos = process.env.REACT_APP_API_COMITIANDOPRODUCTOS;
const urlUsuarios = process.env.REACT_APP_API_COMITIANDOUSUARIOS;

//PETICIONES GET:
//get para listar pedidos solicitados
export const consultarApiPedidos = async () => {
    try {
        const respuesta = await fetch(urlPedidos);
        const listaPedidos = await respuesta.json();
        return listaPedidos;
    } catch (error) {
        console.log(error);
        return false;
    }
};
//get para listar productos del menu
export const consultarApiProductos = async () => {
    try {
        const respuesta = await fetch(urlProductos);
        const listaProductos = await respuesta.json();
        return listaProductos;
    } catch (error) {
        console.log(error);
        return false;
    }
};
//get para listar los usuarios
export const consultarApiUsuarios = async () => {
    try {
        const respuesta = await fetch(urlUsuarios);
        const listaUsuarios = await respuesta.json();
        return listaUsuarios;
    } catch (error) {
        console.log(error);
        return false;
    }
};

//PETICIONES POST:

//PETICIONES PUT:

//PETICIONES DELETE:
