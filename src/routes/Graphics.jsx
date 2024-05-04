import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/Graphics.css";
import Navbar from "../components/Navbar";
import Cookies from "universal-cookie";

const Graphics = () => {
/* Cookie */
/* import Cookies from "universal-cookie"; */
  const cookie = new Cookies();
  const navigate = useNavigate();
  const cook = cookie.get('id')
  useEffect(() => {
    if (!cook) {
      navigate('/time-out') // Hay que crear la ruta time out que es el cierre de sesioón
    }
  }, [])
  /* Cookie */

  return (
    <div className="rp-cont">
      <Navbar />
      <h1>Graficas</h1>
      <div id="space-graphics">
        <Link to="/GraphicsInitial">
          <button className="space-option">
            <img
              src="./src/image/test.svg"
              className="option-icon"
            />
            <label> Test Inicial </label>
          </button>
        </Link>

        <Link to="/GraphicsMood">
          <button className="space-option">
            <img
              src="./src/image/MoodMonitoring/face1.svg"
              className="option-icon"
            />
            <label> Seguimiento Anímico </label>
          </button>
        </Link>

      </div>
    </div>
  );
};
export default Graphics;
