import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {});
});

io.listen(5000);
