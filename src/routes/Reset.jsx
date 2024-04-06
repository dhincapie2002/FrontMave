import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../styles/ResetPass.css";
import { useState } from "react";
import { Reset } from "../hooks/CrudUsers";

const ForgotPassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const mutacion = Reset()

    const onSubmit = handleSubmit((data) => {
        mutacion.mutate(data)
    })

    return (
        <div className="rp-cont">
            <form onSubmit={onSubmit}>
                <h1>Recuperar Contraseña</h1>
                <span>Ingresa tu nueva contraseña</span>

                {/* Ingreso de los datos */}
                <input type="password" placeholder="Contraseña nueva"
                    {...register('email', {
                        required: {
                            value: true,
                            message: "El correo electrónico es requerido"
                        }
                    })} />
                {errors.email && <span className={'alert'}>{errors.email.message}</span>}
                
                <input type="password" placeholder="Repetir la contraseña"
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
                    mutacion.isPending && <span>Loading...</span>
                }
                {
                    mutacion.isSuccess && <span>Verifique su E-mail</span>
                }
                {
                    mutacion.isError && <span>Fail</span>
                }
                <Link to="/" className="button">
                    Atrás
                </Link>
            </form>
        </div>
    );
};

export default ForgotPassword;
