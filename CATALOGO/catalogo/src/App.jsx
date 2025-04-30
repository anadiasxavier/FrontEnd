// import { Cabecalho } from "./componentes/Cabecalho";
// import { BarraNavegacao } from "./componentes/BarraNavegacao";
// import { Conteudo } from "./componentes/Conteudo";
// import { Rodape } from "./componentes/Rodape";

// //estrutura basica para usar React é atraves das funçõees
// function App() {
// //para trazer o resultado da função eu coloco o que quero no Return que deve ter apenas 1 componente

//   return (
//     //para chamar o css dei  um apelido de estilos e chamei usando o classnome.
//    //Tags fantasmas serverm para que eu cosiga usar duas tags no mesmo componentes.
//   <>
//    <Cabecalho/>
//    <BarraNavegacao/>
//    <Conteudo/>
//   <Rodape/>
//    </>
//   )
// }

// export default App

//imports do app
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./Rotas/Rotas";

// componente principal
function App() {
 
    return (
      <BrowserRouter>
      {/*Componente que define as rotas internas da aplicacao*/}
      <Rotas/>
      </BrowserRouter>
    )
  }
  
  export default App
  