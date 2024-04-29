import React, { useState } from "react";
import "../styles/Texts.css"; // Archivo de estilos CSS
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import articulos from "../components/Articles/articulosData";
//import OneArticle from "./OneArticle"; // Importa el componente OneArticle

const Texts = () => {
  const navigate = useNavigate();
  const totalArticulos = articulos.length; // Usar articulos en lugar de articulosEjemplo

  const handleNavigateToOneArticle = (index) => { // Pasa el índice del artículo como argumento
    navigate(`/oneArticle/${index + 1}`); // Añade el índice al URL
  };

  return (
    <div className="rp-cont">
      <Navbar />
      <h1>Artículos que te pueden interesar</h1>
      <div id="article-m" className="scrollable">
        <div id="aricle-mar">
          {articulos.map((articulo, index) => (
            <div key={index} className="cat-article">
              <div id="texts-uno">
                <button
                  id="btn-texts-uno"
                  onClick={() => handleNavigateToOneArticle(index)}
                >
                  <h2 id="titulo-variosm">{articulo.titulo}</h2>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p>Total de artículos: {totalArticulos}</p>
    </div>
  );
};

export default Texts;
