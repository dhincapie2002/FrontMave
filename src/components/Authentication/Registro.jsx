import { useForm } from "react-hook-form"
import { NewUSer } from "../../hooks/Authentications";
import cookie from 'universal-cookie'
import { useNavigate } from "react-router-dom";

const Registro = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Llamando estancias de ccookie y navegacion
  const cook = new cookie()
  const navegate = new useNavigate()

  // Llamada de mutacion
  const mutacion = NewUSer()

  if (mutacion.isSuccess) {
    // console.log(mutacion.data.data.location)
    let usuario = mutacion.data.data.id
    // se crea una cookie con el id de usuario 
    cook.set('id', usuario, { path: '/' })

    // Se envia a la ruta del dashboard con inicio de session 
    navegate('/Encuesta')
  }

  if (mutacion.isError) {
    console.log(mutacion.error.response.data)
  }

  const onSubmit = handleSubmit((data) => {
    mutacion.mutate(data)
  })
  return (
    <form onSubmit={onSubmit}>
      <h1>Crear Cuenta</h1>
      <span>Registrarse</span>
      <input type="text" placeholder="Nombre"
        {...register('name', {
          required: {
            value: true,
            message: "El nombre es requerido"
          }
        })} />
      {errors.name && <span className="alert">{errors.name.message}</span>}

      <input type="email" placeholder="Correo"
        {...register('email', {
          required: {
            value: true,
            message: "El correo electrónico es requerido"
          }
        })} />
      {errors.email && <span className="alert">{errors.email.message}</span>}


      <input type="text" maxLength="10" placeholder="Telefono"
        {...register('telefono', {
          required: {
            value: true,
            message: "El telefono es requerido"
          },
          minLength: {
            value: 10,
            message: "El telefono debe tener al menos 10 caracteres"
          },
          pattern: {
            value: "^[0-9,$]*$",
            message: "El telefono debe tener solo numeros"
          }
        })} />
      {errors.telefono && <span className="alert">{errors.telefono.message}</span>}

      <input type="password" placeholder="Contraseña"
        {...register('pass', {
          required: {
            value: true,
            message: "La contraseña es requerida"
          }
        })} />
      {errors.pass && <span className="alert">{errors.pass.message}</span>}

      <input type="password" placeholder="Confirmar contraseña"
        {...register('confpass', {
          required: {
            value: true,
            message: "La confirmación de contraseña es requerida"
          }
        })} />
      {errors.confpass && <span className="alert">{errors.confpass.message}</span>}

      <button>Registro</button>

      {
        mutacion.isPending && <span>Loading...</span>
      }
      {
        mutacion.isSuccess && <span>Hecho</span>
      }
      {
        mutacion.isError && <span>Fail</span>
      }
    </form>
  )
}

export default Registro
