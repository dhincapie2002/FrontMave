import { get, useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../../styles/alert.css'
import { SessionInit } from "../../hooks/Authentications";
import Cookies from "universal-cookie";
import { useState } from "react";

const InicioSession = () => {

    const cookie = new Cookies();
    // llamado de estancia de nueva ruta
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    // Estados de React 
    const [pass, setPass] = useState();

    // Llamada de mutacion
    const mutacion = SessionInit()
    

    // Se verifica que el usuario exista
    if (mutacion.isSuccess) {
        // 
        let usuario = mutacion.data.data.Id
        let token = mutacion.data.data.Token

        // se crea una cookie con el id de usuario 
        cookie.set('id', usuario, { path: '/' })

        cookie.set('token', token,{path: '/' });
        // Se envia a la ruta del dashboard con inicio de session
        
        window.location = `/dashboard`
        
        
    }
    
    
    const onSubmit = handleSubmit((data) => {
        // Consulta de usuario que exista 
        mutacion.mutate(data)
    })

    return (
        <form onSubmit={onSubmit}>
            <h1>Ingresar</h1>
            <span>Ingresa tu correo y contraseña</span>
            <div className="caja">
                <input type="email" placeholder="Correo"
                    {...register('mail', {
                        required: {
                            value: true,
                            message: "El correo electrónico es requerido"
                        }
                    })}
                />
                {errors.mail && <span className={'alert'}>{errors.mail.message}</span>}
            </div>

            <div className="caja">
                <input type={pass ? "text" : "password"} placeholder="Contraseña"
                    {...register('password', {
                        required: {
                            value: true,
                            message: "La contraseña es requerida"
                        }
                    })}
                />
                <span className="verPass" onClick={() => setPass(!pass)}>{pass ? <img src="./src/image/icon/eyeClose.svg" alt="eye" className="eye"></img>: <img src="./src/image/icon/eyeOpen.svg" alt="eye" className="eye"></img>}</span>
                {errors.password && <span className={'alert'}>{errors.password.message}</span>}
            </div>

            

            <Link className="resetPass" to={"ResetPass"}>¿Olvidaste tu Contraseña?</Link>

            <button type="submit" className="button">
                Enviar
            </button>
            {
                mutacion.isPending && <span>Loading...</span>
            }
            {
                mutacion.isSuccess && <span>Hecho</span>
            }
            {
                mutacion.isError && <span>Usurio Erroneo</span>
            }


        </form>
    )
}

export default InicioSession


