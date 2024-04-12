import React, { useState } from "react";
import { preguntas } from "../../../assets/data/preguntas";
import { useNavigate } from "react-router-dom";

function PreguntasUser({ segundosAMinutos, tiempoRestante }) {
  const navigate = useNavigate();
  const [preguntaActual, setPreguntaActual] = useState(1);
  const [respuestas, setRespuestas] = useState(new Array(24).fill(null));

  function Terminar() {
    alert("Has finalizado el test inicial con éxito. :D");
    navigate("/Dashboar");
  }

  const handleSeleccionRespuesta = (opcion) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[preguntaActual - 1] = opcion;
    setRespuestas(nuevasRespuestas);
  };

  const handleSeguirPregunta = () => {
    const respuestaSeleccionada = respuestas[preguntaActual - 1];
    if (respuestaSeleccionada) {
      if (preguntaActual < 24) {
        setPreguntaActual(preguntaActual + 1);
      } else {
        Terminar();
      }
    } else {
      alert("Por favor selecciona una respuesta antes de continuar.");
    }
  };

  return (
    <div>
      <div className="radio-input">
        <div className="info">
          <span className="question">
            Tiempo restante: {segundosAMinutos(tiempoRestante)}{" "}
          </span>
        </div>
        <div className="info">
          <span className="question">Pregunta</span>
          <span className="steps">{preguntaActual}/24</span>
        </div>
        {preguntas[preguntaActual].opciones.map((opcion, index) => (
          <div key={index} className="opcion">
            <input
              type="radio"
              id={`value-${index + 1}`}
              name={`value${preguntaActual}`}
              value={`value-${index + 1}`}
              checked={respuestas[preguntaActual - 1] === `value-${index + 1}`}
              onClick={() => handleSeleccionRespuesta(`value-${index + 1}`)}
            />
            <label htmlFor={`value-${index + 1}`}>{opcion}</label>
          </div>
        ))}
        <div className="botones">
          {preguntaActual >= 1 && preguntaActual <= 23 && (
            <button className="boton-quest" onClick={handleSeguirPregunta} >
              Confirmar Respuesta
            </button>
          )}
          {preguntaActual === 24 && (
            <button className="boton-quest" onClick={handleSeguirPregunta}>
              Finalizar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PreguntasUser;
