import React from "react";
import "../../styles/HeaderPrint.css";

function GraphicsMood() {
  return (
    <div>
      <div>
        <header className="header-print">
          <img src="./src/assets/logo.svg" alt="Logo" className="logo-print" />
          <span className="mave-print">MAVE</span>
        </header>
      </div>
      <h1>GraphicsMood</h1>
    </div>
  );
}

export default GraphicsMood;
