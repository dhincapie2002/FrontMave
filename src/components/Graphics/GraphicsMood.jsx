import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../../styles/GraphicsMood.css";
import Navbar from "../../components/Navbar";
import Cookies from "universal-cookie";
import { GetGraficsMood } from "../../hooks/Grafics";

function GraphicsMood() {
  const cook = new Cookies()
  let idUsuario = cook.get(`id`)
  const {data:result, isSuccess} = GetGraficsMood(idUsuario)
  console.log(result)

  const data = [
    { name: "face1", value: isSuccess && result.data.score1 },
    { name: "face2", value: isSuccess && result.data.score2 },
    { name: "face3", value: isSuccess && result.data.score3 },
    { name: "face4", value: isSuccess && result.data.score4 },
    { name: "face5", value: isSuccess && result.data.score5 },
  ];

  const COLORS = ["#FFA74F", "#FFBE98", "#60C8B3", "#E881A6", "#CE3375"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {` ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div id="cont-graphic">
      <div>
      <Navbar />
      </div>
      <h1 id="h1-que">Que Tal Tus Dias</h1>
      <div id="face">
        <div className="image-container">
          <img
            src="./src/image/Graphics/face1.svg"
            alt="Face 1"
            className="svg-image"
          />
          <div className="description">Muy Bueno</div>
        </div>
        <div className="image-container">
          <img
            src="./src/image/Graphics/face2.svg"
            alt="Face 2"
            className="svg-image"
          />
          <div className="description">Bueno</div>
        </div>
        <div className="image-container">
          <img
            src="./src/image/Graphics/face3.svg"
            alt="Face 3"
            className="svg-image"
          />
          <div className="description">Regular</div>
        </div>
        <div className="image-container">
          <img
            src="./src/image/Graphics/face4.svg"
            alt="Face 4"
            className="svg-image"
          />
          <div className="description">Malo</div>
        </div>
        <div className="image-container">
          <img
            src="./src/image/Graphics/face5.svg"
            alt="Face 5"
            className="svg-image"
          />
          <div className="description">Muy Malo</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="48%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={138}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphicsMood;
