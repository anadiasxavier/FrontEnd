import { Routes, Route } from "react-router-dom";
import { Login } from "../Paginas/Login";
import { Inicial } from "../Paginas/Inicial";
import { Menu } from '../Componentes/Menu';
import { DisciplinasProfessor } from "../Paginas/DisciplinasProfessor";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Inicial" element={<Inicial />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/discProfessor" element={<DisciplinasProfessor />} />
    </Routes>
  );
}