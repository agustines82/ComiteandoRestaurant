import React from "react";
import { Link } from "react-router-dom";

const PaginationPedido = ({ pedidosPorPagina, totalPedidos, paginacionTablaPedidosPendientes }) => {
    const numerosDePagina = [];
    for (let i = 1; i <= Math.ceil(totalPedidos / pedidosPorPagina); i++) {
        numerosDePagina.push(i);
    }
    return (
        <nav className="d-flex justify-content-end">
            <ul className="pagination">
                {numerosDePagina.map((numero) => (
                    <li key={numero} className="page-item">
                        <Link to="#" className="paginacion" onClick={() => paginacionTablaPedidosPendientes(numero)}>
                            {numero}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PaginationPedido;
