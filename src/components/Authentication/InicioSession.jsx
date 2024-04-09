import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../../styles/alert.css'
import { SessionInit } from "../../hooks/Authentications";
import Cookies from "universal-cookie";

const InicioSession = () => {

    const cookie = new Cookies();
    // llamado de estancia de nueva ruta
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    // Se Inicia una mutacion para consultar el usuario
    const mutacion = SessionInit();

    // Se verifica que el usuario exista
    if (mutacion.isSuccess) {
        // 
        let usuario = mutacion.data.data.id

        // se crea una cookie con el id de usuario 
        cookie.set('id', usuario, { path: '/' })

        // Se envia a la ruta del dashboard con inicio de session 
        navigate('/Dashboar')
    }

    const onSubmit = handleSubmit((data) => {
        // Consulta de usuario que exista 
        mutacion.mutate(data)
    })

    return (
        <form onSubmit={onSubmit}>
            <h1>Ingresar</h1>
            <span>Ingresa tu correo y contraseña</span>
            <input type="email" placeholder="Correo"
                {...register('mail', {
                    required: {
                        value: true,
                        message: "El correo electrónico es requerido"
                    }
                })}
            />
            {errors.mail && <span className={'alert'}>{errors.mail.message}</span>}

            <input type="password" placeholder="Contraseña"
                {...register('password', {
                    required: {
                        value: true,
                        message: "La contraseña es requerida"
                    }
                })}
            />
            {errors.password && <span className={'alert'}>{errors.password.message}</span>}

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


