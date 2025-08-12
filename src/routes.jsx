import {Route, Routes} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Info from './pages/Info';
import Ini from './pages/Ini';
import P404 from './pages/P404';
import Cursos from './pages/Cursos';
import Teste from './pages/w_arg_vw_curso';

function MainRoutes()
{
    return (
        <Routes>
            <Route path="/" element={<Ini/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/cursos/" element={<Cursos/>}/>
            <Route path="/cursos/cadastro" element={<Cadastro/>}/>
            <Route path="/teste" element={<Teste/>}/>

            <Route path="*" element={<P404/>}/>
        </Routes>
    )
}

export default MainRoutes