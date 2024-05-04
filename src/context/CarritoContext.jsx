// CarritoContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Cargar el carrito desde el localStorage al inicio
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Guardar el carrito en el localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Función para eliminar un producto del carrito
  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
    toast.error("Producto eliminado")
  };

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, eliminarProducto }}>
      {children}
    </CarritoContext.Provider>
  );
};