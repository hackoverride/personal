import React, { useEffect, useRef, useState } from "react";

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

  const fullHeight = window.innerHeight;
  const fullWidth = window.innerWidth;
  const fontsize = 12;

  let letters = "gdhjusaiohfdiulsahlfdsahjfldhsnjaklhfdklsa";
  letters = letters.split("");

  useEffect(() => {
    // update the Matrix positions
    let newPositions = [];
    if (matrix?.length > 0) {
      for (let m of matrix) {
        let newY = m.y - fontsize;
        if (newY < 0) {
          newY = fullHeight;
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
    }, 50);
  }, [setMatrix, update]);

  //"Just keep in mind: the more we value things outside our control, the less control we have";

  let positions = [];
  for (let i = 0; i < fullWidth / fontsize; i++) {
    positions[i] = Math.floor(fontsize * i);
  }

  const draw = (context) => {
    context.clearRect(0, 0, fullWidth, fullHeight);
    context.fillStyle = "white";
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
        </div>
      </header>
      <div id="fogger"></div>
      <div
        id="pi"
        onMouseOver={() => {
          setUpdate(update + 1);
        }}
      >
        {"pi"}
      </div>
    </main>
  );
}
