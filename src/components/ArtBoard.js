import React, { useState, useEffect } from "react";
import "./artboard.scss";
import Box from "./Box";
import { getRandomContent } from "../data/content";

export default function ArtBoard() {
  const [boxes, setBoxes] = useState([]); // all tools (boxes etc)
  const [currentPos, setCurrentPos] = useState([]);
  const [endFocus, setEndFocus] = useState(false);
  const [loadedContent, setLoadedContent] = useState(false);

  useEffect(() => {
    if (!loadedContent) {
      const content = getRandomContent();

      let newId = Math.random();
      let boxWidth = window.innerWidth / 2;
      let boxHeight = window.innerHeight / 3;
      if (boxWidth > 400) {
        boxWidth = 400;
      }
      if (boxHeight > 400) {
        boxHeight = 400;
      }

      let tempText = content.title + "\n \n";
      if (content.rolledContent) {
        // if there is rolled content, pick a random one
        tempText += content.rolledContent[Math.floor(Math.random() * content.rolledContent.length)];
      }
      let newBox = {
        id: newId,
        pos: { x: (window.innerWidth / 2) - (boxWidth / 2), y: window.innerHeight / 4 },
        size: { w: boxWidth, h: boxHeight },
        text: tempText,
      };

      setBoxes((prev) => [...prev, newBox]);
      setLoadedContent(true);
      return () => {
        setLoadedContent(false);
        setBoxes([]);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      draggable={false}
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
      <nav style={{ display: "flex" }} draggable={false}>
        <button onClick={addNew} id="addBox">
          +
        </button>
        <div className="description" draggable={false}>
          <span>Drag</span>
          <span style={{ textAlign: "right", fontStyle: "italic" }}>Move</span>
          <span>Alt + drag</span>
          <span style={{ textAlign: "right", fontStyle: "italic" }}>Copy</span>
          
          <span>Doubleclick</span>
          <span style={{ textAlign: "right", fontStyle: "italic" }}>
            Edit text
          </span>
        </div>
      </nav>
      {displayed_boxes}
    </div>
  );
}
