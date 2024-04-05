import { useForm } from "react-hook-form"
import { NewUSer } from "../hooks/CrudUsers";
import cookie from 'universal-cookie'

const Registro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const cook = new cookie()

  const mutacion = NewUSer()

  const onSubmit = handleSubmit((data) => {
    mutacion.mutate(data)
  })

  // se valida usuario si es verdadero inicia session 

  // if (mutacion.isSuccess) {
  //   const usuario = cook.set(mutacion.)
  // }


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


      <input type="number" placeholder="Telefono"
        {...register('telefono', {
          required: {
            value: true,
            message: "El telefono es requerido"
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
