import Banner from "../components/Banner";
import Carrito1 from "../components/Carrito";

import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

function Carrito() {
  return (
    <div>
      <Header />
      <Navbar />
        <Carrito1 />
      <Footer />
    </div>
  );
}
export default Carrito;
