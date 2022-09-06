import React, { useEffect, useState } from "react";
import "./box.scss";

export default function Box({ data, id, copy, endFocus, close, currentPos }) {
  const [size, setSize] = useState({ w: data.size.w, h: data.size.h });
  const [pos, setPos] = useState({ x: data.pos.x, y: data.pos.y });
  const [text, setText] = useState("" + data.text);
  const [offset, setOffset] = useState({});
  const [dragged, setDragged] = useState(false);
  const [editText, setEditText] = useState(false);

  useEffect(() => {
    if (dragged) {
      setPos({
        x: currentPos.x + offset.x + "px",
        y: currentPos.y + offset.y + "px",
      });
    }
    // eslint-disable-next-line
  }, [currentPos]);

  useEffect(() => {
    if (data) {
      if (typeof data?.size?.w !== "undefined") {
        setSize(data?.size);
      }
      if (typeof data?.pos?.x !== "undefined") {
        setPos(data?.pos);
      }
      if (typeof data?.text !== "undefined") {
        setText(data?.text);
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setEditText(false);
  }, [endFocus]);

  const stylized = {
    position: "absolute",
    display: "grid",
    left: pos.x,
    top: pos.y,
    width: size.w + "vw",
    height: size.h + "vh",
    borderRadius: 0.25 + "rem",
    zIndex: 2,
    color: data.color,
  };

  return (
    <div
      id={id}
      style={stylized}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
      className="tools_Box"
      onPointerDown={(e) => {
        console.log(e.altKey);
        if (e.altKey) {
          copy({ ...data, pos: pos, size: size, text: text });
        }
        setDragged(true);
        let tempX = document.getElementById(id);
        setOffset({
          x: tempX?.offsetLeft - e.clientX,
          y: tempX?.offsetTop - e.clientY,
        });
      }}
      onDoubleClick={() => {
        /* Make the text editable */
        setEditText(true);
      }}
      onPointerMove={(e) => {
        if (dragged) {
          if (e?.shiftKey) {
            setSize({ w: size?.w + 0.2, h: size?.h + 0.1 });
          } else if (e?.ctrlKey) {
            if (size?.w > 2 && size.h > 2) {
              setSize({ w: size.w - 0.2, h: size.h - 0.1 });
            } else {
              /* se do nothing */
              setSize(size);
            }
          }
        }
      }}
      onPointerUp={() => {
        setDragged(false);
      }}
    >
      <span title={"Close"} className={"closeButton"} onClick={close}></span>
      {editText ? (
        <textarea
          style={{ width: "100%", height: "100%" }}
          autoFocus={true}
          value={text}
          onKeyDown={(e) => {
            if (e.shiftKey && e.key === "Enter") {
              setEditText(false);
            }
          }}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      ) : (
        <p
          style={{
            placeSelf: "center",
            userSelect: "none",
            whiteSpace: "pre-wrap",
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
}
