import { Link } from 'react-router-dom'; // Importa Link desde React Router
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon desde Font Awesome
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Importa el icono del carrito de Font Awesome

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          {/* Aquí puedes colocar una imagen o un texto para el logo */}
          <img src="ruta/hacia/tu/logo.png" alt="Logo" />
        </div>
        <h1 className="Titulo">SOLUCIONES EN IMPRESIONES</h1>
        <div className="Carrito">
          <Link to="/carrito">
            <FontAwesomeIcon icon={faShoppingCart} className='text-white h-6' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
