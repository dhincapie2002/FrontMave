import React from "react";
import { Link } from "react-router-dom";

import "../styles/ResetPass.css";

const ForgotPassword = () => {
    return (
        <div className="rp-cont">
                <form>
                    <h1>Recuperar Contraseña</h1>
                    <span>Ingresa tu correo electrónico</span>
                <input type="email" placeholder="Correo" />
                    <button type="submit" className="button">
                    Enviar
                </button>
                <Link to="/" className="button">
                    Atrás
                </Link>
                </form>
        </div>
    );
};

export default ForgotPassword;
