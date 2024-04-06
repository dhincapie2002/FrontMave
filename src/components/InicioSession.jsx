import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import '../styles/alert.css'
import { SessionInit } from "../hooks/CrudUsers";

const InicioSession = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const mutation = InicioSession()
    const onSubmit = handleSubmit((data) => {
        console.log(data)
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
        </form>
    )
}

export default InicioSession
