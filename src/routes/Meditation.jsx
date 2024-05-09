import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // °3°useNavigate para poder navegar entre pestañas
import Cookies from "universal-cookie"; // °° para validar si esta o no logeado
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import videos from "../components/Meditation/video";
import "../styles/Meditation.css"

const Meditation = () => {
  const navigate = useNavigate(); // °3°useNavigate para poder navegar entre pestañas
  /*const cookie = new Cookies(); // °° para validar si esta o no logeado

  Session de usuario
  const cook = cookie.get('id')
  useEffect(() => {
 if (!cook) {
   navigate('/time-out')
}
}, [])*/

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };
  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * videos.length); // Genera un índice aleatorio
    const randomVideo = videos[randomIndex]; // Obtiene el video correspondiente al índice aleatorio
    if (randomVideo) {
      window.open(randomVideo.url, "_blank"); // Abre la URL aleatoria en una nueva pestaña
    }
  };

  return (
    <div className="rp-cont">
      <Navbar />
      <h1>Meditación</h1>
      <div id="article-m" className="scrollable">
        {videos.map((video, index) => (
          <button key={index} id="btn-video" onClick={() => handleButtonClick(video.url)}>
            {video.title} <br />
            Duración: {video.time} min.
          </button>
        ))}
      </div>
      <button id="btn-random" onClick={handleRandom} ><img src="https://imgur.com/rVHo36v.png" alt="" className="Logo"/></button>
    </div>
  );
};

export default Meditation;