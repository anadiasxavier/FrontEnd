import estilos from './Cabecalho.module.css';
import logo from '../assets/logo.png';
export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <img className={estilos.logo} src={logo}/>

            <div className={estilos.links}>
                <ul>
                    <li>Disciplinas</li>
                    <li>Ambientes</li>
                    <li>Professores</li>
                    <li>Gestores</li>
                </ul>
            </div>
        </header>
    )
}