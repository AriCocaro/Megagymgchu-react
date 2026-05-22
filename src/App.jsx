import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Conocenos from './pages/Conocenos'
import Tienda from './pages/Tienda'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path= "/tienda" element={<Tienda />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
