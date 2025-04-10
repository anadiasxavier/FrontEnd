import estilos from'./BarraNavegacao.module.css';

//AS FONTES PODE COLOCAR NO ASSETS E AS IMAGENS TAMBEM

//estutura 
// O nome da função deve ser o mesmo do arquivo

export function BarraNavegacao(){
    //Todo retorno só pode renderizar um componente
    return(
        <nav className={estilos.conteiner}>
            <ul>
                <li>
                    <span class="material-symbols-outlined">home</span>
                    Home
                </li>
                <li>
                    <span class="material-symbols-outlined">tv</span>
                    Filmes
                </li>
                <li>
                <span class="material-symbols-outlined">person</span>
                Perfil
                </li>
            </ul>
        </nav>
    )
}