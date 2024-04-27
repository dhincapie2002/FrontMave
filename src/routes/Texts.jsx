import React, { useState } from "react";
import "../styles/Texts.css"; // Archivo de estilos CSS
import Navbar from "../components/Navbar";

const Texts = () => {
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

  const totalArticulos = articulosEjemplo.length;

  return (
    <div className="rp-cont">
      <Navbar />
      <h1>Artículos que te pueden interesar</h1>
      <div id="article-m" className="scrollable">
        <div id="aricle-mar">
          {articulosEjemplo.map((articulo, index) => (
            <div key={index} className="cat-article">
              <div id="texts-uno">
                <h2 id="titulo-variosm">{articulo.titulo}</h2>
                <a
                  href={articulo.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="boton-verm"
                >
                  Ir
                </a>
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
