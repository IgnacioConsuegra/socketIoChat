import express from 'express';
import http from 'http'
import {Server as SocketServer} from 'socket.io';



const PORT = 4000;
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, 
  {
    cors: {
      origin: "http://localhost:5173"
    }
  }
);

io.on('connection', socket => {
  console.log("Client connected.")
}) 

server.listen(PORT, () => console.log("Server on port : ", PORT));


