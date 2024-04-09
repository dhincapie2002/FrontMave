import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // °3°useNavigate para poder navegar entre pestañas
import "../styles/InitialQuestions.css";
import Cookies from "universal-cookie"; // °° para validar si esta o no logeado

const InitialQuestions = () => {
  const navigate = useNavigate(); // °3°useNavigate para poder navegar entre pestañas
  const cookie = new Cookies(); // °° para validar si esta o no logeado

  const [cuestionarioIniciado, setCuestionarioIniciado] = useState(false);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [cuestionarioFinalizado, setCuestionarioFinalizado] = useState(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null); // Estado para almacenar la respuesta seleccionada
  const [tiempoRestante, setTiempoRestante] = useState(900); // 900 15 minutos en segundos
  const [tiempoFin, setTiempoFin] = useState(false);

  const empezarCuestionario = () => {
    setCuestionarioIniciado(true);
  };

  const handleSeleccionarOpcion = (opcionSeleccionada) => {
    setRespuestaSeleccionada(opcionSeleccionada); // Guardar la opción seleccionada en el estado
  };

  const confirmarRespuesta = () => {
    if (respuestaSeleccionada !== null) {
      // Verificar que se haya seleccionado una opción
      if (preguntaActual < preguntas.length - 1) {
        setPreguntaActual(preguntaActual + 1);
        setRespuestaSeleccionada(null); // Reiniciar la respuesta seleccionada para la siguiente pregunta
      } else {
        setCuestionarioFinalizado(true);
        alert("¡Cuestionario finalizado!, da clic en el SALIR ");
      }
    } else {
      alert("Por favor, seleccione una respuesta antes de continuar.");
    }
  };

// °° para validar si esta o no logeado
  const cook = cookie.get('id')
  useEffect(() => {
    if (!cook) {
      navigate('/time-out')
    }
  }, [])
// °° para validar si esta o no logeado

  useEffect(() => {
    let intervalId;
    if (cuestionarioIniciado && tiempoRestante > 0) {
      intervalId = setInterval(() => {
        setTiempoRestante((prevTiempoRestante) => prevTiempoRestante - 1);
      }, 1000);
    } else if (tiempoRestante === 0) {
      setTiempoFin(true);
      alert("El tiempo finalizo, pero puedes seguir respondiendo el test");
    }
    return () => clearInterval(intervalId);
  }, [cuestionarioIniciado, tiempoRestante]);

  const preguntas = [
    {
      id: 1,
      opciones: [
        "Amable, gentil",
        "Persuasivo, convincente",
        "Humilde, reservado, modesto",
        "Original, innovador, diferente",
      ],
    },
    {
      id: 2,
      opciones: [
        "Atractivo, simpático, agradable para los demás",
        "Cooperativo, está de acuerdo con frecuencia",
        "Terco, tenaz, combativo",
        "Dulce, complaciente",
      ],
    },
    {
      id: 3,
      opciones: [
        "Fácil de guiar, seguidor",
        "Directo, retador",
        "Leal, devoto, fiel",
        "Encantador, hace que la gente disfrute",
      ],
    },
    {
      id: 4,
      opciones: [
        "Abierto de mente, receptivo",
        "Considerado, gusta de ayudar",
        "Voluntarioso, carácter fuerte y decidido",
        "Alegre, divertido",
      ],
    },
    {
      id: 5,
      opciones: [
        "Jovial, bromista",
        "Preciso, exacto",
        "Decidido, determinado, audaz",
        "Estable, de temperamento tranquilo, calmado",
      ],
    },
    {
      id: 6,
      opciones: [
        "Competitivo, busca ganar",
        "Considerado, cariñoso, tiene mucho tacto",
        "Extrovertido, le encanta la diversión, outgoing, fun loving, socially striving",
        "Armonioso, busca el acuerdo",
      ],
    },
    {
      id: 7,
      opciones: [
        "Exigente, difícil de satisfacer",
        "Obediente, hace lo que se le instruye que haga, acomedido",
        "Tenaz y decidido, determinado",
        "Bromista, juguetón, divertido",
      ],
    },
    {
      id: 8,
      opciones: [
        "Valiente, temerario, lleno de coraje",
        "Inspirador, estimulante, motivador",
        "Obediente, no confrontas, cede fácilmente",
        "Tímido, aprehensivo, callado",
      ],
    },
    {
      id: 9,
      opciones: [
        "Sociable, disfruta de la compañía de otros",
        "Paciente, estable, tolerante",
        "Autosuficiente, independiente",
        "De bajo perfil, tibio, reservado",
      ],
    },
    {
      id: 10,
      opciones: [
        "De bajo perfil, tibio, reservado",
        "Receptivo, abierto a sugerencias",
        "Cordial, cálido, amistoso",
        "Moderado, evita los extremos",
      ],
    },
    {
      id: 11,
      opciones: [
        "Expresivo, habla mucho",
        "Controlado, poco expresivo",
        "Convencional, sistemático, rutinario",
        "Decidido, cierto, firme al tomar decisiones",
      ],
    },
    {
      id: 12,
      opciones: [
        "Refinado, elegante al hablar",
        "Busca retos, toma riesgos",
        "Diplomático, tiene tacto con las personas",
        "Satisfecho, contento, cómodo",
      ],
    },
    {
      id: 13,
      opciones: [
        "Agresivo, desafiante, enfocado a la acción",
        "Alma de la fiesta, entretenido, extrovertido",
        "Ingenuo, es fácil que se aprovechen de él",
        "Temeroso, tiende a preocuparse mucho",
      ],
    },
    {
      id: 14,
      opciones: [
        "Cuidadoso, desconfiado, cauteloso",
        "Determinado, decidido, no se derrota, se para firme",
        "Convincente, transmite seguridad",
        "De buen carácter, cortés, gusta de satisfacer a los demás",
      ],
    },
    {
      id: 15,
      opciones: [
        "Entusiasta, le pone ganas",
        "Impaciente, ansioso, desesperado a veces",
        "Amistoso, logra acuerdos, acepta",
        "Energético, vivaz, entusiasta",
      ],
    },
    {
      id: 16,
      opciones: [
        "Tiene autoconfianza, cree en sí mismo, seguro",
        "Comprensivo, compasivo, apoyador de la gente",
        "Tolerante",
        "Asertivo, agresivo, directo",
      ],
    },
    {
      id: 17,
      opciones: [
        "Muy disciplinado, auto controlado",
        "Generoso, le gusta compartir",
        "Animado, expresivo, usa muchos gestos",
        "Persistente, no da paso atrás, se niega a perder",
      ],
    },
    {
      id: 18,
      opciones: [
        "Admirable, digno de reconocimiento",
        "Amable, deseoso de ayudar y de compartir",
        "Resignado, renuncia, no lucha",
        "Fuerte de carácter, poderoso",
      ],
    },
    {
      id: 19,
      opciones: [
        "Respetuoso, trata con consideración a las personas",
        "Pionero, explorador, innovador",
        "Optimista, ve lo positivo en las cosas",
        "Se acomoda, complaciente, listo para ayudar",
      ],
    },
    {
      id: 20,
      opciones: [
        "Discutidor, polémico, confrontante",
        "Adaptable, flexible",
        "Relajado, toma las cosas con calma, tranquilo",
        "Ligero, despreocupado, descomplicado",
      ],
    },
    {
      id: 21,
      opciones: [
        "Confía en los demás, tiene fe en la gente",
        "Contento, satisfecho",
        "Positivo, no admite dudas ni temores",
        "Pacífico, tranquilo",
      ],
    },
    {
      id: 22,
      opciones: [
        "Socialmente hábil, le gusta estar con los demás",
        "Educado, culto, conocedor",
        "Vigoroso, energético",
        "Tolerante, poco estricto, comprensivo",
      ],
    },
    {
      id: 23,
      opciones: [
        "Agradable, da gusto estar con él o ella",
        "Exacto, correcto, preciso",
        "Tiene opiniones claras, habla libre y abiertamente",
        "Reservado, controlado, parco",
      ],
    },
    {
      id: 24,
      opciones: [
        "Impaciente, no puede relajarse, no descansa",
        "Sociable, amable",
        "Popular, apreciado por mucha gente",
        "Ordenado, organizado, nítido",
      ],
    },
  ];

  const segundosAMinutos = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${
      segundosRestantes < 10 ? "0" : ""
    }${segundosRestantes}`;
  };

  return (
    <div className="rp-cont">
      <header>
        <img src="./src/assets/logo.svg" alt="Logo" className="logo"></img>
        <span className="mave">MAVE</span>
      </header>
      <h1>Test Inicial</h1>
      {!cuestionarioIniciado && (
        <>
          <h2>Instrucciones</h2>
          <p>
            1. Seleccione la frase que MÁS lo describa. <br></br>
            2. De clic en el botón (Confirmar Respuesta) para pasar a la
            siguiente pregunta. <br></br>
            3. Ojo, una vez confirmada su respuesta NO podrá devolverse.{" "}
            <br></br>
            4. Contara con 15 minutos para responder las 24 preguntas.
          </p>
          <button onClick={empezarCuestionario}>Empezar</button>
        </>
      )}
      {cuestionarioIniciado && (
        <div>
          <div className="radio-input">
            <div className="info">
              <span className="question">
                Tiempo restante: {segundosAMinutos(tiempoRestante)}{" "}
              </span>
            </div>
            <div className="info">
              <span className="question">Pregunta</span>
              <span className="steps">{preguntaActual + 1}/24</span>
            </div>
            {preguntas[preguntaActual].opciones.map((opcion, index) => (
              <div key={index} className="opcion">
                <input
                  type="radio"
                  id={`value-${index + 1}`}
                  name="value-radio"
                  value={`value-${index + 1}`}
                  checked={respuestaSeleccionada === opcion} // Marcar la opción seleccionada
                  onChange={() => handleSeleccionarOpcion(opcion)}
                />
                <label htmlFor={`value-${index + 1}`}>{opcion}</label>
              </div>
            ))}
            <button id="confirmar" onClick={confirmarRespuesta}>
              Confirmar respuesta
            </button>
          </div>
        </div>
      )}
      {tiempoFin && (
        <div></div>
      )}
      {cuestionarioFinalizado && (
        <div>
          <button
            onClick={() => {
              navigate('/Dashboar') // °3°useNavigate para poder navegar entre pestañas
            //****************************************************************************** */
            // Para pruebas: se clica el boton de salir se reinicie la encuesta
            //borrar cuando este listo
              //setTiempoRestante (900);
              //setCuestionarioFinalizado(false); 
              //setPreguntaActual(0);
            //****************************************************************************** */
            }}
          >
            Salir
          </button>
        </div>
      )}
    </div>
  );
};

export default InitialQuestions;
