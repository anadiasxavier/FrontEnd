import estilos from './Conteudo.module.css';
import { Menu } from './Menu';

export function Conteudo(){
    return(
        <main className={estilos.conteinerConteudo}>
            <Menu/>
        </main>
    )
}