import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuracion
  const { colorPrimario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const obj = { backgroundColor: hexToRgba(colorPrimario, 0.6) };
  const primario = { borderColor: colorPrimario };
  //console.log(colaboradores.length > 0);

  return (
    colaboradores.length > 0 && (
      <section className="equipo" style={obj}>
        <input
          className="input-color"
          type="color"
          value={colorPrimario}
          onChange={(e) => {
            actualizarColor(e.target.value, id);
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
              like={like}
            />
          ))}
        </div>
      </section>
    )
  );
};
export default Equipo;
