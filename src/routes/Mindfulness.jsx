import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // °3°useNavigate para poder navegar entre pestañas
import Cookies from "universal-cookie"; // °° para validar si esta o no logeado
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import "../styles/Mindfulness.css";
import exercises from "../components/Mindfulness/Exercise.jsx";

const Mindfulnes = () => {
  const navigate = useNavigate(); // °3°useNavigate para poder navegar entre pestañas
  /*const cookie = new Cookies(); // °° para validar si esta o no logeado

  Session de usuario
  const cook = cookie.get('id')
  useEffect(() => {
 if (!cook) {
   navigate('/time-out')
}
}, [])*/
  Swal.fire({
    title: "Consejos:",
    html: "- Encuentra un lugar tranquilo y cómodo. <br/> <br/> - Adopta una postura relajada, ya sea sentado o de pie. <br/> <br/> - Respira profundamente y concéntrate en el ejercicio <br/> <br/> - Si tu mente se distrae, no te juzgues. Reconoce el pensamiento y vuelve suavemente al presente.",
    confirmButtonColor: "#1B5091",
    backdrop: "linear-gradient(to right, #60C8B3, #1B5091)",
  });

  const handleInfo = () => {
    Swal.fire({
      title: "¿Qué es el Mindfulness y por qué es importante?",
      html: "El mindfulness, también conocido como atención plena o conciencia plena, es una práctica que consiste en prestar atención al momento presente de manera intencional y sin juzgar. <br/> El mindfulness nos ayuda a ser más conscientes de nuestros pensamientos, emociones y sensaciones corporales, en lugar de dejarnos llevar por el piloto automático. ",
      confirmButtonColor: "#1B5091",
      backdrop: "linear-gradient(to right, #60C8B3, #1B5091)",
    });
  };

  const handleAdvice = (index) => {
    const exercise = exercises[index];
    if (exercise) {
      Swal.fire({
        title: exercise.title,
        text: exercise.text,
        backdrop: `url("https://imgur.com/iK4Bj9b.png")`,
      });
    }
  };

  return (
    <div className="rp-cont">
      <Navbar />
      <h1>Mindfulness</h1>
      <h2>Tomate un tiempo para ti, lo mereces</h2>
      <div id="space-mind">
        <button className="space-option" onClick={() => handleAdvice(0)}>
          <img src="https://imgur.com/4GqlAew.png" className="option-icon" />
          <label> Respiración consciente </label>
        </button>

        <button className="space-option" onClick={() => handleAdvice(1)}>
          <img src="https://imgur.com/4yThqtw.png" className="option-icon" />
          <label>Exploración sensorial</label>
        </button>

        <button className="space-option" onClick={() => handleAdvice(2)}>
          <img src="https://imgur.com/vL07so6.png" className="option-icon" />
          <label> Barrido corporal </label>
        </button>

        <button className="space-option" onClick={() => handleAdvice(3)}>
          <img src="https://imgur.com/wnFsSsp.png" className="option-icon" />
          <label> Caminata consciente </label>
        </button>

        <button id="info" className="space-option" onClick={handleInfo}>
          <img src="https://imgur.com/2I5LWRD.png" className="option-icon" />
          <label> Saber más </label>
        </button>

        <button className="space-option" onClick={() => handleAdvice(4)}>
          <img src="https://imgur.com/jCXtRBd.png" className="option-icon" />
          <label> Escucha activa </label>
        </button>
      </div>
    </div>
  );
};

export default Mindfulnes;
