import { useContext  } from 'react';
import { CarritoContext } from "../context/CarritoContext.jsx";

function Carrito() {
  const { carrito } = useContext(CarritoContext);
  console.log(carrito);
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            <img src={producto.image} alt={producto.title} style={{ width: '50px', marginRight: '10px' }} />
            <span>{producto.title} - Precio: {producto.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;
