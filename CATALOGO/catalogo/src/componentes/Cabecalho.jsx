// Estrutura basica para os componentes
//O nome da função tem que ser o mesmo do arquivo
import estilos from './Cabecalho.module.css';
import logo from '../assets/NaFlix.png';

export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <img src={logo} alt="logo do NaFlix" />
        </header>
    )
}