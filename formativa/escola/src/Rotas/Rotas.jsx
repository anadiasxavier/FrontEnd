import { Routes, Route } from "react-router-dom";
import { Login } from "../Paginas/Login";
import { Inicial } from "../Paginas/Inicial";
import { Menu } from '../Componentes/Menu';
import { DisciplinasProfessor } from "../Paginas/DisciplinasProfessor";
import { DisciplinaTeste } from "../Paginas/DisciplinaTeste";
import { DisciplinaCadastrar } from "../Paginas/DisciplinarCadastrar";
import { DisciplinaEditar } from "../Paginas/DisciplinaEditar";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Inicial" element={<Inicial />} >
        <Route index element={<Menu />} />
        <Route path="discProfessor" element={<DisciplinasProfessor />} />
        <Route path = 'disciplina' element={<DisciplinaTeste/>}/>
        <Route path = 'disciplina/cadastroDisciplina' element={<DisciplinaCadastrar/>}/>
        <Route path = 'disciplina/cadastroEditar' element={<DisciplinaEditar/>}/>
      
      </Route>
    </Routes>
  );
}