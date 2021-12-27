import React, { useEffect, useRef } from "react";

const Canvas = ({ draw, height, width }) => {
  const canvas = useRef();

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    draw(context);
  });

  return (
    <canvas ref={canvas} height={height} width={width} id="background_canvas" />
  );
};

export default function App() {
  const draw = (context) => {
    const fullHeight = window.innerHeight;
    const fullWidth = window.innerWidth;
    context.clearRect(0, 0, fullWidth, fullHeight);
    const letters =
      "Some times failing is just that. There is no deeper meaning, and then we just keep going.";
    context.strokeStyle = "white";
    context.lineWidth = "4";
    context.beginPath();
    context.rect(20, 20, fullWidth - 40, fullHeight - 40);
    context.stroke();
  };

  useEffect(() => {}, []);
  return (
    <main>
      <Canvas
        height={window.innerHeight}
        width={window.innerWidth}
        draw={draw}
      ></Canvas>
      <header id="main_head">
        <div>
          <h1>Michael W. A. Lund</h1>
        </div>
      </header>
    </main>
  );
}
