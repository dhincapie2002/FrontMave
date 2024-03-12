import React, { useState }  from "react";
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
                        <span>Usa tu usuario y contraseña</span>
                        <input type="email" placeholder="Correo" />
                        <input type="password" placeholder="Contraseña" />
                        <a href="#">Forget Your Password?</a>
                        <button>Ingresar</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className={`toggle-panel toggle-left ${isSignUpActive ? 'active': ''}`}>
                            <h1>Bienvenido de Nuevo!</h1>
                            <p>Ingresa tus datos personales</p>
                            <button className="hidden" id="login" onClick={handleLoginClick} >Registrarse</button>
                        </div>
                        <div className={`toggle-panel toggle-right ${isSignUpActive ? '' : 'active'}`}>
                            <h1>Bienvenido!</h1>
                            <p>Ingresa tus datos personales</p>
                            <button className="hidden" id="register" onClick={handleRegisterClick}>Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
