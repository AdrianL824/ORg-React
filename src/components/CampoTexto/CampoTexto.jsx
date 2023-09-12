import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderDots = `${props.placeholder}...`;

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label htmlFor="">{props.titulo}</label>
      <input
        type="text"
        placeholder={placeholderDots}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;
