import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <div className="header fixed top-0 left-0 w-full bg-gray-800 text-white z-10">
        <div className="logo">
          <img src="https://i.pinimg.com/736x/a2/31/ee/a231ee44a8d3d6fda400428449191ffb.jpg" alt="Logo" />
        </div>
        <h1 className="Titulo text-3xl font-bold">SOLUCIONES EN IMPRESIONES</h1>
        <div className="Carrito">
          <Link to="/carrito">
            <FontAwesomeIcon icon={faShoppingCart} className='text-white h-6' />
          </Link>
        </div>
      </div>
      <div className="mt-16">
        {/* Este div crea un espacio para evitar que el contenido se solape con el encabezado */}
      </div>
    </>
  );
};

export default Header;
