import React, { useEffect, useRef, useState } from "react";
import Tagline from "./components/Tagline";
import Cv from "./components/Cv";

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
  const [matrix, setMatrix] = useState([]);
  const [update, setUpdate] = useState(0);
  const [color, setColor] = useState("rgba(255,255,255,1)");

  const fullHeight = window.innerHeight;
  const fullWidth = window.innerWidth;
  const fontsize = 12;

  let letters = "Do or do not, there is no try";
  letters = letters.trim().split("");

  useEffect(() => {
    // update the Matrix positions
    let newPositions = [];
    if (matrix?.length > 0) {
      for (let m of matrix) {
        let newY = m.y - fontsize;
        if (newY < 0) {
          newY = fullHeight + Math.floor(Math.random() * 200);
        }
        newPositions.push({ ...m, y: newY });
      }
    } else {
      for (let i = 0; i < fullWidth / fontsize; i++) {
        let startPos = Math.random() * 1000 + fullHeight;
        newPositions[i] = {
          x: Math.floor(fontsize * i),
          y: startPos,
          char: letters[Math.floor(Math.random() * letters.length)],
        };
      }
    }
    setMatrix(newPositions);
    /* Using setTimeout to trigger the animation */
    setTimeout(() => {
      setUpdate(update + 1);
    }, 25);
  }, [setMatrix, update]);

  //"Just keep in mind: the more we value things outside our control, the less control we have";

  let positions = [];
  for (let i = 0; i < fullWidth / fontsize; i++) {
    positions[i] = Math.floor(fontsize * i);
  }

  const draw = (context) => {
    context.clearRect(0, 0, fullWidth, fullHeight);
    context.fillStyle = color;
    for (let m of matrix) {
      context.fillText(m.char, m.x, m.y);
    }
  };

  return (
    <main lang="en">
      <Canvas
        matrix={matrix}
        height={window.innerHeight}
        width={window.innerWidth}
        draw={draw}
      ></Canvas>
      <header id="main_head">
        <div>
          <h1>Michael W. A. Lund</h1>
          <Tagline />
        </div>
      </header>
      <Cv />
      <div id="fogger"></div>
      <div
        id="pi"
        onClick={() => {
          if (color === "rgba(255,255,255,1)") {
            setColor("rgba(255, 255, 255, 0.1)");
          } else {
            setColor("rgba(255,255,255,1)");
          }
        }}
      >
        &#960;
      </div>
    </main>
  );
}
