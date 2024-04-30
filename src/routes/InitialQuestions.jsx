import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // °3°useNavigate para poder navegar entre pestañas
import "../styles/InitialQuestions.css";
import Cookies from "universal-cookie"; // °° para validar si esta o no logeado
import { preguntas } from "../assets/data/preguntas";
import Instrucciones from "../components/DashboardInicio/Encuesta/Instrucciones";
import PreguntasUser from "../components/DashboardInicio/Encuesta/PreguntasUser";
import Swal from 'sweetalert2';
import { GetInitialEvaluation } from '../hooks/Question'

const InitialQuestions = () => {
  const navigate = useNavigate(); // °3°useNavigate para poder navegar entre pestañas
  const cookie = new Cookies(); // °° para validar si esta o no logeado
  // Session de usuario
  const cook = cookie.get('id')
  const {data: result, isSuccess} = GetInitialEvaluation(cook)
  
  useEffect(() => {
    if (!cook) {
      navigate('/time-out')
    }
  })

  function Realizado() {
    if (isSuccess && result.data == "El usuario ya realizo la evaluacion inicial" ) {
      Swal.fire({
        title:result.data,
        icon: 'success',
        confirmButtonColor: '#1B5091',
        backdrop: "linear-gradient(to right, #60C8B3, #1B5091)",
      });
    navigate("/Dashboard");
    }
  }


  //Estados de la application
  const [cuestionarioIniciado, setCuestionarioIniciado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(900); // 900 15 minutos en segundos
  const [tiempoFin, setTiempoFin] = useState(false);

  useEffect(() => {
    let intervalId;
    if (cuestionarioIniciado && tiempoRestante > 0) {
      if (isSuccess && result.data == "El usuario ya realizo la evaluacion inicial" ) {
        Swal.fire({
          title:result.data,
          icon: 'success',
          confirmButtonColor: '#1B5091',
          backdrop: "linear-gradient(to right, #60C8B3, #1B5091)",
        });
      navigate("/Dashboard");
      }else{
        intervalId = setInterval(() => {
          setTiempoRestante((prevTiempoRestante) => prevTiempoRestante - 1);
        }, 1000);
      }
    } else if (tiempoRestante === 0) {
      setTiempoFin(true);
      Swal.fire({
        title: 'El tiempo ha finalizado',
        text: 'Pero puedes seguir respondiendo el test',
        icon: 'warning',
        confirmButtonColor: '#1B5091',
        backdrop: "linear-gradient(to right, #60C8B3, #1B5091)", 
      });
    }
    return () => clearInterval(intervalId);
  }, [cuestionarioIniciado, tiempoRestante]);


  const segundosAMinutos = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? "0" : ""
      }${segundosRestantes}`;
  };

  return (
    <div className="rp-cont">
      <header>
        <img src="./src/assets/logo.svg" alt="Logo" className="logo"></img>
        <span className="mave">MAVE</span>
      </header>
      <h1>Test Inicial</h1>
      {
        !cuestionarioIniciado && <Instrucciones setCuestionarioIniciado={setCuestionarioIniciado} />
      }
      {
        cuestionarioIniciado && <PreguntasUser segundosAMinutos={segundosAMinutos} tiempoRestante={tiempoRestante} />
      }
      {tiempoFin && (
        <div></div>
      )}
    </div>
  );
};

export default InitialQuestions;
