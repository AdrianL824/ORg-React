import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuracion
  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor } = props;

  const secundario = { backgroundColor: hexToRgba(colorPrimario, 0.6) };
  const primario = { borderColor: colorPrimario };
  //console.log(colaboradores.length > 0);

  return (
    colaboradores.length > 0 && (
      <section className="equipo" style={secundario}>
        <input
          className="input-color"
          type="color"
          value={hexToRgba(colorPrimario, 0.6)}
          onChange={(e) => {
            actualizarColor(e.target.value, titulo);
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
