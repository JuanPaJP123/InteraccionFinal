import Banner from "../components/Banner";
import Carrusel from "../components/Carrusel";
import Productos from "../components/Productos";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

function PaginaPrincipal (){
    return(
        <div>
            <Header/>
            <Navbar/>
            <Carrusel/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default PaginaPrincipal;