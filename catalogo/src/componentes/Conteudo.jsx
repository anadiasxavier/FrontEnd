import estilos from './Conteudo.module.css';
import { Lista } from './Lista';

export function Conteudo(){
    return(
        
        <main className={estilos.container}>
              <h2>Os Melhores filmes você encontra aqui! </h2>
            <Lista />
        </main>
    )
}