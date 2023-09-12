import "./MiOrg.css";

const MiOrg = (props) => {
  //Estado - Hooks
  //UseState useState()
  // const [nombreVariable, FuncionActualizar] = useState(valorInicial)

  // const [mostrar, actualizarMostrar] = useState(true);
  // const manejarClick = () => {
  //   console.log("Prueba click", mostrar);
  //   actualizarMostrar(!mostrar);
  // };

  return (
    <section className="orgSection">
      <h3 className="title">Mi organizacion</h3>
      <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
