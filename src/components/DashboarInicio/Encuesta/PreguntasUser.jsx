import { useState } from "react";
import { preguntas } from "../../../assets/data/preguntas"
import { useNavigate } from "react-router-dom";

function PreguntasUser({ segundosAMinutos, tiempoRestante }) {

    const navigate = useNavigate()
    const [preguntaActual, setPreguntaActual] = useState(1);

    function Terminar() {
        navigate('/Dashboar')
    }

    return (
        <div>
            <div className="radio-input">
                <div className="info">
                    <span className="question">
                        Tiempo restante: {segundosAMinutos(tiempoRestante)}{" "}
                    </span>
                </div>
                <div className="info">
                    <span className="question">Pregunta</span>
                    <span className="steps">{preguntaActual}/24</span>
                </div>
                {
                    preguntas[preguntaActual].opciones.map((opcion, index) => (
                        <div key={index} className="opcion">
                            <input
                                type="radio"
                                id={`value-${index + 1}`}
                                name={`value${preguntaActual}`}
                                value={`value-${opcion + 1}`}
                                onClick={() => {
                                    preguntaActual === 24 ?
                                        Terminar()
                                        :
                                        setPreguntaActual(preguntaActual + 1)

                                }}
                            />
                            <label htmlFor={`value-${index + 1}`}>{opcion}</label>
                        </div>
                    )

                    )
                }
                <div className="botones">
                    {
                        preguntaActual > 1 && <button className="boton-quest" onClick={() => setPreguntaActual(preguntaActual - 1)}>atras</button>
                    }
                    {
                        preguntaActual >= 1 && preguntaActual <= 23 && <button className="boton-quest" onClick={() => setPreguntaActual(preguntaActual + 1)}>Seguir</button>
                    }
                    {
                        preguntaActual === 24 && <button className="boton-quest">Finalizar</button>
                    }
                </div>
                {
                    preguntaActual > 1 && preguntaActual <= 23 && <button onClick={Terminar} >Terminar aqui</button>
                }

            </div>
        </div>
    )
}

export default PreguntasUser
