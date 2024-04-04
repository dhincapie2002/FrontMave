import { useState } from "react";
import "../styles/Login.css";
import Registro from "../components/Registro";
import InicioSession from "../components/InicioSession";

const Login = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(true);

    const handleRegisterClick = () => {
        setIsSignUpActive(true);
    };

    const handleLoginClick = () => {
        setIsSignUpActive(false);
    };
    return (
        <>
            <div className={`container ${isSignUpActive ? 'active' : ''}`}>
                
                <div className="form-container sing-up">
                   <Registro />
                </div>

                <div className="form-container sign-in">
                    <InicioSession />
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className={`toggle-panel toggle-left ${isSignUpActive ? 'active': ''}`}>
                            <h1>¡ Bienvenido a MAVE !</h1>
                            <img src="../picture/logo.svg" alt="Logo" className="logo"></img>
                            <p className="acronym">Mente en <br />
                            Armonía <br />
                            Vida en <br />
                            Equilibrio
                            </p>
                            <button className="hidden" id="login" onClick={handleLoginClick} >Quiero <br/> Registrarme</button>
                        </div>
                        <div className={`toggle-panel toggle-right ${isSignUpActive ? '' : 'active'}`}>
                            <h1>! Unete a MAVE !</h1>
                            <img src="./src/picture/logo.svg" alt="Logo" className="logo"></img>
                            <p className="p2">Completa el formulario con tu información personal</p>
                            <button className="hidden" id="register" onClick={handleRegisterClick}>Ya tengo cuenta, quiero <br/>Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
