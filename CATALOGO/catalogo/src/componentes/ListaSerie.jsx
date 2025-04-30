// imports do componentes
import axios from "axios";
import React, {useState, useEffect} from "react";
import { CardSerie } from './CardSerie';
import { ModalSerie } from './ModalSerie';
import estilos from './Lista.module.css';
import { Conteudo } from "./Conteudo";

//url da serie e a chave da API
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';
 
export function ListaSerie() {
    // essa const armazena as series
    const [series, setSeries] = useState([]);
     //Serie selecionada para a exibição no modal
    const [selectedSerie, setSelectedSerie] = useState(null);
    //Busca as series
    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
            .then(response=>{
                console.log(response.data.results);
                setSeries(response.data.results);
            })
            .catch(error => {
                console.log('erro', error);
            });
    },[]);

    //Abre o modal 
    const handleOpenModal = (series)=>{
        setSelectedSerie(series);
    }
    //Fecha modal
    const handleCloseModal =()=>{
        setSelectedSerie(null);
    }

    return(
        <>
        <Conteudo/>
        <div className={estilos.conteiner}> 
            <figure>
                {series.map(serie=>(
                    <CardSerie key={serie.id}
                    serie={serie}
                    onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {selectedSerie &&(<ModalSerie serie={selectedSerie} onClose={handleCloseModal}/>)}
        </div>
        </>
    )

}