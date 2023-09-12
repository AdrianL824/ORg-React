import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  //Destructuracion
  const { colorPrimario, colorSecundario, titulo } = props.datos;

  const secundario = { backgroundColor: colorSecundario };
  const primario = { borderColor: colorPrimario };

  return (
    <section className="equipo" style={secundario}>
      <h3 style={primario}>{titulo}</h3>
      <div className="colaboradores">
        <Colaborador />
        <Colaborador />
        <Colaborador />
        <Colaborador />
      </div>
    </section>
  );
};
export default Equipo;
