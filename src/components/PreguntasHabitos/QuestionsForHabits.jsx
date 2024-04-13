import React from "react";

const QuestionsForHabits = ({ pregunta, onRespuesta, mostrarBoton, onConfirmarRespuesta }) => {
  const handleRespuesta = (respuesta) => {
    onRespuesta(respuesta);
  };

  const handleConfirmarRespuesta = () => {
    onConfirmarRespuesta();
  };

  return (
    <div className="rp-cont">
      <h1>Test de Hábitos</h1>
      <p>Una pregunta diaria sobre hábitos es una consulta breve que te ayuda a reflexionar sobre tus acciones diarias <br></br>relacionadas aspectos de tu vida. Para responderla, simplemente elige una opción que mejor describa <br></br> tu comportamiento o hábito del día, puede ser una calificación del 1 al 5 o una respuesta de Si o No.</p>
      <h2 className="question">{pregunta.pregunta}</h2>
      {pregunta.tipo === "puntuacion" ? (
        <div className="radio-input">
          {[1, 2, 3, 4, 5].map((opcion) => (
            <label key={opcion}>
              <input
                type="radio"
                name="respuesta"
                value={opcion}
                onChange={() => handleRespuesta(opcion)}
              />
              {opcion}
            </label>
          ))}
        </div>
      ) : (
        <div className="radio-input">
          <label>
            <input
              type="radio"
              name="respuesta"
              value="si"
              onChange={() => handleRespuesta("si")}
            />
            Sí
          </label>
          <label>
            <input
              type="radio"
              name="respuesta"
              value="no"
              onChange={() => handleRespuesta("no")}
            />
            No
          </label>
        </div>
      )}
      {mostrarBoton && (
        <button onClick={handleConfirmarRespuesta}>Confirmar respuesta</button>
      )}
    </div>
  );
};

export default QuestionsForHabits;
