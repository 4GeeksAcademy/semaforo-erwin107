import React, { useState, useEffect } from "react";
import "../../styles/index.css";

const Semaforo = () => {
  const [color, setColor] = useState("red");
  const colors = ["red","yellow","green"];
  const nextColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex +1) % colors.length;
    setColor(colors[nextIndex]);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextColor();
    }, 3000);

    return () => clearInterval(interval);
  }, [color]);
  return (
    <div className="container">
      <div className="traffic-light">
        {colors.map((c) => (
          <div
            key={c}
            className={`light ${c} ${color === c ? "glow" : "1"}`}
            onClick={() => setColor(c)}
          ></div>
        ))}
      </div>
      <div className="buttons">
        <button className="btn btn-primary m-2" onClick={nextColor}> Cambiar color
</button>

      </div>
    </div>
  );
};

export default Semaforo;