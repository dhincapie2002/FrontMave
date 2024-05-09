import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../styles/ResetPass.css";
import { useState } from "react";
import { ResetPassword } from "../hooks/RestPassword";


// modulo que recibe la nueva contraseña
const ForgotPassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

   

    const mutacion = ResetPassword()

    const onSubmit = handleSubmit((data) => {

        mutacion.mutate(data)
    })

    return (
        <div className="rp-cont">
            <form onSubmit={onSubmit}>
                <h1>Recuperar Contraseña</h1>
                <span>Ingresa tu correo electrónico</span>

                {/* Ingreso de los datos */}
                <input type="email" placeholder="Correo"
                    {...register('email', {
                        required: {
                            value: true,
                            message: "El correo electrónico es requerido"
                        }
                    })} />
                {errors.email && <span className={'alert'}>{errors.email.message}</span>}


                <button type="submit" className="button">
                    Enviar
                </button>

                {
                    mutacion.isPending && <span><img className="Loading" src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif" alt="Cargando" /></span>
                }
                {
                    mutacion.isSuccess && <span>Verifique su E-mail</span>
                }
                {
                    mutacion.isError && <span>Fallo</span>
                }
                <Link to="/" className="button">
                    Atrás
                </Link>
            </form>
        </div>
    );
};

export default ForgotPassword;
