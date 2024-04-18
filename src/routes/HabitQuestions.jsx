import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie"; // °° para validar si esta o no logeado
import { Link, NavLink, useNavigate } from "react-router-dom"; 
import "../styles/HabitQuestions.css";
import QuestionsForHabits from "../components/PreguntasHabitos/QuestionsForHabits";

const HabitQuestions = () => {
  // Estados de la aplicación
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const navigate = useNavigate(); // °3°useNavigate para poder navegar entre pestañas
  const cookie = new Cookies(); // °° para validar si esta o no logeado

  // Session de usuario
  const cook = cookie.get('id')
  useEffect(() => {
    if (!cook) {
      navigate('/time-out')
    }
  }, [])

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

  // Función para finalizar la prueba y enviar las respuestas
  const finalizarPrueba = () => {
    // Aquí puedes hacer lo que necesites con el arreglo de respuestas
    console.log("Respuestas:", respuestas);
  };

  // Función para confirmar la respuesta y avanzar a la siguiente pregunta
  const handleConfirmar = () => {
    // Aquí puedes hacer cualquier acción que necesites al confirmar la respuesta
    setPreguntaActual(preguntaActual + 1);
  };

  // Renderiza la pregunta actual
  const renderPreguntaActual = () => {
    const pregunta = preguntas[preguntaActual];
    const esUltimaPregunta = preguntaActual === preguntas.length - 1;
    return (
      <QuestionsForHabits
        key={preguntaActual}
        pregunta={pregunta}
        onRespuesta={handleRespuesta}
        onConfirmar={handleConfirmar}
        esUltimaPregunta={esUltimaPregunta}
      />
    );
  };

  return (
    <div>
      {preguntaActual < preguntas.length ? (
        renderPreguntaActual()
      ) : (
        <Link to="/dashboard">
          <button onClick={finalizarPrueba} className="boton-finalizar">Enviar respuestas y<br></br> volver al inicio</button>
        </Link>
      )}
    </div>
  );
};

export default HabitQuestions;
