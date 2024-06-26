import Navbar from "../Navbar";
import Swal from "sweetalert2";
import { Link, NavLink, useNavigate } from "react-router-dom"; 
import Cookies from "universal-cookie";
import React, { useState, useEffect } from "react";
import { GetQuestionHabbitts } from "../../hooks/Question";

const QuestionsForHabits = ({ pregunta, onRespuesta, onConfirmar, esUltimaPregunta }) => {

/* Cookie */
/* import Cookies from "universal-cookie"; */
const cookie = new Cookies();
const navigate = useNavigate();
const cook = cookie.get('id')
useEffect(() => {
  if (!cook) {
    navigate('/time-out')
  }
}, [])
/* Cookie */

  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

  const handleSeleccionRespuesta = (respuesta) => {
    setRespuestaSeleccionada(respuesta);
  };

  const handleConfirmar = () => {
    if (respuestaSeleccionada !== null) {
      onRespuesta(respuestaSeleccionada);
      onConfirmar();
      setRespuestaSeleccionada(null); // Reinicia la respuesta seleccionada
    }else{
      Swal.fire({
        title: 'Por favor selecciona una respuesta antes de continuar',
        icon: 'info',
        confirmButtonColor: '#1B5091',
        backdrop: "linear-gradient(to right, #60C8B3, #1B5091)", 
      });
    }
  };
  const {data:result, isSuccess, isLoading}= GetQuestionHabbitts(cook)
  return (
    <>{isLoading ? <span><img className="Loading" src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif" alt="Cargando" /></span>:<div className="habit-questions-container"> 
    <Navbar/>
    <h1>Test de Hábitos</h1>
    <p>Una serie de preguntas sobre hábitos es una consulta breve que te ayuda a reflexionar sobre tus acciones diarias <br></br>relacionadas a aspectos de tu vida. Para responderla, simplemente elige una opción que mejor describa <br></br> tu comportamiento o hábito del día, puede ser una calificación del 1 al 5 o una respuesta de Si o No.</p>
    <h2 className="question">{pregunta.pregunta}</h2>
    <div className="radio-input">
      {pregunta.tipo === "puntuacion" ? (
        [1, 2, 3, 4, 5].map((opcion) => (
          <label key={opcion} className="radio-option">
            <input
              type="radio"
              id={`opcion-${opcion}`}
              name="respuesta"
              value={opcion}
              checked={respuestaSeleccionada === opcion}
              onChange={() => handleSeleccionRespuesta(opcion)}
            />
            <span className="option-text">{opcion}</span>
          </label>
        ))
      ) : (
        <>
          <label className="radio-option">
            <input
              type="radio"
              id="respuesta-si"
              name="respuesta"
              value={6}
              checked={respuestaSeleccionada === "si"}
              onChange={() => handleSeleccionRespuesta(7)}
            />
            <span className="option-text">Sí</span>
          </label>
          <label className="radio-option">
            <input
              type="radio"
              id="respuesta-no"
              name="respuesta"
              value={7}
              checked={respuestaSeleccionada === "no"}
              onChange={() => handleSeleccionRespuesta(7)}
            />
            <span className="option-text">No</span>
          </label>
        </>
      )}
    </div>
    <button onClick={handleConfirmar}>
      {esUltimaPregunta ? "Finalizar" : "Confirmar Respuesta"}
    </button>
  </div>}</>
  );
};

export default QuestionsForHabits;