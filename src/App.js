import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/Navbar';
import Nosotros from './Componentes/Nosotros';
import Productos from './Componentes/Productos';
import VideoCarousel from './Componentes/VideoCarousel';
import Contacto from './Componentes/Contacto';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Nosotros/>
      <Productos/>
      <VideoCarousel/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
