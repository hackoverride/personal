import io from "socket.io-client";

export const socket = io("wss://localhost:8082");

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on("message", (message) => {
  console.log(message);
});

socket.on("newMessage", (message) => {
  console.log(message);
});

socket.on("newLocationMessage", (message) => {
  console.log(message);
});
