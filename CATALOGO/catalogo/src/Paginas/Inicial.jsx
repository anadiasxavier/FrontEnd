import { BarraNavegacao } from "../componentes/BarraNavegacao";
import { Cabecalho } from "../componentes/Cabecalho";
import { Conteudo} from '../componentes/Conteudo';
import { Outlet } from "react-router-dom";

export function Inicial(){
    return(
        <> 
       
        <Cabecalho/>
        <BarraNavegacao/>
        <Conteudo/>
        <Outlet/>
        </>
    )
}