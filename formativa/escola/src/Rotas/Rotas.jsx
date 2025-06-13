import { Routes, Route } from "react-router-dom";
import { Login } from "../Paginas/Login";
import { Inicial } from "../Paginas/Inicial";
import { Menu } from '../Componentes/Menu';
import { DisciplinasProfessor } from "../Paginas/DisciplinasProfessor";
import { DisciplinaTeste } from "../Paginas/DisciplinaTeste";
import { DisciplinarCadastrar } from "../Paginas/DisciplinarCadastrar";
import { DisciplinaEditar } from "../Paginas/DisciplinaEditar";
import { Professores } from "../Paginas/Professores";
import { ProfessoresCadastrar } from "../Paginas/ProfessoresCadastrar";

export function Rotas() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />
      {/* Inicio */}
      <Route path="/Inicial" element={<Inicial />} >.
        <Route index element={<Menu />} />
        <Route path="discProfessor" element={<DisciplinasProfessor />} />

        {/* disciplina */}
        <Route path = 'disciplina'>
            <Route index element ={<DisciplinaTeste />} />
            <Route path="cadastroDisciplina" element={<DisciplinarCadastrar />} />
            <Route path="Editar/:id" element={<DisciplinaEditar/>} />
        </Route>

        {/* Professor */}
        <Route path="professor">  
          <Route index element ={<Professores/>}/>
            <Route path="cadastroProfessores" element={<ProfessoresCadastrar/>}/>
          
        </Route>
      
      </Route>
    </Routes>
  );
}