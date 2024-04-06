import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Dashboar() {
  const cookie = new Cookies();
  const navigate = useNavigate();

  const cook = cookie.get('token')
  useEffect(() => {
    if (!cook) {
      navigate('/time-out') // Hay que crear la ruta time out que es el cierre de sesioón
    }
  }, [])


  return (
    <div>
      Bienvenido Sesion iniciada

      <Link to='/time-out'>
        <button>salir</button>
      </Link>


    </div>
  )
}

export default Dashboar
