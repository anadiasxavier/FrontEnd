import estilos from './Conteudo.module.css';
import banner from '../assets/banner.png';
import { Menu } from './Menu';

// mostra o menu na página inicial
export function Conteudo(){
    return(
        <main className={estilos.conteinerConteudo}>
            <Menu/>
        </main>
    )
}