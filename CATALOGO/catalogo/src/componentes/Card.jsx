//Imports do componente
import estilo from './Card.module.css'; //estilo do CSS

//componente feito para exibir um card de filme
export function Card({ movie, onOpenModal }){
    return(
        <div className={estilo.conteiner}>
            <h3>{movie.title}</h3>
            {/* quando o usuario clicar na img, o modal com os detalhes do filme será aberto na tela */}
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}onClick={()=>onOpenModal(movie)}/>
            <p>{movie.overview}</p>
        </div>
    );

    
}