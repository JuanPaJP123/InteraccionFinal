//IMPORTAR
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import PaginaPrincipal from '../Pages/PaginaPrincipal';
import Productos from '../Pages/Productos';
import '../index.css';
import  Carrito  from '../Pages/Carrito';
import Contacto from '../Pages/Contacto';
import Otros from '../Pages/Otros';

function AppRouter() {
    return (
        <Router> 
            <Routes>
                <Route path='/' element={<PaginaPrincipal />} />
                <Route path='/Productos' element={<Productos />} />
                <Route path='/Carrito' element={<Carrito />} />
                <Route path='/Contacto' element={<Contacto />} />
                <Route path='/Otros' element={<Otros />} />

            </Routes>
        </Router>
    );
}

export default AppRouter;
