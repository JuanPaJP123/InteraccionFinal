import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <div className="header fixed top-0 left-0 w-full bg-gray-800 text-white z-10">
        <div className="logo">
          <img src="https://th.bing.com/th/id/R.89ea81e1906d12b4390b0b70f39aa471?rik=vo5XhGN1MP7QFg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-logo-design-design-png-hd-1250.png&ehk=PTSp6EHLbcJ%2fFkzlJhFcSV%2bI5RPa9H2nw8A4XjQ3ulA%3d&risl=&pid=ImgRaw&r=0" alt="Logo" />
        </div>
        <h1 className="Titulo text-md lg:text-4xl font-bold uppercase">tienda de ropa y accesorios</h1>
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
