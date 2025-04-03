import estilos from './Conteudo.module.css';
import { Lista } from './Lista';

export function Conteudo(){
    return(
        <main className={estilos.container}>
            <Lista />
        </main>
    )
}