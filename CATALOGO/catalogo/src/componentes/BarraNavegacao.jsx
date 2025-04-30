//Imports do componente
import estilos from'./BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

//AS FONTES PODE COLOCAR NO ASSETS E AS IMAGENS TAMBEM, pode criar pastas lá.
// O nome da função deve ser o mesmo do arquivo

export function BarraNavegacao(){
    //Todo retorno só pode renderizar um componente
    //Ou utilizar tags fantasmas para renderizar mais de um componentes
    return(
        //Para a nav, utilizei uma lista, coloquei os links e também os icones.
        <nav className={estilos.conteiner}>
            <ul>
                <Link className={estilos.link} to='/'>
                <li>
                    <span class="material-symbols-outlined">home</span>
                    Home
                </li>
                </Link>
                {/* O series tem que ser o mesmo nome da Rotas */}
                <Link className={estilos.link} to='series'> 
                <li>
                    <span class="material-symbols-outlined">tv</span>
                    Séries
                </li>
                </Link>
                <Link className={estilos.link} to='perfil'>
                <li>
                <span class="material-symbols-outlined">person</span>
                Perfil
                </li>
                </Link>
            </ul>
        </nav>
    )
}