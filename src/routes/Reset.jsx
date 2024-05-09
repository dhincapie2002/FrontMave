import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../styles/ResetPass.css";
import { useState } from "react";
import { Reset } from "../hooks/RestPassword";

const ForgotPassword = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const mutacion = Reset()

    let location = useLocation();
    const result = location.search.split('=')
    const token = result[1].split('/')[0]
    const id = result[2]


    const onSubmit = handleSubmit((data) => {
        mutacion.mutate({data, token, id})
    })

    return (
        <div className="rp-cont">
            <form onSubmit={onSubmit}>
                <h1>Recuperar Contraseña</h1>
                <span>Ingresa tu nueva contraseña</span>

                {/* Ingreso de los datos */}
                <input type="password" placeholder="Contraseña nueva"
                    {...register('pass', {
                        required: {
                            value: true,
                            message: "Contraseña es requerida"
                        },
                        minLength: { 
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres"
                        }
                    })} />
                {errors.pass && <span className={'alert'}>{errors.pass.message}</span>}

                <input type="password" placeholder="Verificar contraseña"
                    {...register('newPass', {
                        required: {
                            value: true,
                            message: "Verificacion es requerida"
                        },
                        validate: (value) => {
                            if (value !== watch("pass")) {
                                return "Las contraseñas son diferentes"
                            }
                        }
                    })} />
                {errors.newPass && <span className={'alert'}>{errors.newPass.message}</span>}

                <button type="submit" className="button">
                    Enviar
                </button>

                {
                    mutacion.isPending && <span><img className="Loading" src="https://mvalma.com/inicio/public/include/img/ImagenesTL/paginaTL/Cargando.gif" alt="Cargando" /></span>
                }
                {
                    mutacion.isSuccess && <span>Contraseña cambiada con exito</span>
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
