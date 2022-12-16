const urlPedidos = process.env.REACT_APP_API_COMITIANDOPEDIDO;
const urlProductos = process.env.REACT_APP_API_COMITIANDOPRODUCTOS;
const URLUsuarios = process.env.REACT_APP_API_COMITIANDOUSUARIOS;
const URLLogin = process.env.REACT_APP_API_COMITIANDOLOGIN;

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

export const consultarApiUsuarios = async () => {
    try {
        const respuesta = await fetch(URLUsuarios);
        const listaUsuarios = await respuesta.json();
        return listaUsuarios;
    } catch (error) {
        console.log(error);
        return false;
    }
};

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

export const crearPedidoAPI = async (pedido) => {
    try {
        const respuesta = await fetch(urlPedidos, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pedido),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};
export const crearProductoMenuAPI = async (producto, token) => {
    try {
        const respuesta = await fetch(urlProductos, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-token": token
            },
            body: JSON.stringify(producto),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};
export const crearUsuarioAPI = async (usuario) => {
    try {
        const respuesta = await fetch(URLUsuarios, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};
export const loguearUsuarioAPI = async (usuario) => {
    try {
        const respuesta = await fetch(URLLogin, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
        const datos = await respuesta.json();
        return {
            status: respuesta.status,
            usuario: datos.usuario,
            token: datos.token,
            mensaje: datos.mensaje,
        };
    } catch (error) {
        return false;
    }
};
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
export const editarUsuarioAPI = async (id, usuarioEditado) => {
    try {
        const respuesta = await fetch(URLUsuarios + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuarioEditado),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const editarProductoAPI = async (id, productoEditado, token) => {
    try {
        const respuesta = await fetch(urlProductos + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-token": token
            },
            body: JSON.stringify(productoEditado),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};

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
