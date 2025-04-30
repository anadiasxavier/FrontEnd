// imports do componentes
import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card } from './Card';
import {Modal} from './Modal';
import estilos from './Lista.module.css';
import { Conteudo } from "./Conteudo";

//url do filme e a chave da API
const API_URL = 'https://api.themoviedb.org/3';
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';

export function Lista(){
    // essa const armazena os filmes
    const[movies, setMovies] = useState([]);
    //Filme selecionado para a exibição no modal
    const[SelectedMovie, setSelectMovie] = useState(null) 
    //Busca os filmes
    useEffect(()=>{
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
            .then(response=>{
                console.log(response.data.results);
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log('erro', error);
            });
    },[]);
    //Abre o modal 
    const handleOpenModal = (movie)=>{
        setSelectMovie(movie);
    }
    //Fecha modal
    const handleCloseModal =()=>{
        setSelectMovie(null);
    }

    return(
        <>
        <Conteudo/>
        <div className={estilos.conteiner}> 
            <figure>
                {movies.map(movie=>(
                    <Card key={movie.id}
                    movie={movie}
                    onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {SelectedMovie &&(<Modal movie={SelectedMovie} onClose={handleCloseModal}/>)}
        </div>
        </>
    )

}