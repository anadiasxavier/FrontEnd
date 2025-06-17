import estilos from './Menu.module.css';
import ambiente from '../assets/ambientes.png';
import disciplina from '../assets/disciplinas.png';
import professor from '../assets/professor.png';
import  gestor from '../assets/gestor.png';
import { Link } from 'react-router-dom';


export function Menu(){
    const tipo = localStorage.getItem('tipo');

    const linkDisciplina = tipo === 'P' ? 'discProfessor' : 'disciplina'


    return(
        <div className={estilos.conteiner}>
            <table className={estilos.tableMenu}>
                {/* tr sao as linhas, td celulas dentro da linha */}
                <tbody>
                    <tr>
                        <td className={estilos.tdMenu}>
                            <Link to={linkDisciplina}>
                                <img src={disciplina} />
                                <label alt= 'Disciplinas do professor'>Disciplinas</label> 
                            </Link>
                        </td>
                        <td className={estilos.tdMenu}>
                            <Link to="/inicial/ambientes">
                                <img src={ambiente} ></img>
                                <label>Ambiente</label> 
                           </Link>
                        </td>
                    </tr>

                    <tr>
                        <td className={estilos.tdMenu}>
                            <Link  to="/inicial/professor">
                                <img src={professor} />
                                <label>Professores</label> 
                           </Link>  
                        </td>
                        <td className={estilos.tdMenu}>
                            <img src={gestor} ></img>
                             <label>Gestores</label>  
                        </td>
                    </tr>
                </tbody>
            </table>
        
        </div>
    )
}