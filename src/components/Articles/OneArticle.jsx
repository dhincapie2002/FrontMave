import React, { useState } from "react";
import "../../styles/OneArticle.css"; // Archivo de estilos CSS
import Navbar from "../Navbar";
import { useParams, useNavigate } from "react-router-dom";
import articulos from "./articulosData";

const OneArticle = () => {
  const { id } = useParams(); // Obtener el valor del parámetro de la ruta
  const navigate = useNavigate();

  // Verificar si el ID es válido y obtener el artículo correspondiente
  const articulo = articulos[parseInt(id) - 1];

  if (articulo>articulos.length) {
    navigate("*");
  }

  const handleNavigateToTexts = () => {
    navigate("/Texts");
  };
  const [indiceArticulo, setIndiceArticulo] = useState(0);

  const mostrarSiguienteArticulo = () => {
    setIndiceArticulo((indiceArticulo + 1) % articulo.length);
  };

  const mostrarArticuloAnterior = () => {
    const nuevoIndice =
      indiceArticulo - 1 < 0 ? articulo.length - 1 : indiceArticulo - 1;
    setIndiceArticulo(nuevoIndice);
  };

  const numeroArticuloActual = indiceArticulo + 1;
  const totalArticulos = articulo.length;

  return (
    <div className="rp-cont">
      <Navbar />
      <div id="article">
        <div id="div-titulo">
          <h2 id="titulo">{articulo.titulo}</h2>
        </div>
        <img
          src={articulo.imagen}
          alt={articulo.titulo}
          id="imagen-articulo"
        />
        <h2 id="date">{articulo.fechaPublicacion}</h2>
        <a
          href={articulo.enlace}
          target="_blank"
          rel="noopener noreferrer"
          id="boton-ver"
        >
          Ver
        </a>
      </div>
      <div id="controles">
        <button onClick={mostrarArticuloAnterior}>Anterior</button>
        <div id="num" onClick={handleNavigateToTexts}>
          <p>
            {numeroArticuloActual}/{totalArticulos}
            <img
              src="../../src/image/icon/list.svg"
              alt=""
              id="list-oneArticle"
            />
          </p>
        </div>
        <button onClick={mostrarSiguienteArticulo}>Siguiente</button>
      </div>
    </div>
  );
};

export default OneArticle;
