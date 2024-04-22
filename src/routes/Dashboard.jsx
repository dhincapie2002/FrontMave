import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();
  /*const cookie = new Cookies();
  const cook = cookie.get('id')
  useEffect(() => {
    if (!cook) {
      navigate('/time-out') // Hay que crear la ruta time out que es el cierre de sesioón
    }
  }, [])*/

  return (
    <div className="rp-cont">
      <Navbar />

      <div id="space">
        <Link to="/Habitos">
          {" "}
          {/* Juan por favor coloca donde se puede ver los habitos */}
          <button className="space-option">
            <img
              src="./src/image/Dashboard/calendar.svg"
              className="option-icon"
            />
            <label> Habitos </label>
          </button>
        </Link>

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
        {/*
        <Link to="/Dashboard">
          <button className="space-option">
            <img
              src="./src/image/Dashboard/Mindfulness.svg"
              className="option-icon"
            />
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
      </div>
    </div>
  );
}

export default Dashboard;
