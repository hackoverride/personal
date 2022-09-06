import React, { useState } from "react";
import "./artboard.scss";
import Box from "./Box";

export default function ArtBoard() {
  const [boxes, setBoxes] = useState([]); // all tools (boxes etc)
  const [currentPos, setCurrentPos] = useState([]);
  const [endFocus, setEndFocus] = useState(false);

  const addNew = (copy) => {
    let newArray = [...boxes];
    let newId = Math.random();
    if (typeof copy?.id !== "undefined") {
      newArray.push({
        id: newId,
        pos: copy.pos,
        size: copy.size,
        text: copy.text,
      });
    } else {
      newArray.push({
        id: newId,
        pos: { x: 20, y: 50 },
        size: { w: 3, h: 5 },
        text: "",
      });
    }

    setBoxes(newArray);
  };

  const removeBox = (box) => {
    let newArray = [];
    if (boxes?.length > 0) {
      for (let b of boxes) {
        if (b.id !== box.id) {
          newArray.push(b);
        }
      }
    }
    setBoxes(newArray);
  };

  let displayed_boxes = [];
  if (boxes?.length > 0) {
    for (let b of boxes) {
      displayed_boxes.push(
        <Box
          key={b?.id}
          id={b.id}
          data={b}
          endFocus={endFocus}
          copy={(data) => {
            addNew(data);
          }}
          close={() => {
            removeBox(b);
          }}
          currentPos={currentPos}
        >
          <p>test</p>
        </Box>
      );
    }
  }

  return (
    <div
      id="designBoard"
      onClick={() => {
        setEndFocus(true);
      }}
      onPointerMove={(e) => {
        setCurrentPos({ x: e.clientX, y: e.clientY });
      }}
      onPointerUp={() => {
        setEndFocus(false);
      }}
      onKeyUp={(e) => {
        if (e.key === "Escape") {
          setEndFocus(false);
        }
      }}
    >
      <nav style={{ display: "flex" }}>
        <button onClick={addNew} id="addBox">
          +
        </button>
        <div className="description"
        >
          <span>Alt-click = Copy</span>
          <span>Shift + drag = Increase</span>
          <span>Ctrl + drag = Shrink</span>
          <span>Doubleclick = Edit text</span>
          <span>Drag = Move</span>
        </div>
      </nav>
      {displayed_boxes}
    </div>
  );
}

