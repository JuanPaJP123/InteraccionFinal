import Productos from "../components/Productos";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { CarritoProvider } from "../context/CarritoContext";

function PaginaPrincipal() {
  return (
    <div>
      <Header />
      <Navbar />
      <CarritoProvider>
        <Productos />
      </CarritoProvider>

      <Footer />
    </div>
  );
}
export default PaginaPrincipal;
