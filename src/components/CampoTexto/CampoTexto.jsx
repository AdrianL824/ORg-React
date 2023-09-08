import "./CampoTexto.css"

const CampoTexto = (props) =>{
    console.log("Datos;", props.titulo);
    return <div className="campo-texto">
        <label htmlFor="">{props.titulo}</label>
        <input type="text" placeholder={props.placeholder} />
    </div>
}

export default CampoTexto