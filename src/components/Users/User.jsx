import React, { useState, useEffect } from "react";
import "../../styles/OneArticle.css"; // Archivo de estilos CSS
import Navbar from "../Navbar";
import { useParams, useNavigate } from "react-router-dom";
//import articulos from "./articulosData";
import Cookies from "universal-cookie";
import { GetAllUsersFromAdmin } from "../../hooks/UserHook";

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
const {data:result, isSuccess} = GetAllUsersFromAdmin(cook)
const users = isSuccess && result.data;
  const { id } = useParams(); // Obtener el valor del parámetro de la ruta
 
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

  const user = users[indiceArticulo];
  console.log(user)
  return (
    <div className="rp-cont">
      <Navbar />
      <div id="article">
        <div id="div-titulo">
          <h2 id="titulo">{isSuccess && user.userName}</h2>
        </div>
        <h2>{isSuccess && user.email}</h2>
        <h2>{isSuccess && user.phone}</h2>
        <h2 id="date">{isSuccess && user.roleIdr}</h2>
        <a
          href={isSuccess && user.userName}
          target="_blank"
          rel="noopener noreferrer"
          id="boton-ver"
        >
          Actualizar usuario
        </a>
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