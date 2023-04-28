import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Erro from './pages/Erro/Index';
import Home from './pages/Home/Index';
import Filme from './pages/Filme/Index';
import Header from './components/Header/Index';
function RoutesApp() {
    return(
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Filme/:id' element={<Filme />} />
            
            <Route path='*' element={<Erro />} />
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp;