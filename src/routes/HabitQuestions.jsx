import React, { useState } from "react";
import "../styles/HabitQuestions.css";
import QuestionsForHabits from "../components/PreguntasHabitos/QuestionsForHabits";

const HabitQuestions = () => {
  // Estados de la aplicación
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState([]);

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

  // Función para manejar la respuesta a la pregunta actual
  const handleRespuesta = (respuesta) => {
    setRespuestas([...respuestas, respuesta]);
    setPreguntaActual(preguntaActual + 1);
  };

  // Renderiza la pregunta actual
  const renderPreguntaActual = () => {
    const pregunta = preguntas[preguntaActual];
    return (
      <QuestionsForHabits key={preguntaActual} pregunta={pregunta} onRespuesta={handleRespuesta} />
    );
  };

  return (
    <div className="habit-questions-container">
      <h1>Test de Hábitos</h1>
      {preguntaActual < preguntas.length && renderPreguntaActual()}
    </div>
  );
};

export default HabitQuestions;
