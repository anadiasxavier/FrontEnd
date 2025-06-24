import estilos from './Menu.module.css';
import ambiente from '../assets/ambientes.png';
import disciplina from '../assets/disciplinas.png';
import professor from '../assets/professor.png';
import gestor from '../assets/gestor.png';
import calendario from '../assets/calendario.png';
import { Link } from 'react-router-dom';

export function Menu() {
  const tipo = localStorage.getItem('tipo');

  const linkDisciplina = tipo === 'P' ? 'discProfessor' : 'disciplina';
  const linkReserva = tipo === 'P' ? 'reservaProfessor' : 'reserva';

  return (
    <div className={estilos.conteiner}>
      <table className={estilos.tableMenu}>
        <tbody>
          <tr>
            <td className={estilos.tdMenu}>
              <Link to={linkDisciplina}>
                <img src={disciplina} alt="Disciplinas" />
                <label>Disciplinas</label>
              </Link>
            </td>

            <td className={estilos.tdMenu}>
              <Link to={`/inicial/${linkReserva}`}>
                <img src={calendario} alt="Reservas" />
                <label>Reserva</label>
              </Link>
            </td>

            {tipo === 'G' && (
              <>
                <td className={estilos.tdMenu}>
                  <Link to="/inicial/ambientes">
                    <img src={ambiente} alt="Ambientes" />
                    <label>Ambiente</label>
                  </Link>
                </td>

                <td className={estilos.tdMenu}>
                  <Link to="/inicial/professor">
                    <img src={professor} alt="Professores" />
                    <label>Professores</label>
                  </Link>
                </td>

                <td className={estilos.tdMenu}>
                  <Link to="/inicial/gestores">
                    <img src={gestor} alt="Gestores" />
                    <label>Gestores</label>
                  </Link>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
