import React, { useEffect, useRef, useState } from "react";
import ArtBoard from "../components/ArtBoard";

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

export default function Home() {
  const [matrix, setMatrix] = useState([]);
  const [update, setUpdate] = useState(0);

  const fullHeight = window.innerHeight;
  const fullWidth = window.innerWidth;
  const fontsize = 20;

  let letters = "Just keep in mind: the more we value things outside our control, the less control we have";
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
        let rValue = Math.random() * 255;
        let gValue = Math.random() * 255;
        let bValue = Math.random() * 255;
        let aValue = Math.random() * 255;
        let color = `rgba(${rValue}, ${gValue}, ${bValue}, ${aValue})`;
        newPositions[i] = {
          x: Math.floor(fontsize * i),
          y: startPos,
          char: letters[Math.floor(Math.random() * letters.length)],
          color: color,
        };
      }
    }
    setMatrix(newPositions);
    /* Using setTimeout to trigger the animation */
    setTimeout(() => {
      setUpdate(update + 1);
    }, 20);
  }, [setMatrix, update]);


  let positions = [];
  for (let i = 0; i < fullWidth / fontsize; i++) {
    positions[i] = Math.floor(fontsize * i);
  }

  const draw = (context) => {
    context.clearRect(0, 0, fullWidth, fullHeight);
    context.font = `bold ${fontsize}px areal`;
    for (let m of matrix) {
      context.fillStyle = m.color;
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
      <ArtBoard />
      <div id="fogger"></div>
      <div
        id="pi"
        onClick={() => {
          /* s */
        }}
      >
        &#960;
      </div>
    </main>
  );
}
