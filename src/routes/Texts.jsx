import React, { useState, useEffect } from "react";
import "../styles/Texts.css"; // Archivo de estilos CSS
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import articulos from "../components/Articles/articulosData";
import Cookies from "universal-cookie";
//import OneArticle from "./OneArticle"; // Importa el componente OneArticle

const Texts = () => {
  const navigate = useNavigate();
    /* Cookie */
/* import Cookies from "universal-cookie"; */
const cookie = new Cookies();
const cook = cookie.get('id')
useEffect(() => {
  if (!cook) {
    navigate('/time-out') // Hay que crear la ruta time out que es el cierre de sesioón
  }
}, [])
/* Cookie */
  const totalArticulos = articulos.length;

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
