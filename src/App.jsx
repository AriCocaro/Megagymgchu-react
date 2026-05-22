import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Conocenos from './pages/Conocenos'
import Tienda from './pages/Tienda'
import Eventos from './pages/Eventos'
import DeptoTecnico from './pages/DeptoTecnico'
import IniciarSesion from './pages/IniciarSesion'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/departamento-tecnico" element={<DeptoTecnico />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
