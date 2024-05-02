import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <a href="/">Inicio</a>
        <a href="/Productos">Productos</a>
        <a href="/Contacto">Contacto</a>
        <a href="/Otros">Otros</a>
      </div>
    </div>
  );
}