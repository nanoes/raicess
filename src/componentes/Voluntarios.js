import React from "react";
import Container from "react-bootstrap/Container";
import voluntarios from "../images/voluntarios.jpg";
import "../index.css";

const Voluntarios = () => {
  return (
    <>
      <Container fluid="true" className="text-center my-5 px-0">
        <h1 className="title">#Voluntarios</h1>

        <img
          fluid="true"
          src={voluntarios}
          className="img-vol-coor w-100"
          alt="voluntarios raices"
        />
        <h6>Visitamos el comedor Comunitario el Maná, disfrutamos de otra tarde llena de amor, risas, juegos y una clase especial de Folklore con los profes Milagros y Luciano!
Gracias a todos los que colaboraron y nos siguen apoyando.✨</h6>

        <button className="btn-btn">
        <a
         
          href="https://docs.google.com/forms/d/1RpsRwaoy1V9PRCBjRleNEZ0vlMAEowSRi5MkSzgbUVg/edit"
        >
          Quiero ser voluntario!
        </a>
        </button>
      </Container>
    </>
  );
};
export default Voluntarios;
