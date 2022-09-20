import React, { useEffect, useState } from "react";
import "./box.scss";

export default function Box({ data, id, copy, endFocus, close, currentPos }) {
  const [size, setSize] = useState({ w: data.size.w, h: data.size.h });
  const [pos, setPos] = useState({ x: data.pos.x, y: data.pos.y });
  const [text, setText] = useState("" + data.text);
  const [offset, setOffset] = useState({});
  const [dragged, setDragged] = useState(false);
  const [resize, setResize] = useState({
    top: false,
    right: false,
    bottom: false,
    left: false,
  });
  const [editText, setEditText] = useState(false);

  useEffect(() => {
    let thisBox = document.getElementById(id);
    if (dragged) {
      setPos({
        x: currentPos.x + offset.x + "px",
        y: currentPos.y + offset.y + "px",
      });
    } else if (resize.left) {
      /* ! Need to add the resize correctly */

      // let leftEdge = thisBox.getBoundingClientRect().left;
      // let newWidth = currentPos.x - leftEdge;
      // setSize({
      //   w: size.w + newWidth,
      //   h: size.h,
      // });
      setPos({
        x: currentPos.x + offset.x + "px",
        y: pos.y,
      });
    } else if (resize.right){
      let rightEdge = thisBox.getBoundingClientRect().right;
      let newWidth = currentPos.x - rightEdge;
      setSize({
        w: size.w + newWidth,
        h: size.h,
      });
    } else if (resize.bottom) {
      // change the height of the box
      let currentHight = thisBox.getBoundingClientRect().bottom;
      let newHeight = currentPos.y - currentHight;
      setSize({
        w: size.w,
        h: size.h + newHeight,
      });
    } else if (resize.top) {
      // change the height of the box
      let currentHight = thisBox.getBoundingClientRect().top;
      let newHeight = Math.abs(currentPos.y - currentHight);
      if (currentPos.y < currentHight) {
        setSize({
          w: size.w,
          h: size.h + newHeight,
        });
      } else {
        setSize({
          w: size.w,
          h: size.h - newHeight,
        })
      }
      setPos({
        x: pos.x,
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
    setDragged(false);
    setResize({
      top: false,
      right: false,
      bottom: false,
      left: false,
    });
  }, [endFocus]);

  const stylized = {
    position: "absolute",
    display: "grid",
    left: pos.x,
    top: pos.y,
    width: size.w + "px",
    minWidth: "30px",
    maxWidth: "100vw",
    height: size.h + "px",
    minHeight: "30px",
    maxHeight: "100vh",
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
        // First lets check if it is close to an edge area on the box, then we rezise.
        let thisBox = document.getElementById(id);
        let leftEdgePos = thisBox.offsetLeft;
        let rightEdgePos = thisBox.offsetLeft + thisBox.offsetWidth;
        let topEdgePos = thisBox.offsetTop;
        let bottomEdgePos = thisBox.offsetTop + thisBox.offsetHeight;

        // depending on the position of the pointer when down, then we resize or more the box.
        if (e.clientX > leftEdgePos && e.clientX < leftEdgePos + 10) {

          setResize({
            ...resize,
            left: true,
          });
        } else if (e.clientX > rightEdgePos - 10 && e.clientX < rightEdgePos) {
          //right

          setResize({
            ...resize,
            right: true,
          });
        } else if (e.clientY > topEdgePos && e.clientY < topEdgePos + 10) {
          //top

          setResize({
            ...resize,
            top: true,
          });
        } else if (
          e.clientY > bottomEdgePos - 10 &&
          e.clientY < bottomEdgePos
        ) {
          //bottom

          setResize({
            ...resize,
            bottom: true,
          });
        } else {
          // move

          setDragged(true);
        }

        if (e.altKey) {
          copy({ ...data, pos: pos, size: size, text: text });
        }

        setOffset({
          x: thisBox?.offsetLeft - e.clientX,
          y: thisBox?.offsetTop - e.clientY,
        });
      }}
      onDoubleClick={() => {
        /* Make the text editable */
        setEditText(true);
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
