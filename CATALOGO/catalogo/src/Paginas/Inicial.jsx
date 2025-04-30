//imports da pagina
import { BarraNavegacao } from "../componentes/BarraNavegacao";
import { Cabecalho } from "../componentes/Cabecalho";
import { Outlet } from "react-router-dom";
import { Rodape } from "../componentes/Rodape"

//funcao para o layout 
export function Inicial(){
    return(
        <> 
        {/* Nela irá ter, o cabecalho, barraNavegacao, Outlet que deixa o conteudo dinamico para as rotas e o rodape */}
        <Cabecalho/>
        <BarraNavegacao/>
        <Outlet/>
        <Rodape/>
        </>
    )
}