import React, { useState } from 'react'

const Instrucciones = ({ setCuestionarioIniciado }) => {
  return (
    <>
      <h2>Instrucciones</h2>
      <p>
        1. Seleccione la frase que MÁS lo describa. <br></br>
        2. De clic en el botón (Confirmar Respuesta) para pasar a la
        siguiente pregunta. <br></br>
        3. Ojo, una vez confirmada su respuesta NO podrá devolverse.{" "}
        <br></br>
        4. Contara con 15 minutos para responder las 24 preguntas.
      </p>
      <button onClick={() => setCuestionarioIniciado(true)}>Empezar</button>
    </>
  )
}

export default Instrucciones

