import React, { useState, useCallback, useEffect, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

export const ChatZone = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('wss://s8243.lon1.piesocket.com/v3/1?api_key=W0ACEGuUBjDvedXnD8526Fgqs95BpkvlLrDmBDBU');
  const [messageHistory, setMessageHistory] = useState([]);
  const [lastCommand, setLastCommand] = useState([""]);
  let messageInput = useRef(null);

  useEffect(() => {
    // Always keep the #content__display scrolled to the bottom
    const contentDisplay = document.getElementById("content__display");
    contentDisplay.scrollTop = contentDisplay.scrollHeight;
  }, [messageHistory]);

  const loadLastCommand = () => {
    
      messageInput.current.value = lastCommand;
    
  };

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickSendMessage = useCallback(() => {
    if (!messageInput.current.value) return;

    // If we have a message starting with /connect we want to connect to a new socket
    if (messageInput.current.value.startsWith("/connect")) {
      setSocketUrl(messageInput.current.value.split(" ")[1]);
      return;
    }

    let previousCommands = [...lastCommand];
    previousCommands.push(messageInput.current.value);
    setLastCommand(previousCommands);
    sendMessage(messageInput.current.value);
    messageInput.current.value = "";

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div className="chatZone__main">
      <span id="status">Status: {connectionStatus}</span>
      <div className="messageContainer" id="content__display">
        {messageHistory?.map((message, idx) => {
          console.log(message);
          return <span key={idx}>{message ? message.data : null}</span>;
        })}
      </div>
      <div className="inputArea">
        <form
        autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleClickSendMessage();
          }}
        >
          <input autoFocus={true} type="text" name="messageInput" autoComplete="off" ref={messageInput} onKeyUp={(e) => {
            if (e.key === "ArrowUp") {
              loadLastCommand();
            }
          }} />
          <button type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
