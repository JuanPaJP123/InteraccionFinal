import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import '../styles/Productos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { CarritoContext } from "../context/CarritoContext.jsx"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetRopa from '../Api/api.jsx'; 

export default function Productos() {
  const [data, setData] = useState([]);
  const { carrito, setCarrito } = useContext(CarritoContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetRopa();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const agregarAlCarrito = (producto) => {
    // Copia el carrito actual y agrega el nuevo producto
    const nuevoCarrito = [...carrito, producto];
    // Actualiza el estado del carrito en el contexto
    setCarrito(nuevoCarrito);
    toast.success("Producto Agregado al carrito")
  };

  return (
    <div>
      {data.map((producto) => (
        <div className="producto-container" key={producto.id}>
            <img className="producto-imagen" src={producto.image} alt={producto.title} />
            <div className="producto-detalles">
              <h3>{producto.title}</h3>
              <p>{producto.description}</p>
              <p>Precio: {producto.price}</p>
            </div>
            <button className="bg-orange-400 rounded-md text-white" onClick={() => agregarAlCarrito(producto)}> 
              <FontAwesomeIcon icon={faShoppingCart} className='text-white h-4 mr-1' />
              Agregar
            </button>
        </div>
      ))}
      <ToastContainer/>
    </div>
  );
}
