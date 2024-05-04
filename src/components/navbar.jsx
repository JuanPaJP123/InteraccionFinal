import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Inicio</Link>
        <Link  to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/otros">Otros</Link>
      </div>
    </div>
  );
}