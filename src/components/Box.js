import React, { useEffect, useState } from "react";
import './box.scss';

export default function Box({ data, id, copy, endFocus, close, currentPos }) {
  const [size, setSize] = useState({ w: 30, h: 30 });
  const [pos, setPos] = useState({ x: 20, y: 20 });
  const [text, setText] = useState("");
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
  }, [currentPos])

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
    left: pos?.x ?? 20,
    top: pos?.y ?? 20,
    width: size?.w + "px",
    display: "grid",
    height: size?.h + "px",
    borderRadius: 0.25 + "rem",
    zIndex: 2,
    boxShadow: "0px 0px 12px rgba(30, 30, 30, 0.2)",
  };

  return (
    <div
      id={id}
      style={stylized}
      onContextMenu={(e) => {
        e.preventDefault();
        copy({
          pos,
          size,
          text,
        });
      }}
      className="tools_Box"
      onPointerDown={(e) => {
        setDragged(true);
        let tempX = document.getElementById(id);
        setOffset({
          x: tempX?.offsetLeft - e.clientX,
          y: tempX?.offsetTop - e.clientY,
        });
      }}
      onDoubleClick={() => {
        /* Make the text editable */
        setEditText(!editText);
      }}
      onPointerMove={(e) => {
        if (dragged) {
          if (e?.shiftKey) {
            setSize({ w: size?.w + 1, h: size?.h + 1 });
          } else if (e?.ctrlKey) {
            if (size?.w > 20 && size.h > 20) {
              setSize({ w: size.w - 1, h: size.h - 1 });
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
      <span
        title={"Close"}
        className={"closeButton"}
        onClick={close}
      ></span>
      {editText ? (
        <textarea
          style={{ width: "100%", height: '100%' }}
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
        <p style={{ placeSelf: "center", userSelect: "none", whiteSpace: 'pre-wrap' }}>{text}</p>
      )}
    </div>
  );
}
