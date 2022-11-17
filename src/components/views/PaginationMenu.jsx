import { Link } from "react-router-dom";
const PaginationMenu = ({ productosPorPagina, totalProductos, paginacionTablaProductos }) => {
    const numerosDePaginaProductos = [];
    for (let i = 1; i <= Math.ceil(totalProductos / productosPorPagina); i++) {
        numerosDePaginaProductos.push(i);
    }
    return (
        <nav className="d-flex justify-content-end">
            <ul className="pagination">
                {numerosDePaginaProductos.map((numero) => (
                    <li key={numero} className="page-item">
                        <Link to="#" className="paginacion" onClick={() => paginacionTablaProductos(numero)}>
                            {numero}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PaginationMenu;
