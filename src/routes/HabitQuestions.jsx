// HabitQuestions.jsx

import React, { useState, useEffect } from "react";
import "../styles/HabitQuestions.css";
import QuestionsForHabits from "../components/PreguntasHabitos/QuestionsForHabits";

const HabitQuestions = () => {
  // Estados de la aplicación
  const [indicePreguntaActual, setIndicePreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [respuestaConfirmada, setRespuestaConfirmada] = useState(false);

  // Lista de preguntas
  const preguntas = [
    { pregunta: "¿Qué tan bien comiste hoy?", tipo: "puntuacion" },
    { pregunta: "¿Qué tanto ejercicio hiciste hoy?", tipo: "puntuacion" },
    { pregunta: "¿Descansaste bien anoche (dormiste 8 horas)?", tipo: "si/no" },
    { pregunta: "¿Qué tan relajado te sentiste hoy?", tipo: "puntuacion" },
    { pregunta: "¿Leíste algo el día de hoy?", tipo: "si/no" },
    { pregunta: "¿Aprendiste algo nuevo hoy?", tipo: "si/no" },
    { pregunta: "¿Qué tanto socializaste el día de hoy?", tipo: "puntuacion" },
    { pregunta: "¿Cumpliste con tus tareas de hoy?", tipo: "si/no" },
    { pregunta: "¿Qué tanto te has hidratado el día de hoy?", tipo: "puntuacion" },
    { pregunta: "¿Qué tan solo te sentiste el día de hoy?", tipo: "puntuacion" },
    { pregunta: "¿Te comunicaste con un ser querido hoy?", tipo: "si/no" },
    { pregunta: "¿Qué tanto tiempo le dedicaste a tu hobbie hoy?", tipo: "puntuacion" },
    { pregunta: "¿Qué tanto tiempo le dedicaste a tus vicios hoy?", tipo: "puntuacion" }
  ];
  ;

  // Función para manejar la selección de respuesta
  const handleSeleccionRespuesta = (respuesta) => {
    setRespuestaSeleccionada(respuesta);
  };

  // Función para manejar la confirmación de la respuesta
  const handleConfirmarRespuesta = () => {
    setRespuestas([...respuestas, respuestaSeleccionada]);
    setRespuestaSeleccionada(null);
    setRespuestaConfirmada(true);
    if (indicePreguntaActual < preguntas.length - 1) {
      setIndicePreguntaActual(indicePreguntaActual + 1);
      setRespuestaConfirmada(false);
    }
  };

  // Renderizar mensaje de agradecimiento
  const renderMensajeAgradecimiento = () => {
    return (
      <div>
        <div>¡Gracias por responder!</div>
      </div>
    );
  };

  return (
    <div>
      {indicePreguntaActual < preguntas.length && !respuestaConfirmada && (
        <div>
          <QuestionsForHabits
            pregunta={preguntas[indicePreguntaActual]}
            onRespuesta={handleSeleccionRespuesta}
            mostrarBoton={respuestaSeleccionada !== null && !respuestaConfirmada}
            onConfirmarRespuesta={handleConfirmarRespuesta}
          />
        </div>
      )}
      {indicePreguntaActual === preguntas.length - 1 && respuestaConfirmada && renderMensajeAgradecimiento()}
    </div>
  );
};

export default HabitQuestions;
