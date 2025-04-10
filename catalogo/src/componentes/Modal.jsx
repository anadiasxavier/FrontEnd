import estilos from './Modal.module.css';

export function Modal({ movie, onClose}){
    if(!movie){
        return null;
    }
     console.log(movie);
   
    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                <div className={estilos.ModalHeader}>
                <button onClick={onClose}>x</button>
                    <h2>{movie.title}</h2>
                   
                    <img className= {estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    <div className={estilos.imgDetalhes}>
                        <ul>
                            <li>{`Popularidade: ${movie.popularity}` }</li>
                            <li>{`Lançamento: ${movie.release_date}`}</li>
                            <li>{`Quantidade de votos: ${movie.vote_count}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
   
}