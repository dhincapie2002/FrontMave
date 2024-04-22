import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../../styles/GraphicsMood.css";

function GraphicsMood() {
  const data = [
    { name: "face1", value: 1 },
    { name: "face2", value: 2 },
    { name: "face3", value: 3 },
    { name: "face4", value: 4 },
    { name: "face5", value: 5 },
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
        <header className="header-print">
          <img src="./src/assets/logo.svg" alt="Logo" className="logo-print" />
          <span className="mave-print">MAVE</span>
        </header>
      </div>
      <h1>Que tal tus emociones</h1>
      <div id="face">
        <img
          src="./src/image/Graphics/face1.svg"
          alt="Face 1"
          className="svg-image"
        />
        <img
          src="./src/image/Graphics/face2.svg"
          alt="Face 2"
          className="svg-image"
        />
        <img
          src="./src/image/Graphics/face3.svg"
          alt="Face 3"
          className="svg-image"
        />
        <img
          src="./src/image/Graphics/face4.svg"
          alt="Face 4"
          className="svg-image"
        />
        <img
          src="./src/image/Graphics/face5.svg"
          alt="Face 5"
          className="svg-image"
        />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="48%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
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