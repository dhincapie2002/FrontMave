import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // °3°useNavigate para poder navegar entre pestañas
import Cookies from "universal-cookie"; // °° para validar si esta o no logeado
import Swal from "sweetalert2";
import Navbar from "../Navbar";
import "../../styles/Creation.css";
import articulos from "./articulosData";
import { SetArticle } from "../../hooks/Article";

const Update = () => {
  const navigate = useNavigate(); // °3°useNavigate para poder navegar entre pestañas
  const [nombre, setTitle] = useState("");
  const [email, setResume] = useState("");
  const [rol, setImage] = useState(null);
  const [telefono, setLink] = useState("");
  const cookie = new Cookies(); // °° para validar si esta o no logeado

  //Session de usuario
  const cook = cookie.get('id')
  useEffect(() => {
 if (!cook) {
   navigate('/time-out')
}
}, [])
const {data:result, isSuccess} = GetAllUsersFromAdmin(cook)
const handleSubmit = (e) => {
  
  
  // Verificar si algún campo está vacío
  if (!nombre || !rol || !email || !telefono) {
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
  console.log(e);
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
        mutacion.mutate(e)
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
        <label htmlFor="nombre">Nombre:</label>
        <input className="form-cam-inp"
          type="text"
          id="nombre"
          placeholder= {isSuccess && result.data.userName}
          value={nombre}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-cam">
        <label htmlFor="email">email:</label>
        <input className="form-cam-inp"
          type="text"
          id="email"
          placeholder= {isSuccess && result.data.email}
          value={email}
          onChange={(e) => setResume(e.target.value)}
        />
      </div>
      <div className="form-cam">
        <label htmlFor="telefono">Telefono:</label>
        <input className="form-cam-inp"
          type="text"
          id="telefono"
          placeholder={isSuccess && result.data.phone}
          value={telefono}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="form-cam">
        <label htmlFor="rol">Rol:</label>
        <input
          type="number"
          id="rol"
          placeholder={isSuccess && result.data.roleId}
          value={rol}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <button id="form-btn" type="submit">Actualizar</button>
      {
                mutacion.isPending && <span><img className="Loading" src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif" alt="Cargando" /></span>
            }
            {
                mutacion.isSuccess && <span>Hecho</span> && navigate("/Dashboard")
            }
            {
                mutacion.isError && <span>Parece que algo fallo, intenta de nuevo</span>
            }
    </form>
  </div>
);
};
export default Update;