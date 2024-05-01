import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

function Navbar() {
  const navigate = useNavigate();

  /* Cookie */
  /* import Cookies from "universal-cookie"; */
  /*const cookie = new Cookies();
const cook = cookie.get('id')
useEffect(() => {
  if (!cook) {
    navigate('/time-out') // Hay que crear la ruta time out que es el cierre de sesioón
  }
}, [])
/* Cookie */

  const handleLogout = () => {
    Swal.fire({
      title: "¿Quieres cerrar la sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
      backdrop: "linear-gradient(to right, #60C8B3, #1B5091)",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/time-out");
      }
    });
  };
  const [messages] = useState("aqui va el mensaje");

  const handleMessages = () => {
    Swal.fire({
      title: "! Eres valioso ¡, por eso te recordamos que: ",
      text: messages,
      confirmButtonText: "Gracias",
      width: 600,
      padding: "3em",
      background: "#fff url(/images/trees.png)",
      backdrop: `
    url("https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif")
    left center
    no-repeat
  `,
    });
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src="https://imgur.com/C86LPG8.png" alt="" className="Logo" />
      </div>
      <h1 id="mave">MAVE</h1>
      <div className="nav_items">
        <Link to="/Dashboard">
          <a href="#" className="items">
            <img src="https://imgur.com/JBl68w8.png" alt="" className="Logo" />
          </a>
        </Link>

        <a href="#" className="items" onClick={handleMessages}>
          <img src="https://imgur.com/M4S6rkV.png" alt="" className="Logo" />
        </a>

        <a href="#" className="items" onClick={handleLogout}>
          <img src="https://imgur.com/rvPskIN.png" alt="" className="Logo" />
        </a>
      </div>
      <div className="nav_toggle"></div>
    </div>
  );
}
export default Navbar;
