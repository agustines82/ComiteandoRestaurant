import { Link } from "react-router-dom";

const PaginationUsuario = ({ usuariosPorPagina, totalUsuarios, paginacionTablaUsuarios }) => {
    const numerosDePagina = [];
    for (let i = 1; i <= Math.ceil(totalUsuarios / usuariosPorPagina); i++) {
        numerosDePagina.push(i);
    }
    return (
        <nav className="d-flex justify-content-end">
            <ul className="pagination">
                {numerosDePagina.map((numero) => (
                    <li key={numero} className="page-item">
                        <Link to="#" className="paginacion" onClick={() => paginacionTablaUsuarios(numero)}>
                            {numero}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PaginationUsuario;
