// here will be Redux store...

import { io } from "socket.io-client";

const makeShit = () => {

    const socket = io("http://localhost:4000/");

    socket.emit("start", () => {});

    socket.on("disconnect", () => {  socket.connect();  });

    socket.on("ticker", function(data) {
      console.log(data[0]);
    });

  }

export default makeShit;
