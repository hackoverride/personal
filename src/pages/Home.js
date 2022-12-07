import React, { useState, useRef } from "react";
import { aiLogic } from "../service/magic";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const textInputRef = useRef(null);

  const handleTextLogic = async (input) => {
    let inputTextArray = input.split(" ");
    console.log(inputTextArray);
    let command = inputTextArray[0].substring(1);

    let argValue = input.substring(inputTextArray[0].length + 1);
    aiLogic(command, messages, setMessages, argValue);
  };

  //
  return (
    <div className="main__content">
      <canvas id="canvas"></canvas>
      <div id="content__display">
        {messages?.length > 0 ? (
          messages.map((message) => {
            return <span key={message.id}>{message.text}</span>;
          })
        ) : (
          <>No messages</>
        )}
      </div>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          let id = messages.length + 1;
          let text = textInputRef.current.value;
          if (text === "") return;
          if (text.charAt(0) === "/") {
            handleTextLogic(text);
          } else {
            setMessages([{ id: id, text: text }, ...messages]);
          }

          textInputRef.current.value = "";
          textInputRef.autoFocus = true;
          // make sure the scroll is always at the bottom when adding text.
          let contentDisplay = document.getElementById("content__display");
          contentDisplay.scrollTop =
            contentDisplay.scrollHeight - contentDisplay.clientHeight;
        }}
      >
        <input
          ref={textInputRef}
          type="text"
          autoComplete="off"
          id="magic"
          autoFocus
          name="magic"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
