
import React, { useState, useEffect } from "react";
import "../../styles/OneArticle.css"; // Archivo de estilos CSS
import Navbar from "../Navbar";
import { Link, useParams, useNavigate } from "react-router-dom";
//import articulos from "./articulosData";
import Cookies from "universal-cookie";
import { GetAllArticles } from "../../hooks/Article";

const OneArticle = () => {

    /* Cookie */
/* import Cookies from "universal-cookie"; */
  const navigate = useNavigate();
  const cookie = new Cookies();
  const cook = cookie.get('id')
  useEffect(() => {
    if (!cook) {
      navigate('/time-out') // Hay que crear la ruta time out que es el cierre de sesioón
    }
  })
/* Cookie */
const {data:result, isSuccess} = GetAllArticles(cook);
const articulos = isSuccess && result.data;
  const { id } = useParams(); // Obtener el valor del parámetro de la ruta

  // Verificar si el ID es válido y obtener el artículo correspondiente
  const indiceInicial = parseInt(id) - 1;
  const [indiceArticulo, setIndiceArticulo] = useState(indiceInicial);

  useEffect(() => {
    // Actualizar la URL cuando cambia el índice del artículo
    navigate(`/oneArticle/${indiceArticulo + 1}`);
  }, [indiceArticulo, navigate]);
import {  useNavigate } from "react-router-dom";

const OneArticle = () => {
  const navigate = useNavigate();

  const handleNavigateToTexts = () => {
    navigate("/Texts");
  };

  const mostrarSiguienteArticulo = () => {
    setIndiceArticulo((indiceArticulo + 1) % articulos.length);

  };

  const mostrarArticuloAnterior = () => {
    const nuevoIndice = indiceArticulo - 1 < 0 ? articulos.length - 1 : indiceArticulo - 1;
    setIndiceArticulo(nuevoIndice);
  };

  const articulo = articulos[indiceArticulo];
  console.log(articulo)


  const numeroArticuloActual = indiceArticulo + 1;
  const totalArticulos = articulosEjemplo.length;

  return (
    <div className="rp-cont">
      <Navbar />
      <div id="article">
        <div id="div-titulo">
          <h2 id="titulo">{isSuccess && articulo.articleName}</h2>
        </div>
        <img
          src={isSuccess && articulo.picture}
          alt={isSuccess && articulo.articleName}
          id="imagen-articulo"
        />
        <h2 id="date">{isSuccess && articulo.date}</h2>
        <a
          href={isSuccess && articulo.link}
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
            {indiceArticulo + 1}/{articulos.length}
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
