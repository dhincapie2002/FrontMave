import React, { useState } from "react";

const QuestionsForHabits = ({ pregunta, onRespuesta, onConfirmar, esUltimaPregunta }) => {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

  const handleSeleccionRespuesta = (respuesta) => {
    setRespuestaSeleccionada(respuesta);
  };

  const handleConfirmar = () => {
    if (respuestaSeleccionada !== null) {
      onRespuesta(respuestaSeleccionada);
      onConfirmar();
      setRespuestaSeleccionada(null); // Reinicia la respuesta seleccionada
    }
  };

  return (
    <div className="habit-questions-container"> 
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
                value="si"
                checked={respuestaSeleccionada === "si"}
                onChange={() => handleSeleccionRespuesta("si")}
              />
              <span className="option-text">Sí</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                id="respuesta-no"
                name="respuesta"
                value="no"
                checked={respuestaSeleccionada === "no"}
                onChange={() => handleSeleccionRespuesta("no")}
              />
              <span className="option-text">No</span>
            </label>
          </>
        )}
      </div>
      <button onClick={handleConfirmar}>
        {esUltimaPregunta ? "Finalizar" : "Confirmar Respuesta"}
      </button>
    </div>
  );
};

export default QuestionsForHabits;