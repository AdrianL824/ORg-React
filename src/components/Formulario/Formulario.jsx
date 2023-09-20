import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
  // Formulario Registrar colaborador
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  //Formulario Registrar Equipo
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Enviando");
    let datos = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo,
    };
    registrarColaborador(datos);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    console.log("Enviando", titulo, color);
    let datosEquipo = {
      titulo,
      colorPrimario: color,
    };
    crearEquipo(datosEquipo);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          setValor={setNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          setEquipo={setEquipo}
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <CampoTexto
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          setValor={setTitulo}
        />
        <CampoTexto
          titulo="Color"
          placeholder="Ingresar color"
          required
          valor={color}
          setValor={setColor}
        />
        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
