import React, { useState } from "react";
import "../../styles/OneArticle.css"; // Archivo de estilos CSS
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";

const OneArticle = () => {
  const navigate = useNavigate();
  const articulosEjemplo = [
    {
      titulo: "Nuestra salud mental post Covid no es tan buena",
      imagen: "./src/components/Articles/fotosTem/Articulo (1).png",
      fechaPublicacion: "16 de abril de 2024",
      enlace:
        "https://www.psychologytoday.com/co/blog/nuestra-salud-mental-post-covid-no-es-tan-buena",
    },
    {
      titulo: "Cómo impacta el estrés a tu vida diaria y qué hacer al respecto",
      imagen: "./src/components/Articles/fotosTem/Articulo (2).png",
      fechaPublicacion: "23 de abril de 2024",
      enlace:
        "https://www.psychologytoday.com/co/blog/como-impacta-el-estres-a-tu-vida-diaria-y-que-hacer-al-respecto",
    },

    {
      titulo: "La conexión entre el amor, la felicidad y la buena salud",
      imagen: "./src/components/Articles/fotosTem/Articulo (3).png",
      fechaPublicacion: "25 de abril de 2024",
      enlace:
        "https://www.psychologytoday.com/co/blog/la-conexion-entre-el-amor-la-felicidad-y-la-buena-salud",
    },

    {
      titulo:
        "¿Sientes la necesidad de respirar profundo a cada rato por la ansiedad? Esta es la explicación",
      imagen: "./src/components/Articles/fotosTem/Articulo (4).png",
      fechaPublicacion: "22 de abril de 2024",
      enlace:
        "https://rinconpsicologia.com/necesidad-de-respirar-profundo-cada-rato-ansiedad-causa/",
    },

    {
      titulo: "15 Frases sobre los hábitos para comprenderlos mejor",
      imagen: "./src/components/Articles/fotosTem/Articulo (5).png",
      fechaPublicacion: "22 de abril de 2024",
      enlace:
        "https://rinconpsicologia.com/frases-sobre-habitos-buenos-saludables/",
    },

    {
      titulo:
        "Si duermes mal, te sentirás mal: ¿cómo el sueño afecta tu estado de ánimo?",
      imagen: "./src/components/Articles/fotosTem/Articulo (6).png",
      fechaPublicacion: "17 de abril de 2024",
      enlace: "https://rinconpsicologia.com/como-sueno-afecta-estado-de-animo/",
    },

    {
      titulo: "¿Es la depresión una discapacidad?",
      imagen: "./src/components/Articles/fotosTem/Articulo (7).png",
      fechaPublicacion: "24 de agosto de 2021",
      enlace: "https://psychcentral.com/depression/is-depression-a-disability",
    },

    {
      titulo: "¿Cuándo se convierte la ansiedad en un trastorno de ansiedad?",
      imagen: "./src/components/Articles/fotosTem/Articulo (8).png",
      fechaPublicacion: "17 de noviembre de 2021",
      enlace: "https://psychcentral.com/anxiety/anxious-vs-anxiety",
    },

    {
      titulo: "Trastorno de estrés postraumático (TEPT)",
      imagen: "./src/components/Articles/fotosTem/Articulo (9).png",
      fechaPublicacion: "21 de junio de 2021",
      enlace: "https://psychcentral.com/ptsd/ptsd-overview",
    },
  ];

  const handleNavigateToTexts = () => {
    navigate("/Texts");
  };
  const [indiceArticulo, setIndiceArticulo] = useState(0);

  
  const mostrarSiguienteArticulo = () => {
    setIndiceArticulo((indiceArticulo + 1) % articulosEjemplo.length);
  };

  const mostrarArticuloAnterior = () => {
    const nuevoIndice =
      indiceArticulo - 1 < 0 ? articulosEjemplo.length - 1 : indiceArticulo - 1;
    setIndiceArticulo(nuevoIndice);
  };

  const numeroArticuloActual = indiceArticulo + 1;
  const totalArticulos = articulosEjemplo.length;

  return (
    <div className="rp-cont">
      <Navbar />
      <div id="article">
        <div id="div-titulo">
        <h2 id="titulo">{articulosEjemplo[indiceArticulo].titulo}</h2>
        </div>
        <img
          src={articulosEjemplo[indiceArticulo].imagen}
          alt={articulosEjemplo[indiceArticulo].titulo}
          id="imagen-articulo"
        />
        <h2 id="date">{articulosEjemplo[indiceArticulo].fechaPublicacion}</h2>
        <a
          href={articulosEjemplo[indiceArticulo].enlace}
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
            <img src="../../src/image/icon/list.svg" alt="" id="list-oneArticle"/>
          </p>
        </div>
        <button onClick={mostrarSiguienteArticulo}>Siguiente</button>
      </div>
    </div>
  );
};

export default OneArticle;