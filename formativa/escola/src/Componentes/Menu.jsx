import estilos from './Menu.module.css';
import ambiente from '../assets/ambientes.png';
import disciplina from '../assets/disciplinas.png';
import professor from '../assets/professor.png';
import  gestor from '../assets/gestor.png';

export function Menu(){
    return(
        <div className={estilos.conteiner}>
            <table>
                {/* tr sao as linhas, td celulas dentro da linha */}
                <tbody>
                    <tr>
                        <td>
                            <img src={disciplina} ></img>
                            <label alt= 'Disciplinas do professor'>Disciplinas</label> 
                        </td>
                        <td>
                            <img src={ambiente} ></img>
                           <label>Ambiente</label> 
                        </td>
                    </tr>

                    <tr>
                        <td>
                         <img src={professor} ></img>
                           <label>Professores</label>   
                        </td>
                        <td>
                            <img src={gestor} ></img>
                             <label>Gestores</label>  
                            </td>
                    </tr>
                </tbody>
            </table>
        
        </div>
    )
}