const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./Models/connection");
const AuthentificationRoutes = require("./Routes/API/Authentification");
const UserRoutes = require("./Routes/API/User");
var cookieParser = require("cookie-parser");
const chatRoutes = require('./Routes/API/Chat')
const socketIo = require('socket.io')
const cors = require('cors')

// set up express app
const app = express();
app.use(cookieParser());
//use connection to mongodb server
connectDB();
app.use(express.json({ extended: false }));

//Adding CORS
//app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "PUT, POST , PATCH , DELETE , GET"
        );
        return res.status(200).json({});
    }
    next();
});
//initialize routes of API
app.use("/api/", AuthentificationRoutes);
app.use(UserRoutes);
app.use(chatRoutes)

//listen for requests
const server = app.listen(process.env.port || 5000, function () {
    console.log("now listening for requests");
});




//configuration of socket.io
const io = socketIo(server, {
    cors: {
      origin: '*',
    }
  });
io.on('connection', socket => {

    const id = socket.handshake.query.id
    socket.join(id)

    socket.on('send-message', ({ recipient, message }) => {
        console.log("sendMessage")
        console.log(recipient)
        console.log(id)
        console.log(message)

        socket.broadcast.to(recipient).emit(
            'receive-message',
            {
                recipient: recipient, sender: id, message
            }
        )
    })

    // // disconnect is fired when a client leaves the server
    // socket.on("disconnect", () => {
    //     console.log("user disconnected");
    // });
});
