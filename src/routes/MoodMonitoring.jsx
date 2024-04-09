import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/MoodMonitoring.css";
import Cookies from "universal-cookie";

const MoodMonitoring = () => {
  return (
    <div className="rp-cont">
      <header>
        <img src="./src/assets/logo.svg" alt="Logo" className="logo"></img>
        <span className="mave">MAVE</span>
      </header>
      <h1>Seguimiento ánimico</h1>
      <h2> ¿Cómo calificarías tu ánimo el día de hoy? </h2>
    </div>
  );
};

export default MoodMonitoring;
