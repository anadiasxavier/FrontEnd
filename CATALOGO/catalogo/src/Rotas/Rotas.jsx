// imports da rota
import { Routes, Route } from "react-router-dom";
//imports das paginas e componentes
import { Inicial } from "../Paginas/Inicial";
import { Perfil } from "../Paginas/Perfil";
import { ListaSerie } from '../componentes/ListaSerie';
import {Lista} from "../componentes/Lista";
import {Rodape} from "../componentes/Rodape";


// definindo as rotas 
export function Rotas(){
    return(
        <Routes>
            <Route path='/' element= {<Inicial/>}>
                <Route index element = {<Lista/>}/>
                <Route path= 'perfil' element= {<Perfil/>}/>
                <Route path= 'series' element= {<ListaSerie/>}/>
                <Route index element = {<Rodape/>}/>
            </Route>
        </Routes>
    )
}