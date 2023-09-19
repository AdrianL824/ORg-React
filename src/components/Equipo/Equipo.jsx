import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  //Destructuracion
  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const { colaboradores, eliminarColaborador } = props;

  const secundario = { backgroundColor: colorSecundario };
  const primario = { borderColor: colorPrimario };
  //console.log(colaboradores.length > 0);

  return (
    colaboradores.length > 0 && (
      <section className="equipo" style={secundario}>
        <input
          className="input-color"
          type="color"
          value={colorSecundario}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <h3 style={primario}>{titulo}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => (
            <Colaborador
              datos={colaborador}
              key={index}
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
            />
          ))}
        </div>
      </section>
    )
  );
};
export default Equipo;
