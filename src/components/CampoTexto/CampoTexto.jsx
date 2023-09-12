import "./CampoTexto.css";

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label htmlFor="">{props.titulo}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};

export default CampoTexto;
