import React, { useEffect, useRef } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import Navbar from "../../components/Navbar";
import { GetGraficsIni } from "../../hooks/Grafics";

function GraphicsInitial() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current.chartInstance;
      if (chart) {
        chart.updateLayout();
      }
    }
  }, []);

  const data = [
    {
      subject: 'Dominante',
      A: 10, //mutation.data.score1,
      fullMark: 21,
      tooltip: 'Se caracterizan por tener energía desbordante, seguridad en sí mismos y tono de voz fuerte, manifestando una actitud segura y dominante al caminar, hablar en reuniones o participar en seminarios.',
    },
    {
      subject: 'Estable',
      A: 12, //mutation.data.score2,
      fullMark: 21,
      tooltip: 'Se caracterizan por su tranquilidad, adaptabilidad y lentitud en hablar y caminar, mostrándose discretos y callados en reuniones. En seminarios, muestran interés genuino por aprender y una humildad notable.',
    },
    {
      subject: 'Concienzudo',
      A: 8, //mutation.data.score3,
      fullMark: 21,
      tooltip: 'Se distingue por hablar con fundamentos y cuidar su aspecto físico. Camina directo a su destino, observa detalladamente en reuniones y toma apuntes ordenados en seminarios.',
    },
    {
      subject: 'Influyente',
      A: 3, //mutation.data.score4,
      fullMark: 21,
      tooltip: 'Se destacan por su alegría, charlas constantes y amistosas, pero también por su impuntualidad y distracción.',
    },
  ];
 // const mutation = GetGraficsIni()
  const renderTooltip = (props) => {
    const { payload } = props;
    if (payload && payload.length > 0) {
      const { tooltip } = payload[0].payload;
      return <div>{tooltip}</div>;
    }
    return null;
  };

  return (
    <div>
      <Navbar />
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart ref={chartRef} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: 'white', fontSize: 14, stroke: 'black', strokeWidth: 0.1 }} />
          <PolarRadiusAxis />
          <Radar name="UserName" dataKey="A" stroke="#FFFFFF" fill="#FFA74F" fillOpacity={0.8} />
          <Tooltip content={renderTooltip} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphicsInitial;