import React from "react";

const QuestionsForHabits = ({ pregunta, onRespuesta }) => {
  const handleRespuesta = (respuesta) => {
    onRespuesta(respuesta);
  };

  return (
    <div className="rp-cont">
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
    </div>
  );
};

export default QuestionsForHabits;
