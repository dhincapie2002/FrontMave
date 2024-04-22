import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import Swal from "sweetalert2";

function Navbar() {
  const navigate = useNavigate();

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

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src="./src/assets/logo.svg" alt="" className="Logo" />
      </div>
      <h1 id="mave">MAVE</h1>
      <div className="nav_items">
        <Link to="/Dashboard">
          <a href="#" className="items">
            <img src="./src/image/icon/house.svg" alt="" className="Logo" />
          </a>
        </Link>

        <Link to="/Dashboard">
          <a href="#" className="items">
            <img src="./src/image/icon/bell.svg" alt="" className="Logo" />
          </a>
        </Link>

        <a href="#" className="items" onClick={handleLogout}>
          <img src="./src/image/icon/out.svg" alt="" className="Logo" />
        </a>
      </div>
      <div className="nav_toggle"></div>
    </div>
  );
}
export default Navbar;
