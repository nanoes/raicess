import React from "react";
import Container from "react-bootstrap/Container";
import coordinadores from "../images/coordinadores.jpg";
import "../index.css";

const Coordinadores = () => {
  return (
    <>
      <Container fluid="true" className="text-center my-5 px-0">
        <h1 className="title">#Coordinadores</h1>

        <img
          fluid="true"
          src={coordinadores}
          className="img-vol-coor w-100"
          alt="raices bichito de luz"
        />
<h6 className="description">Debido a la gran ampliación del grupo y volumen de donaciones recibidas es necesario llevar un registro de quienes somos cada uno, para así poder conocer al o los compañeros más cercanos para la distribución y recepción de donaciones, como así también si recientemente te sumas poder contactarte para sumarte a esta hermosa familia solidaria cuanto antes. </h6>
        <p>Daniela, Karina, Gabriela, Nadia y Josefina</p>
      </Container>
    </>
  );
};
export default Coordinadores;
