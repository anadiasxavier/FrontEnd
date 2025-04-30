//Imports do componente, css
import estilos from './Rodape.module.css';

//funcao do rodape
export function Rodape(){
    return(
        <main className={estilos.container}>
            <p>&copy;Todos os direitos reservados a NAFLIX</p>
        </main>
    )
}