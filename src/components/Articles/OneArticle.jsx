import React, { useState, useEffect } from "react";
import "../../styles/OneArticle.css"; // Archivo de estilos CSS
import Navbar from "../Navbar";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { GetAllArticles } from "../../hooks/Article";

const OneArticle = () => {
  const { id } = useParams(); // Obtener el valor del parámetro de la ruta
  const navigate = useNavigate();
  const cook = new Cookies();
  const IdUser = cook.get(`id`)
  const {data:result, isSuccess} = GetAllArticles(IdUser)
  const articulos = isSuccess && result.data;
  // Verificar si el ID es válido y obtener el artículo correspondiente
  const indiceInicial = parseInt(id) - 1;
  const [indiceArticulo, setIndiceArticulo] = useState(indiceInicial);

  useEffect(() => {
    // Actualizar la URL cuando cambia el índice del artículo
    navigate(`/oneArticle/${indiceArticulo + 1}`);
  }, [indiceArticulo, navigate]);

  const handleNavigateToTexts = () => {
    navigate("/Texts");
  };

  const mostrarSiguienteArticulo = () => {
    setIndiceArticulo((indiceArticulo + 1) % articulos.length);
  };

  const mostrarArticuloAnterior = () => {
    const nuevoIndice =
      indiceArticulo - 1 < 0 ? articulos.length - 1 : indiceArticulo - 1;
    setIndiceArticulo(nuevoIndice);
  };

  const articulo = articulos[indiceArticulo];
  console.log(articulo)
  return (
    <div className="rp-cont">
      <Navbar />
      <div id="article">
        <div id="div-titulo">
          <h2 id="titulo">{articulo.articleName}</h2>
        </div>
        <img
          src={articulo.picture}
          alt={articulo.articleName}
          id="imagen-articulo"
        />
        <h2 id="date">{articulo.date}</h2>
        <a
          href={articulo.link}
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
