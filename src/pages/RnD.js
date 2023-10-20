import React, { useRef, useEffect, useState } from "react";
import consoleFunction from "../documents/helper";

function RnD({ praetorian }) {
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [currentTypedMessage, setCurrentTypedMessage] = useState("");
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);

  const typingSpeed = 50; // Speed at which characters appear, in milliseconds

  useEffect(() => {
    if (currentTypeIndex < currentTypedMessage.length) {
      setTimeout(() => {
        setCurrentTypeIndex(currentTypeIndex + 1);
      }, typingSpeed);
    }
  }, [currentTypedMessage, currentTypeIndex]);

  useEffect(() => {
    // This function is what gets called when the keydown event occurs
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && inputRef.current) {
        const command = inputRef.current.value;

        if (command) {
          handleCommand(command);
        }
        inputRef.current.value = ""; // Clear the input after processing
        inputRef.current.focus();
      }
    };

    // Add the event listener
    document.addEventListener("keydown", handleKeyDown);

    // Return a cleanup function to remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // Empty dependency array ensures the effect runs once when the component mounts and cleans up when it unmounts
  }, []);

  setTimeout(() => {
    if (inputRef.current) {
      // make sure that the focus is not already on the input
      if (document.activeElement !== inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, 500);

  const handleCommand = (command) => {
    if (command === "clear") {
      setMessages([]);
    } else {
      let temp = consoleFunction(command);
      if (temp) {
        setCurrentTypeIndex(0);
        setCurrentTypedMessage(temp);
      }
    }
  };

  return (
    <div className={"overlay--container"}>
      {/* Add your RnD component code here */}
      <h2 className={"container--title"}>R n D</h2>
      <div
        className="container--content"
        style={
          praetorian
            ? {
                background: "rgba(0, 0, 0, 0.5)",
                color: "rgba(0, 255, 0 , 1)",
                fontFamily: "'courier new', monospace",
                fontSize: "1.5rem",
                border: "1px solid #8f8",
              }
            : {}
        }
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            height: "100%",
            width: "100%",
            overflow: "auto",
            border: "1px solid #888",
            padding: "10px",
            paddingBottom: "60px",
          }}
        >
          <div
            id={"terminal-typing"}
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            {currentTypedMessage}
          </div>
          {messages.map((message, pos) => {
            return (
              <div
                key={pos}
                style={{
                  whiteSpace: "pre-wrap",
                }}
              >
                {message}
              </div>
            );
          })}
        </div>
        <input
          type="text"
          ref={inputRef}
          className={"terminal-input"}
          style={
            praetorian
              ? {
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "rgba(0, 255, 0 , 1)",
                  fontFamily: "'courier new', monospace",
                  fontSize: "1.5rem",
                }
              : {}
          }
        />
      </div>
    </div>
  );
}

export default RnD;
