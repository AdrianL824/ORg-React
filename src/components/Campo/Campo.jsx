import "./Campo.css";

const Campo = (props) => {
  const placeholderDots = `${props.placeholder}...`;

  //Destructuracion
  const { type = "text" } = props;
  //console.log(type);

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label htmlFor="">{props.titulo}</label>
      <input
        placeholder={placeholderDots}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
