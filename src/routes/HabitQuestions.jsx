// HabitQuestions.jsx

import React, { useState, useEffect } from "react";
import "../styles/HabitQuestions.css";
import QuestionsForHabits from "../components/PreguntasHabitos/QuestionsForHabits";

const HabitQuestions = () => {
  // Estados de la aplicación
  const [preguntaActual, setPreguntaActual] = useState(null);
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

  // Función para elegir una pregunta aleatoria
  const elegirPreguntaAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
    setPreguntaActual(preguntas[indiceAleatorio]);
  };

  // Elegir una pregunta aleatoria al cargar el componente
  useEffect(() => {
    elegirPreguntaAleatoria();
  }, []);

  // Función para manejar la selección de respuesta
  const handleSeleccionRespuesta = (respuesta) => {
    setRespuestaSeleccionada(respuesta);
  };

  // Función para manejar la confirmación de la respuesta
  const handleConfirmarRespuesta = () => {
    setRespuestas([...respuestas, respuestaSeleccionada]);
    setRespuestaSeleccionada(null);
    setRespuestaConfirmada(true);
  };

  // Función para reiniciar el proceso de preguntas
  const reiniciarProceso = () => {
    setRespuestaConfirmada(false);
    elegirPreguntaAleatoria();
  };

  // Renderiza la pregunta actual
  const renderPreguntaActual = () => {
    return (
      <div>
        <QuestionsForHabits
          pregunta={preguntaActual}
          onRespuesta={handleSeleccionRespuesta}
          mostrarBoton={respuestaSeleccionada !== null && !respuestaConfirmada}
        />
      </div>
    );
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
      {preguntaActual && !respuestaConfirmada && (
        <div>
          <QuestionsForHabits
            pregunta={preguntaActual}
            onRespuesta={handleSeleccionRespuesta}
            mostrarBoton={respuestaSeleccionada !== null && !respuestaConfirmada}
            onConfirmarRespuesta={handleConfirmarRespuesta}
          />
        </div>
      )}
      {respuestaConfirmada && renderMensajeAgradecimiento()}
    </div>
  );
};

export default HabitQuestions;
