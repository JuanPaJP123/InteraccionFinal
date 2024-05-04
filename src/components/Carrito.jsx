// Carrito.jsx
import { useContext, useState } from 'react';
import { CarritoContext } from "../context/CarritoContext.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Carrito() {
  const { carrito, eliminarProducto } = useContext(CarritoContext);
  const [cantidades, setCantidades] = useState({});

  const calcularTotal = () => {
    let total = 0;
    for (const producto of carrito) {
      const cantidad = cantidades[producto.id] || 1;
      total += producto.price * cantidad;
    }
    return total.toFixed(2);
  };

  const handleCantidadChange = (productoId, cantidad) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [productoId]: cantidad,
    }));
  };

  const productosUnicos = Array.from(new Set(carrito.map(producto => producto.id))).map(id => {
    const producto = carrito.find(p => p.id === id);
    const cantidad = cantidades[id] || 1;
    return { ...producto, cantidad };
  });

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-500 mt-4">Carrito de Compras</h2>
      <ul className="divide-y divide-gray-200">
        {productosUnicos.map((producto) => (
          <li key={producto.id} className="py-4 flex items-center">
            <img
              src={producto.image}
              alt={producto.title}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{producto.title}</h3>
              <p className="text-gray-600">Precio: {producto.price}</p>
              <div className="mt-2 flex items-center">
                <label htmlFor={`cantidad-${producto.id}`} className="mr-2">
                  Cantidad:
                </label>
                <input
                  type="number"
                  id={`cantidad-${producto.id}`}
                  min="1"
                  value={producto.cantidad}
                  onChange={(e) => handleCantidadChange(producto.id, parseInt(e.target.value))}
                  className="w-16 px-2 py-1 border border-gray-300 rounded"
                />
              </div>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => eliminarProducto(producto.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-semibold">Total: ${calcularTotal()}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-6">
          Comprar
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Carrito;