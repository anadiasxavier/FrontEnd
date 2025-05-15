import estilos from './BarraNavegacao.module.css';

export function BarraNavegacao(){
    return(
        <nav className={estilos.conteiner}>
            <ul className={estilos.ul}>
                <li>Historia</li>
                <li>Sobre nos</li>
                <li>Missão</li>
                <li>Visão</li>
                <li>Valores</li>
            </ul>
        </nav>
    )

}