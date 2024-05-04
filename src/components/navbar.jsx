import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/contacto">Contacto</a>
        <a href="/otros">Otros</a>
      </div>
    </div>
  );
}