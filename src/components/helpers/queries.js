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
//get para obtener un producto por su id (a los efectos de cargar sus valores en el form de ediciòn)
export const obtenerProductoAPI = async (id) => {
    try {
        const respuesta = await fetch(urlProductos + "/" + id);
        const producto = {
            dato: await respuesta.json(),
            status: respuesta.status,
        };
        return producto;
    } catch (error) {
        console.log(error);
        return false;
    }
};
//PETICIONES POST:
//post para crear el producto del menú
export const crearProductoMenuAPI = async (producto) => {
    try {
        const respuesta = await fetch(urlProductos, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};

//PETICIONES PUT:
//put para editar pedidos (pendiente/realizado)
export const editarPedidoAPI = async (id, pedidoEditado) => {
    try {
        const respuesta = await fetch(urlPedidos + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pedidoEditado),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};
//put para editar productos
export const editarProductoAPI = async (id, productoEditado) => {
    try {
        const respuesta = await fetch(urlProductos + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productoEditado),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};

//PETICIONES DELETE:
//delete para eliminar producto del menu
export const borrarProductoAPI = async (id) => {
    try {
        const respuesta = await fetch(urlProductos + "/" + id, {
            method: "DELETE",
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};
//delete para borrar el pedido
export const borrarPedidoAPI = async (id) => {
    try {
        const respuesta = await fetch(urlPedidos + "/" + id, {
            method: "DELETE",
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};
