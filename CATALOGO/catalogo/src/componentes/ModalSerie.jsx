//Import do componente, css
import estilos from './Modal.module.css';

export function ModalSerie({ serie, onClose}){
    //Caso nenhuma serie esteja selecionada, ela não renderiza o modal
    if(!serie){
        return null;
    }
     console.log(serie);
   
    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                <div className={estilos.ModalHeader}>
                    {/* botao para fechar o modal */}
                <button onClick={onClose}>x</button>
                    {/* Titulo da serie */}
                    <h2>{serie.name}</h2>
                   {/* img da serie */}
                    <img className= {estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`}/>
                    {/* detalhes da serie */}
                    <div className={estilos.imgDetalhes}>
                        <ul>
                            <li>{`Popularidade: ${serie.popularity}` }</li>
                            <li>{`Lançamento: ${serie.first_air_date}`}</li>
                            <li>{`Quantidade de votos: ${serie.vote_count}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
   
}