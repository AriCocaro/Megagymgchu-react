function IniciarSesion() {
  return (
    <main>
      <div className="cuerpo">
        <div className="FormLogin">
          <h1>Iniciar Sesión</h1>

          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-Mail</label>
              <input type="email" id="email" className="form-control" placeholder="tu@email.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" id="password" className="form-control" placeholder="••••••••" />
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3 Boton">Ingresar</button>
            </div>

            <p>¿No tenés cuenta? <a href="#">Registrate</a></p>
          </form>
        </div>
      </div>
    </main>
  )
}

export default IniciarSesion