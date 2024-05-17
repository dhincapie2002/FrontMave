import React, { useState, useEffect } from "react";
import "../../styles/OneArticle.css"; // Archivo de estilos CSS
import Navbar from "../Navbar";
import { useParams, useNavigate } from "react-router-dom";
//import articulos from "./articulosData";
import Cookies from "universal-cookie";
import { GetAllUsersFromAdmin, updateUser } from "../../hooks/UserHook";
import Swal from "sweetalert2";
import { MdMargin } from "react-icons/md";
import { IdUser } from "../../querys/Notify.query";

const OneUsers = () => {

  /* Cookie */
  /* import Cookies from "universal-cookie"; */
  const navigate = useNavigate();
  const cookie = new Cookies();
  const cook = cookie.get('id')
  useEffect(() => {
    if (!cook) {
      navigate('/time-out') // Hay que crear la ruta time out que es el cierre de sesioón
    }
  })
  /* Cookie */
  const { data: result, isSuccess } = GetAllUsersFromAdmin(cook)
  const users = isSuccess && result.data;
  const { id } = useParams(); // Obtener el valor del parámetro de la ruta
  const [role, setRole] = useState(null);
  // Verificar si el ID es válido y obtener el artículo correspondiente
  const indiceInicial = parseInt(id) - 1;
  const [indiceArticulo, setIndiceArticulo] = useState(indiceInicial);

  useEffect(() => {
    // Actualizar la URL cuando cambia el índice del artículo
    navigate(`/OneUser/${indiceArticulo + 1}`);
  }, [indiceArticulo, navigate]);

  const handleNavigateToTexts = () => {
    navigate("/AllUsers");
  };

  const mostrarSiguienteArticulo = () => {
    setIndiceArticulo((indiceArticulo + 1) % users.length);
  };

  const mostrarArticuloAnterior = () => {
    const nuevoIndice =
      indiceArticulo - 1 < 0 ? users.length - 1 : indiceArticulo - 1;
    setIndiceArticulo(nuevoIndice);
  };
  const mutacion = updateUser()
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si algún campo está vacío
    if ( !role) {
      // Mostrar alerta si algún campo está vacío
      Swal.fire({
        title: 'Por favor asigna un rol ',
        icon: 'warning',
        confirmButtonColor: '#1B5091',
        backdrop: "linear-gradient(to right, #60C8B3, #1B5091)",
      });
      return; // Detener el envío del formulario si algún campo está vacío
    }

    var rol = 3
    if ( role  == "Administrador") {
      rol = rol-1
    }
    if ( role  == "Usuario") {
      rol = rol+1
    }

    const data = {
      Id: user.userId,
      rol: rol
    }
    mutacion.mutate(data)
  }

  const user = users[indiceArticulo];
  const roleMap = {
    2: "Administrador",
    4: "Usuario",
    3: "Psicologo",

  };
  return (
    <div className="rp-cont">
      <Navbar />
      <div id="article">
        <div id="div-titulo">
          <h2 id="titulo">{isSuccess && user.userName}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-cam">
            <h2 style={{margin: 25}}>{isSuccess && user.email}</h2>
          </div>
          <div className="form-cam">
            <h2 style={{margin: 25}}>{isSuccess && user.phone}</h2>
          </div>
          <div className="form-cam">
            <label htmlFor="role">Rol:</label>
            <select
              className="form-cam-select"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option className="option-sel" value="" disabled>Selecciona el rol</option>
              {Object.entries(roleMap).map(([key, value]) => (
                <option key={key} value={value}>{value}</option>
              ))}
            </select>
          </div>
          <button id="form-btn" type="submit" onClick={handleSubmit} >Actualizar Usuario</button>
          {
            mutacion.isPending && <span><img className="Loading" src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif" alt="Cargando" /></span>
          }
          {
            mutacion.isSuccess && Swal.fire({
              title: 'El recurso fue cargado con exito',
              icon: 'success',
              confirmButtonColor: '#1B5091',
              backdrop: "linear-gradient(to right, #60C8B3, #1B5091)",
            })
            && navigate("/AllUsers")
          }
          {
            mutacion.isError && <span>Parece que algo fallo, intenta de nuevo</span>
          }
        </form>
      </div>

      <div id="controles">
        <button onClick={mostrarArticuloAnterior}>Anterior</button>
        <div id="num" onClick={handleNavigateToTexts}>
          <p>
            {indiceArticulo + 1}/{users.length}
            <img
              src="../../src/image/icon/list.svg"
              alt=""
              id="list-oneArticle"
            />
          </p>
        </div>
        <button onClick={mostrarSiguienteArticulo}>Siguiente</button>
      </div>
    </div>
  );
};

export default OneUsers;