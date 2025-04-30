//Imports do componente
import estilo from './CardSerie.module.css'; //estilo do CSS

//componente feito para exibir um card de serie
export function CardSerie({ serie, onOpenModal }){
    return(
        <div className={estilo.conteiner} onClick={()=>onOpenModal(serie)}>
            <h3>{serie.name}</h3>
             {/* quando o usuario clicar na img, o modal com os detalhes de serie será aberto na tela */}
            <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} />
        </div>
    );

    
}