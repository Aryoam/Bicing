import { Outlet, Link, useLocation } from "react-router-dom";

export const Layout = () => {
  const paginaActual = useLocation().pathname;
  return (
    <div className="container-layout">
      <div className="sidebar-layout ">
        <img
          src="https://www.bicing.barcelona/themes/bicing/img/logo-bicingv2.svg"
          alt="bicing"
        />
        <nav className="nav-layout">
          <Link
            className={`${
              paginaActual === "/tabla-bicing" ? "resaltar" : "noResaltar"
            }`}
            to="/tabla-bicing"
          >
            Tabla de Bicing
          </Link>
          <Link
            className={`${
              paginaActual === "/mapa-bicing" ? "resaltar" : "noResaltar"
            }`}
            to="/mapa-bicing"
          >
            Mapa de Bicing
          </Link>
        </nav>
      </div>
      <div className="header-layout">
        <p>Esto es un header</p>
      </div>
      <div className="content-layout">
        <Outlet />
      </div>
    </div>
  );
};
