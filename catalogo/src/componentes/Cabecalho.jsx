// Estrutura basica para os componentes
//O nome da função tem que ser o mesmo do arquivo
import estilos from './Cabecalho.module.css';

export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <h1>NaFlix</h1>
        </header>
    )
}