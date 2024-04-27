import React, { useEffect, useRef } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import Navbar from "../../components/Navbar";
import { GetGraficsIni } from "../../hooks/Grafics";
import Cookies from "universal-cookie";
import NavBar from "../Navbar"
function GraphicsInitial() {
  const cook = new Cookies()
  let idUsuario = cook.get('id')
  const {data:result, isSuccess} = GetGraficsIni(idUsuario)
  console.log(result)
  const data = [
    {
      subject: 'Dominante',
      desc: 'Las personas dominantes se caracterizan por tener energía desbordante, seguridad en sí mismos y tono de voz fuerte, manifestando una actitud segura y dominante al caminar, hablar en reuniones o participar en seminarios. Su vestimenta refleja poder y autoridad, y su manera de expresarse es directa y mandona. En la oficina, destacan por su liderazgo y capacidad para enfocarse en una meta final, pero pueden ser egocéntricos, explosivos, mandones, manipuladores e impacientes, aunque también destacan por su perseverancia, energía y visión de superación.',
      A:  isSuccess && result.data.d,
      fullMark: 21,
      tooltip: 'Se caracterizan por tener energía desbordante, seguridad en sí mismos y tono de voz fuerte, manifestando una actitud segura y dominante al caminar, hablar en reuniones o participar en seminarios.',
    },
    {
      subject: 'Estable',

      desc: 'Las personas estables se caracterizan por su tranquilidad, adaptabilidad y lentitud en hablar y caminar, mostrándose discretos y callados en reuniones. En seminarios, muestran interés genuino por aprender y una humildad notable. Su vestimenta es conservadora y su expresión calmada y gentil. En la oficina, se mantienen tranquilos y entregados a sus tareas. Tienen una gran paciencia y capacidad para escuchar, contagian paz y estabilidad. Sin embargo, pueden ser inseguros para expresar sus opiniones, desmotivados sin afirmación constante, y tienden a evitar el riesgo y la novedad, siendo indecisos en la toma de decisiones.',
      A:  isSuccess && result.data.s,
      fullMark: 21,
      tooltip: 'Se caracterizan por su tranquilidad, adaptabilidad y lentitud en hablar y caminar, mostrándose discretos y callados en reuniones. En seminarios, muestran interés genuino por aprender y una humildad notable.',
    },
    {
      subject: 'Concienzudo',
      desc: 'La persona concienzuda se distingue por hablar con fundamentos y cuidar su aspecto físico. Camina directo a su destino, observa detalladamente en reuniones y toma apuntes ordenados en seminarios. Su vestimenta es sobria y elegante, y su manera de expresarse es directa y clara. En la oficina, evita juegos de poder y se mantiene éticamente comprometida. Tiene un fuerte sentido del compromiso, es considerada y valora la dimensión espiritual de la vida. Sin embargo, tiende a tener expectativas irreales, ser aprehensiva, terca, pesimista y perfeccionista.',
      A:  isSuccess && result.data.c,

      fullMark: 21,
      tooltip: 'Se distingue por hablar con fundamentos y cuidar su aspecto físico. Camina directo a su destino, observa detalladamente en reuniones y toma apuntes ordenados en seminarios.',
    },
    {
      subject: 'Influyente',

      desc: 'Las personas influyentes se destacan por su alegría, charlas constantes y amistosas, pero también por su impuntualidad y distracción. Son reconocibles porque suelen cantar o hablar solos al caminar, atraen a la gente en reuniones y seminarios, y prefieren ropa creativa y colores llamativos. Se expresan con gestos y gesticulaciones constantes, y rara vez se encuentran en sus escritorios en la oficina, prefiriendo socializar. Su sentido del gusto está muy desarrollado. Son juguetones, optimistas y entusiastas, encontrando la diversión en todo. Sin embargo, tienden a ser olvidadizos, distraídos, evasivos, exagerados y desorganizados, con dificultad para concluir proyectos iniciados.',
      A:  isSuccess && result.data.i,
      fullMark: 21,
      tooltip: 'Se destacan por su alegría, charlas constantes y amistosas, pero también por su impuntualidad y distracción.',
    },
  ];

  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState(null);
  const tooltipRef = useRef(null);

  function getTooltipPosition(subject) {
    switch (subject) {
      case 'Dominante':
        return { y: '25%', x: '57%' };
      case 'Estable':
        return { y: '70%', x: '57%' };
      case 'Concienzudo':
        return { y: '70%', x: '21%' };
      case 'Influyente':
        return { y: '23%', x: '21%' };
      default:
        return { y: 580, x: 0 };
    }
  }

  function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
      const subject = payload[0].payload.subject;
      const desc = payload[0].payload.desc;
      const position = getTooltipPosition(subject);
      setTooltipPosition(position);
      setTooltipContent(desc);
    } else {
      setTooltipContent(null);
    }
    return null;
  };

  return (
    <div className="todo">
      <div className="Container">
        <NavBar/>
        <header className="header-print">
          <span className="mave-print">Estadisticas Iniciales</span>
        </header>
      </div>
      <span>
        <ResponsiveContainer width={600} aspect={1}>
          <RadarChart outerRadius="70%" data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fill: 'white', fontSize: 18, stroke: 'black', strokeWidth: 0.1 }} />
            <PolarRadiusAxis />
            <Tooltip content={<CustomTooltip />} />
            <Radar name="UserName" dataKey="A" stroke="#FFFFFF" fill="#FFA74F" fillOpacity={0.8} />
          </RadarChart>
        </ResponsiveContainer>
      </span >
      {tooltipContent && ReactDOM.createPortal(
        <div
          className="custom-tooltip"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
          }}
          ref={tooltipRef}
        >
          <p style={{ margin: 0 }}>{tooltipContent}</p>
        </div>,
        document.body
      )}
    </div>
  );
}

export default GraphicsInitial;