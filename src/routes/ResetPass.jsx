import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../styles/ResetPass.css";
import { useState } from "react";

const ForgotPassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div className="rp-cont">
            <form onSubmit={onSubmit}>
                <h1>Recuperar Contraseña</h1>
                <span>Ingresa tu correo electrónico</span>

                {/* Ingreso de los datos */}
                <input className="item" type="email" placeholder="Correo"
                    {...register('mail', {
                        required: {
                            value: true,
                            message: "El correo electrónico es requerido"
                        }
                    })} />
                {errors.mail && <span className={'alert'}>{errors.mail.message}</span>}


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
