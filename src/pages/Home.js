import React, { useEffect, useRef, useState } from "react";
import ArtBoard from "../components/ArtBoard";
import { Outlet, useNavigate } from "react-router-dom";

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
  const [PITrigger, setPITrigger] = useState(false);

  const fullHeight = window.innerHeight;
  const fullWidth = window.innerWidth;
  const fontsize = 20;

  let letters =
    "When you are a carpenter making a beautiful chest of drawers, you are not going to use a piece of plywood on the back, even though it faces the wall and nobody will ever see it. You will know it is there, so you are going to use a beautiful piece of wood on the back. For you to sleep well at night, the aesthetic, the quality, has to be carried all the way through";
  letters = letters.trim().split("");

  useEffect(() => {
    // update the Matrix positions
    let newPositions = [];
    if (matrix?.length > 0) {
      for (let m of matrix) {
        let newY = m.y - fontsize / 2;
        if (newY < 0) {
          newY = fullHeight + Math.floor(Math.random() * 200);
        }

        /* If PITrigger then updated with new colors! */
        if (PITrigger) {
          console.log(m.color);
          let colorUpdate = {
            r: m?.color?.r ?? 150,
            g: m?.color?.g ?? 150,
            b: m?.color?.b ?? 150,
            a: 1,
          };
          // increment the color random on rainbow values
          /* Randomize if update should occur */
          let triggered = Math.random() > 0.5;
          if (triggered) {
            colorUpdate.r = colorUpdate.r + Math.floor(Math.random() * 10);
            colorUpdate.g = colorUpdate.g + Math.floor(Math.random() * 10);
            colorUpdate.b = colorUpdate.b + Math.floor(Math.random() * 10);
            if (colorUpdate.r >= 255) {
              colorUpdate.r = Math.floor(Math.random() * 155 + 100);
            }
            if (colorUpdate.g >= 255) {
              colorUpdate.g = Math.floor(Math.random() * 155 + 100);
            }
            if (colorUpdate.b >= 255) {
              colorUpdate.b = Math.floor(Math.random() * 155 + 100);
            }
          }

          newPositions.push({ ...m, y: newY, color: colorUpdate });
        } else {
          const color = {
            r: 150,
            g: 150,
            b: 150,
            a: 0.2,
          };
          newPositions.push({ ...m, y: newY, color: color });
        }
      }
    } else {
      for (let i = 0; i < fullWidth / fontsize; i++) {
        let startPos = Math.random() * 1000 + fullHeight;

        const color = {
          r: 150,
          g: 150,
          b: 150,
          a: Math.random() * 1,
        };
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
    }, 10);
    // eslint-disable-next-line
  }, [setMatrix, update]);

  let positions = [];
  for (let i = 0; i < fullWidth / fontsize; i++) {
    positions[i] = Math.floor(fontsize * i);
  }

  const draw = (context) => {
    context.clearRect(0, 0, fullWidth, fullHeight);
    context.font = `${fontsize}px areal`;
    for (let m of matrix) {
      context.fillStyle = `rgba(${m.color.r}, ${m.color.g}, ${m.color.b}, ${m.color.a})`;
      context.fillText(m.char, m.x, m.y);
    }
  };

  return (
    <main lang="en">
      <Canvas
        draggable={false}
        matrix={matrix}
        height={window.innerHeight}
        width={window.innerWidth}
        draw={draw}
      ></Canvas>
      <ArtBoard />
      <Outlet />
      {PITrigger && (
        <>
          <div className="foggyBackground"></div>
          <aside className="piContent">
            <h1></h1>
          </aside>
        </>
      )}
      <div
        id="pi"
        onClick={() => {
          setPITrigger(!PITrigger);
        }}
      >
        &#960;
      </div>
    </main>
  );
}
