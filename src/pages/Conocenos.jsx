function Conocenos() {
  return (
    <main>
      <div className="cuerpo">

        <section className="Ubicacion">
          <h1>Estamos Ubicados en</h1>
          <div className="ContenedorFrente">
            <img className="GymFrente" src="/Assets/Imagenes/ImagenesGym/frente 1 editado.png" alt="Imagen del Frente del gimnasio megagym" />
            <iframe
              className="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.0643507156933!2d-58.51962702437106!3d-33.00207887469038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95baa827d0b53203%3A0xcc811859434b0529!2sMega%20Gym!5e0!3m2!1ses!2sar!4v1737480845385!5m2!1ses!2sar"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="Instalaciones">
          <h1>Nuestras Instalaciones</h1>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/Assets/Imagenes/ImagenesGym/logo en pared verde.jpeg" className="d-block w-100" alt="Logo institucional" />
              </div>
              <div className="carousel-item">
                <img src="/Assets/Imagenes/ImagenesGym/MegaagymLibre.jpg" className="d-block w-100" alt="Sala de musculacion" />
              </div>
              <div className="carousel-item">
                <img src="/Assets/Imagenes/ImagenesGym/salon crossfit.jpeg" className="d-block w-100" alt="Salon de pesos libres" />
              </div>
              <div className="carousel-item">
                <img src="/Assets/Imagenes/ImagenesGym/patio.jpeg" className="d-block w-100" alt="Patio interior" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <p>Contamos con un salon lleno de maquinas diseñadas para que tu entrenamiento sea totalmente especifico segun tus objetivos.</p>
        </section>

        <section className="Horarios">
          <h1>Horarios</h1>
          <p>Podras encontrarnos de lunes a viernes de 6 a 23 hs y sabados de 8 a 15hs.</p>
        </section>

        <section className="Staff">
          <h1>Staff</h1>
          <p>Dependiendo el horario que asistas variarán los instructores y el personal de administración, ¡conocelos!</p>
          <div className="TarjetasStaff">
            <div className="StaffUnipers">
              <img className="AriNati" src="/Assets/Imagenes/PROFES/aRI.jpg" alt="Ari" />
              <div className="CardStaffOverlay">
                <h5 className="OverNombre">Ari</h5>
                <p className="OverText">Nuestra Nutri administrativa</p>
                <p className="OverText"><small>Lun a vie, 7 a 15 hs</small></p>
              </div>
            </div>
            <div className="StaffUnipers">
              <img className="AriNati" src="/Assets/Imagenes/PROFES/nati.jpg" alt="Nati" />
              <div className="CardStaffOverlay">
                <h5 className="OverNombre">Nati</h5>
                <p className="OverText">CEO</p>
              </div>
            </div>
            <div className="StaffUnipers">
              <img className="AriNati" src="/Assets/Imagenes/PROFES/raul.jpg" alt="Raul" />
              <div className="CardStaffOverlay">
                <h5 className="OverNombre">Raul</h5>
                <p className="OverText">Director</p>
                <p className="OverText"><small>A coordinar</small></p>
              </div>
            </div>
          </div>
        </section>

        <section className="Servicios">
          <h1>Servicios</h1>
          <p>En Mega te ofrecemos entrenamiento personalizado, segun TU objetivo y TU gusto a la hora de entrenar.</p>
        </section>

        <section className="Opiniones">
          <h1>Opiniones</h1>
        </section>

        <section className="Contacto">
          <h1>Contacto</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" id="nombre" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">N° de contacto</label>
              <input type="number" id="telefono" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-Mail</label>
              <input type="email" id="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="Consulta">Dejanos tu consulta</label>
              <textarea className="form-control" id="Consulta" style={{height: '100px'}}></textarea>
            </div>
            <div className="Contactame">
              <div className="mb-3">
                <label>Deseo que me contacten mediante</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="medioContacto" id="whatsapp" />
                <label className="form-check-label" htmlFor="whatsapp">Whatsapp</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="medioContacto" id="emailContacto" defaultChecked />
                <label className="form-check-label" htmlFor="emailContacto">E-mail</label>
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3 Boton">Enviar</button>
            </div>
          </form>
        </section>

      </div>
    </main>
  )
}

export default Conocenos