import React, { useEffect, useState } from "react";
import "../styles/Texts.css"; // Archivo de estilos CSS
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import articulos from "../components/Articles/articulosData";
import Cookies from "universal-cookie";
import { GetAllArticles } from "../hooks/Article";
import { role } from "../querys/User.query";
//import OneArticle from "./OneArticle"; // Importa el componente OneArticle

const Texts = () => {
  const navigate = useNavigate();
  const cook = new Cookies();
  const IdUser = cook.get(`id`)
  const {data:result, isSuccess} = GetAllArticles(IdUser)
  const articles = isSuccess && result.data;
  const totalArticulos = articles.length;
  const rol = role;
  const botonPsicologo=()=>{
    if (rol==4) {
      <button onClick={navigate(`/Creacion`)}>Agregar Articulo</button>
    }
  }
  const handleNavigateToOneArticle = (index) => { // Pasa el índice del artículo como argumento
    navigate(`/oneArticle/${index + 1}`); // Añade el índice al URL
  };

  return (
    <div className="rp-cont">
      <Navbar />
      <h1>Artículos que te pueden interesar</h1>
      <div id="article-m" className="scrollable">
        <div id="aricle-mar">
          {isSuccess && articles.map((articulo, index) => (
            <div key={index} className="cat-article">
              <div id="texts-uno">
                <button
                  id="btn-texts-uno"
                  onClick={() => handleNavigateToOneArticle(index)}
                >
                  <h2 id="titulo-variosm">{articulo.articleName}</h2>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p>Total de artículos: {totalArticulos}</p>
      {rol === 4 && (<button onClick={() => navigate(`/Creation`)} >Añadir Articulo</button>)}
    </div>
  );
};

export default Texts;
