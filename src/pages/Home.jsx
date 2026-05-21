function Home() {
  return (
    <main>
      <div className="PrimerVideo">
        <video src="/Assets/videos/video.mp4" autoPlay muted loop playsInline />
        <div className="TextoDelVideo">
          <h1 className="Amarillo">MEGAGYM</h1>
          <h2 className="Amarillo">Sabemos lo que hacemos.</h2>
          <button className="Boton" type="button">¡Empezá ya!</button>
        </div>
      </div>
    </main>
  )
}

export default Home
