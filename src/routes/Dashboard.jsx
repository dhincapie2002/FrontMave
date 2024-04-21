import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  /*const cookie = new Cookies();
  const cook = cookie.get('id')
  useEffect(() => {
    if (!cook) {
      navigate('/time-out') // Hay que crear la ruta time out que es el cierre de sesioón
    }
  }, [])*/

  const handleLogout = () => {
    Swal.fire({
      title: "¿Quieres cerrar la sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/time-out");
      }
    });
  };

  return (
    <div className="rp-cont">
      <header>
        <img src="./src/assets/logo.svg" alt="Logo" className="logo" />
        <span id="mave">MAVE</span>

        <button id="bell">
          <img src="./src/image/icon/bell.svg" id="bell-icon" />
        </button>

        <button id="go-out" onClick={handleLogout}>
          <img src="./src/image/icon/out.svg" id="go-out-icon" />
        </button>
      </header>

      <div id="space">
        {/* <Link to="/Dashboard">
          <button className="space-option">
            <img src="./src/image/Dashboard/Mindfulness.svg" className="option-icon" />
            <label> Mindfulness </label>
          </button>
        </Link>

        <Link to="/Dashboard">
          <button className="space-option">
            <img src="./src/image/Dashboard/Know.svg" className="option-icon" />
            <label> Saber Más </label>
          </button>
  </Link> 
*/}
        <Link to="/MoodMonitoring">
          <button className="space-option">
            <img src="./src/image/Dashboard/Mood.svg" className="option-icon" />
            <label>
              {" "}
              Seguimiento <br></br> Anímico{" "}
            </label>
          </button>
        </Link>

        <Link to="/Graphics">
          <button className="space-option">
            <img src="./src/image/Test.svg" className="option-icon" />
            <label> Graficas </label>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
