import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/Graphics.css";

import Cookies from "universal-cookie";
import Swal from "sweetalert2";

const Graphics = () => {
  return (
    <div className="rp-cont">
      <header>
        <img src="./src/assets/logo.svg" alt="Logo" className="logo" />
        <span className="mave">MAVE</span>
      </header>
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
