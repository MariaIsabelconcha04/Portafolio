import Header from './components/Header'
import About from './components/About'
import Habilidades from './components/Habilidades'
import Servicios from './components/Servicios'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Habilidades />
        <Servicios />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
