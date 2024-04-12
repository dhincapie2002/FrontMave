import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/MoodMonitoring.css";
import Cookies from "universal-cookie";

const MoodMonitoring = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const cookie = new Cookies();

  // Session de usuario
  const cook = cookie.get('id')
  useEffect(() => {
    if (!cook) {
      navigate('/time-out')
    }
  },)

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  const handleConfirmarRespuesta = () => {
    if (selectedOption !== null) {
      navigate("/Dashboar");
    } else {
      alert("Por favor selecciona una opción antes de confirmar.");
    }
  }

  return (
    <div className="rp-cont">
      <header>
        <img src="./src/assets/logo.svg" alt="Logo" className="logo" />
        <span className="mave">MAVE</span>
      </header>
      <h1>Seguimiento ánimico</h1>
      <h2> ¿Cómo calificarías tu ánimo el día de hoy? </h2>
      <p>Por favor da clic en la cara que más represente tu estado de ánimo a lo largo del día, después da clic en el botón <br/> "Confirmar respuesta" </p>
      <div className="radio-tile-group">
        <div className="input-container">
          <input
            id="face1"
            className="radio-button"
            type="radio"
            name="radio"
            onChange={handleOptionChange}
          />
          <div className="radio-tile">
            <div className="face">
              <img
                src="./src/image/face1.svg"
                alt="Face 1"
                className="svg-image"
              />
            </div>
            <label htmlFor="face1" className="radio-tile-label">
              Muy Bueno
            </label>
          </div>
        </div>

        <div className="input-container">
          <input
            id="face2"
            className="radio-button"
            type="radio"
            name="radio"
            onChange={handleOptionChange}
          />
          <div className="radio-tile">
            <div className="face">
              <img src="./src/image/face2.svg" alt="Face 2" />
            </div>
            <label htmlFor="face2" className="radio-tile-label">
              Bueno
            </label>
          </div>
        </div>

        <div className="input-container">
          <input
            id="face3"
            className="radio-button"
            type="radio"
            name="radio"
            onChange={handleOptionChange}
          />
          <div className="radio-tile">
            <div className="face">
              <img src="./src/image/face3.svg" alt="Face 3" />
            </div>
            <label htmlFor="face3" className="radio-tile-label">
              Regular
            </label>
          </div>
        </div>

        <div className="input-container">
          <input
            id="face4"
            className="radio-button"
            type="radio"
            name="radio"
            onChange={handleOptionChange}
          />
          <div className="radio-tile">
            <div className="face">
              <img src="./src/image/face4.svg" alt="Face 4" />
            </div>
            <label htmlFor="face4" className="radio-tile-label">
              Malo
            </label>
          </div>
        </div>

        <div className="input-container">
          <input
            id="face1"
            className="radio-button"
            type="radio"
            name="radio"
            onChange={handleOptionChange}
          />
          <div className="radio-tile">
            <div className="face">
              <img src="./src/image/face5.svg" alt="Face 5" />
            </div>
            <label htmlFor="walk" className="radio-tile-label">
              Muy Malo
            </label>
          </div>
        </div>
      </div>

      <button onClick={handleConfirmarRespuesta}>
        Confirmar Respuesta
      </button>

    </div>
  );
};

export default MoodMonitoring;
