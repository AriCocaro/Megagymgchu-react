function Tienda() {
  const productos = [
    {
      id: 1,
      nombre: "Botellas",
      descripcion: "Botellas de acero Inoxidables. Color: Negro, blanco o plateado. Capacidad: 500 ml",
      precio: "$1111",
      imagen: "/Assets/Imagenes/Productos/botellas.png",
      alt: "botellas megagym"
    },
    {
      id: 2,
      nombre: "Remera de entrenamiento",
      descripcion: "Remera de entrenamiento Megagym. Color: negra. Tela: Dry fit",
      precio: "$11111",
      imagen: "/Assets/Imagenes/Productos/remera.jpeg",
      alt: "Remera megagym"
    },
    {
      id: 3,
      nombre: "Proteina Star Nutrition",
      descripcion: "Whey protein StarNutrition. Presentacion: Doy pack. Peso: 2Lbs. Sabor: Chocolate",
      precio: "$11111",
      imagen: "/Assets/Imagenes/Productos/proteina.jpg",
      alt: "proteina star nutrition"
    },
    {
      id: 4,
      nombre: "Creatina Monohidrato",
      descripcion: "Monohidrato de creatina. Presentacion: doy pack. Peso: 300 gr. Sabor: Sin sabor",
      precio: "$1111",
      imagen: "/Assets/Imagenes/Productos/creatina.jpg",
      alt: "creatina star nutrition"
    }
  ]

  return (
    <main>
      <div className="cuerpo">
        <h1>Tienda</h1>

        <form className="d-flex" role="search">
          <input className="form-control me-2 buscador" type="search" placeholder="Ingrese aquí..." aria-label="search" />
          <button className="btn btn-outline-success Boton" type="submit">
            <i className="fas fa-search"></i>
            <span className="texto-buscar"> Buscar</span>
          </button>
        </form>

        <section className="Productos">
          {productos.map((producto) => (
            <div className="card" key={producto.id} style={{width: '18rem'}}>
              <img src={producto.imagen} className="card-img-top" alt={producto.alt} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <a href="#" className="btn btn-primary Boton">{producto.precio}</a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Tienda
