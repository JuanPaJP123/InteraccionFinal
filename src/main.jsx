import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router/Router';
import './index.css';
import { CarritoProvider } from "../src/context/CarritoContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CarritoProvider>
    <AppRouter />
    </CarritoProvider>

  </React.StrictMode>
);