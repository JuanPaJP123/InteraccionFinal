import React from 'react';
import Maps from '../../public/Maps.png';

const OtroComponente = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Ubicación de nuestra tienda</h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={Maps}
            alt="Mapa de ubicación"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">Tienda de ropa "Trendy Styles"</h2>
          <p className="mb-4">
            Nos encontramos en el corazón de la ciudad, en una ubicación privilegiada y de fácil acceso.
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Dirección:</h3>
            <p>123 Calle Principal, Ciudad, México</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Horario de atención:</h3>
            <p>Lunes a Viernes: 10:00 a.m. - 8:00 p.m.</p>
            <p>Sábados: 10:00 a.m. - 6:00 p.m.</p>
            <p>Domingos: Cerrado</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contacto:</h3>
            <p>Teléfono: +1 (555) 123-4567</p>
            <p>Email: info@trendystyles.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtroComponente;
