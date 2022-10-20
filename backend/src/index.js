const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin : "*"
    }
});

io.use((socket, next) => {
    const username = socket.handshake.auth.username;

    if(!username) {
        return next(new Error("Invalid Username"));
    };

    socket.username = username;
    next();
})

io.on("connection", (socket) => {
    //fetch existing users
    const users = [];
    for(let [id, socket] of io.of("/").sockets) {
        users.push({
            userID : id,
            username : socket.username
        });
    };

    socket.emit("users", users);

    //notifying existing users
    socket.broadcast.emit("user connected", {
        userID: socket.id,
        username: socket.username,
    });

    // forward the private message to right recipent
    socket.on("private message", ({content, to}) => {
        socket.to(to).emit("private message", {
            content,
            from: socket.id,
        });
    });
    
    // notify users upon disconnection
    socket.on("disconnect", () => {
        socket.broadcast.emit("user disconnected", socket.id);
    });
});


module.exports = server;