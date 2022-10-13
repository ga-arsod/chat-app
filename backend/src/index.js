const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin : "*"
    }
});

io.on("connection", (socket) => {
    
    socket.on("chat", (payload) => {
        console.log("What is payload : ", payload);
        io.emit("chat", payload);
    });
});


module.exports = server;