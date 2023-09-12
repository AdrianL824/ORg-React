import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg/MiOrg";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };
  // Ternario --> condition ? seMuestra : noSeMuestra
  // Otro metodo --> Condicion && seMuestra
  return (
    <div className="App">
      {/* <Header></Header> 
      {}<Header()  */}
      <Header />
      {mostrarFormulario ? <Formulario /> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
