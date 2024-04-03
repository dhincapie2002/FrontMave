import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Login.css";

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
                    <form>
                        <h1>Crear Cuenta</h1>
                        <span>Registrarse</span>
                        <input type="text" placeholder="Nombre" />
                        <input type="email" placeholder="Correo" />
                        <input type="number" placeholder="Telefono" />
                        <input type="password" placeholder="Contraseña" />
                        <input type="password" placeholder="Confirmar contraseña" />
                        <button>Registro</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Ingresar</h1>
                        <span>Ingresa tu correo y contraseña</span>
                        <input type="email" placeholder="Correo" />
                        <input type="password" placeholder="Contraseña" />
                        <Link to={"ResetPass"}>¿Olvidaste tu Contraseña?</Link>
                        <button>Ingresar</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className={`toggle-panel toggle-left ${isSignUpActive ? 'active': ''}`}>
                            <h1>¡ Bienvenido a MAVE !</h1>
                            <img src="./src/picture/logo.svg" alt="Logo" className="logo"></img>
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
