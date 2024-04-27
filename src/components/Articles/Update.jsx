import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // °3°useNavigate para poder navegar entre pestañas
import Cookies from "universal-cookie"; // °° para validar si esta o no logeado
import Swal from "sweetalert2";
import Navbar from "../Navbar";
import "../../styles/Creation.css";

const Creation = () => {
  const navigate = useNavigate(); // °3°useNavigate para poder navegar entre pestañas
  /*const cookie = new Cookies(); // °° para validar si esta o no logeado

  Session de usuario
  const cook = cookie.get('id')
  useEffect(() => {
 if (!cook) {
   navigate('/time-out')
}
}, [])*/

  return (
    <div className="rp-cont">
      <Navbar/>
      
    </div>
  );
};
export default Creation;