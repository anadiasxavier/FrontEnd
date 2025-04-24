import estilo from'./Perfil.module.css';
import  Ana  from '../assets/img1.png';
import img1 from '../assets/imgSerie1.png';
import img2 from '../assets/imgSerie2.png';
import img3 from '../assets/imgSerie3.png';
import img4 from '../assets/imgSerie4.png';
import img1Filme from '../assets/imgFilme1.png';
import img2Filme from '../assets/imgFilme2.png';
import img3Filme from '../assets/imgFilme3.png';
import img4Filme from '../assets/imgFilme4.png';


export function Perfil(){
    return(
        <main className={estilo.conteiner}>
            
            <h2 className={estilo.h2}>Meu Perfil</h2>

            <section className={estilo.conteudo}>
                <div className='InformacoesUser'>
                    <h3 className={estilo.tituloUser}>Ana Clara Xavier</h3>
                    <p className={estilo.respostas}>Critico filmes como se tivesse estudado cinema em Harvard</p>
                    <h4 className={estilo.subtitulo}>Status Atual:</h4>
                    <p className={estilo.respostas}>Assistindo Cordel Encantado (Temporada 1, episódio 55)</p>
                    <h4 className={estilo.subtitulo}>Email:</h4>
                    <p className={estilo.respostas}>anaclaraxavier@gmail.com</p>
                    <img className={estilo.imgUser} src={Ana} alt="Imagem da Ana" />
                 </div>

                 <div className={estilo.series}>
                    <h4 className={estilo.tituloSerie}>Séries Favoritas</h4>
                     <li>
                        <img className={estilo.imgSerie} src={img1} alt="Imagem da serie Tapas e Beijos" />
                        <img className={estilo.imgSerie} src={img2} alt="Imagem da serie young sheldon" />
                        <img className={estilo.imgSerie} src={img3} alt="Imagem da serie três é demais" />
                        <img className={estilo.imgSerie} src={img4} alt="Imagem da serie Loooney Tunes" />
                    </li>
                 </div>

                 
                 <div className={estilo.filmes}>
                    <h4 className={estilo.titulofilme}>Filmes Favoritas</h4>
                     <li>
                        <img className={estilo.imgFilme} src={img1Filme} alt="Imagem da serie Tapas e Beijos" />
                        <img className={estilo.imgFilme} src={img2Filme} alt="Imagem da serie young sheldon" />
                        <img className={estilo.imgFilme} src={img3Filme} alt="Imagem da serie três é demais" />
                        <img className={estilo.imgFilme} src={img4Filme} alt="Imagem da serie Loooney Tunes" />
                    </li>
                 </div>
            </section>
        </main>
    );
}