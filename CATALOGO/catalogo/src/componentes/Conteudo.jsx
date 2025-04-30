//Imports do componente, css
import estilos from './Conteudo.module.css';

// função que exibe o conteudo na tela
export function Conteudo(){
    return(
        <main className={estilos.container}>
                <h2>Os Melhores filmes e Séries você encontra aqui! </h2>
            
        </main>
    )
}