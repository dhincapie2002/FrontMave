import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // °3°useNavigate para poder navegar entre pestañas
import Cookies from "universal-cookie"; // °° para validar si esta o no logeado
import Swal from "sweetalert2";
import Navbar from "../Navbar";
import "../../styles/Creation.css";

import articulos from "./articulosData";

const Update = () => {
  const navigate = useNavigate(); // °3°useNavigate para poder navegar entre pestañas
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [link, setLink] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  /*const cookie = new Cookies(); // °° para validar si esta o no logeado

  Session de usuario
  const cook = cookie.get('id')
  useEffect(() => {
 if (!cook) {
   navigate('/time-out')
}
}, [])*/

const handleSubmit = (e) => {
  e.preventDefault();
  
  // Verificar si algún campo está vacío
  if (!title || !image || !link || !publicationDate) {
    // Mostrar alerta si algún campo está vacío
    Swal.fire({
      title: 'Por favor completa todos los campos',
      icon: 'warning',
      confirmButtonColor: '#1B5091',
      backdrop: "linear-gradient(to right, #60C8B3, #1B5091)", 
    });
    return; // Detener el envío del formulario si algún campo está vacío
  }
  // Si todos los campos están diligenciados, enviar el formulario
  console.log(
    "Datos del formulario:",
    title,
    link,
    publicationDate,
    image
  );
  Swal.fire({
      title: '¿Esta seguro de guardar los cambios?',
      icon: 'success',
      confirmButtonColor: '#1B5091',
      confirmButtonText: 'Si',
      cancelButtonColor: "#d33",
      cancelButtonText: "No, Cancelar",
      backdrop: "linear-gradient(to right, #60C8B3, #1B5091)", 
    });

    Swal.fire({
      title: "¿Quiere guardar los cambios?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, guardar",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Cambios guardados", "", "success");
        navigate("/Texts");
      } else if (result.isDenied) {
        Swal.fire("Los cambios fuerón descartados", "", "info");
        navigate("/Dashboard");
      }
    });
};  

return (
  <div className="rp-cont">
    <Navbar />
    <h1>Actualizacion del Recurso</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-cam">
        <label htmlFor="title">Título:</label>
        <input className="form-cam-inp"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-cam">
        <label htmlFor="link">URL del recurso:</label>
        <input className="form-cam-inp"
          type="text"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="form-cam">
        <label htmlFor="image">Imagen:</label>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg" // Acepta archivos PNG y JPEG
          onChange={(e) => setImage(e.target.files[0])} // Almacena el archivo de imagen
        />
      </div>
      <div className="form-cam">
        <label htmlFor="publicationDate">Fecha de publicación:</label>
        <input className="form-cam-inp"
          type="date"
          id="publicationDate"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
        />
      </div>
      <button id="form-btn" type="submit">Actualizar</button>
    </form>
  </div>
);
};
export default Update;
