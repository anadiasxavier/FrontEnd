import { Routes, Route } from "react-router-dom";
import { Login } from "../Paginas/Login";
import { Inicial } from "../Paginas/Inicial";
import { Menu } from '../Componentes/Menu';

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Inicial' element={<Inicial/>}>
                <Route index element = {<Menu/>}>
                
                </Route>
            </Route>
        </Routes>
    )
}