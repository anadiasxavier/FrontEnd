import axios from 'axios';
import React, {useState, useEffect} from 'react';
import add from '../assets/add.png';
import deletar from '../assets/deletar.png';
import edit from '../assets/edit.png';
import estilos from './Visualizar.module.css'


export function Disciplina(){
    const [ disciplinas, setDisciplinas] = useState([]);
    const [professores, setProfessores] = useState([]);

    useEffect(()=>{
        const token = localStorage.getItem('access_token');
        axios.get('http://127.0.0.1:8000/api/disciplinas/',{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })

        //se der bom (200) quero popular a minha variavel disciplina com os 
        //dados da API
        .then(response =>{
            setDisciplinas(response.data);
        })
        //se der ruim
        .catch(error =>{
            console.error("Erro: ", error);
        });

        //Busca dos professores
        axios.get('http://127.0.0.1:8000/api/usuario/',{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response =>{
            const professorPorId ={};
            response.data.forEach(prof =>{
                professorPorId[prof.id] = `${prof.first_name} ${prof.last_name}`
            });
            setProfessores(professorPorId);
        })
        .catch(error =>{
            console.error("Erro o buscar o pro", error);
        });
    }, [])

return(
        <main className={estilos.conteinerDisciplina}>
            <h3 className={estilos.tituloDisciplina}>Disciplinas</h3>
            <div className={estilos.topoAcoes}>
                <img className={estilos.iconeAdd} src={add} alt='adicionar disciplinar' />
            </div>

            <div className={estilos.tabelaWrapper}>
                <table className={estilos.tabelaDados}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Descrição</th>
                            <th>Carga Horária</th>
                            <th>Professor</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplinas.map(disciplinas => (
                            <tr key={disciplinas.id}>
                                <td>{disciplinas.nome}</td>
                                <td>{disciplinas.curso}</td>
                                <td>{disciplinas.descricao}</td>
                                <td>{disciplinas.carga_hora}</td>
                                <td>{professores[disciplinas.professor]}</td>
                                <td>
                                    <img className={estilos.icone} src={edit}/>
                                    <img className={estilos.icone} src={deletar}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
    
}