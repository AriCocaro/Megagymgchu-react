import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="Encabezado">
        <Link to="/">
          <figure>
            <img
              className="LogoInst"
              src="/Assets/Imagenes/Logos/BotonSinFondo.png"
              alt="Logo Megagym"
            />
          </figure>
        </Link>

        <button className="TNMF-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </button>

        <nav className="PagesList">
          <div className={`topnav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/conocenos" className="ItemNav Boton" onClick={() => setMenuOpen(false)}>CONOCENOS</Link></li>
              <li><Link to="/tienda" className="ItemNav Boton" onClick={() => setMenuOpen(false)}>TIENDA</Link></li>
              <li><Link to="/eventos" className="ItemNav Boton" onClick={() => setMenuOpen(false)}>EVENTOS</Link></li>
              <li><Link to="/departamento-tecnico" className="ItemNav Boton" onClick={() => setMenuOpen(false)}>DEPARTAMENTO TECNICO</Link></li>
              <li><Link to="/iniciar-sesion" className="ItemNav Boton" onClick={() => setMenuOpen(false)}>INICIAR SESION</Link></li>
              <li>
                <div className="Redes">
                  <a href="https://wa.me/5493446670344" target="_blank" rel="noreferrer" className="ItemNav Boton" aria-label="WhatsApp">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="https://www.instagram.com/megagymgchu" target="_blank" rel="noreferrer" className="ItemNav Boton" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="ItemNav Boton" aria-label="Ubicación">
                    <i className="fa-solid fa-location-dot"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
