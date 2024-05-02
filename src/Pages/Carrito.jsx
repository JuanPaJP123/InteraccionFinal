import Banner from "../components/Banner";
import Carrito1 from "../components/Carrito";

import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { CarritoProvider } from "../context/CarritoContext";

function Carrito() {
  return (
    <div>
      <Header />
      <Navbar />
      <CarritoProvider>
        <Carrito1 />
      </CarritoProvider>
      <Footer />
    </div>
  );
}
export default Carrito;
