import { io } from "socket.io-client";
const socketInitialize = () => {
  const socket = io("");
  return socket;
};

export default socketInitialize;
