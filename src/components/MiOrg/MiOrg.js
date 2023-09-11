import "./MiOrg.css";

const MiOrg = () => {
  const manejarClick = () => {
    console.log("Prueba click");
  };
  return (
    <section className="orgSection">
      <h3 className="title">Mi organizacion</h3>
      <img src="/img/add.png" alt="Add" onClick={manejarClick} />
    </section>
  );
};

export default MiOrg;
