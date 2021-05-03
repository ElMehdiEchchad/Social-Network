const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const connectDB = require("./Models/connection");
const AuthentificationRoutes = require("./Routes/API/Authentification");
const UserRoutes = require("./Routes/API/User");
var cookieParser = require("cookie-parser");

// set up express app
const app = express();
app.use(cookieParser());
//use connection to mongodb server
connectDB();
app.use(express.json({ extended: false }));

//Adding CORS
app.use((req, res, next) => {
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
app.use(UserRoutes);
app.use("/api/", AuthentificationRoutes);

//listen for requests
app.listen(process.env.port || 5000, function () {
    console.log("now listening for requests");
});

// const io = socketIo(app);
// io.on("connection", socket => {
//   //  console.log("New client connected" + socket.id);
//   //console.log(socket);
//   // Returning the initial data of food menu from FoodItems collection
//   socket.on("initial_data", () => {
//     collection_foodItems.find({}).then(docs => {
//       io.sockets.emit("get_data", docs);
//     });
//   });
//   // Placing the order, gets called from /src/main/PlaceOrder.js of Frontend
//   socket.on("putOrder", order => {
//     collection_foodItems
//       .update({ _id: order._id }, { $inc: { ordQty: order.order } })
//       .then(updatedDoc => {
//         // Emitting event to update the Kitchen opened across the devices with the realtime order values
//         io.sockets.emit("change_data");
//       });
//   });
//   // Order completion, gets called from /src/main/Kitchen.js
//   socket.on("mark_done", id => {
//     collection_foodItems
//       .update({ _id: id }, { $inc: { ordQty: -1, prodQty: 1 } })
//       .then(updatedDoc => {
//         //Updating the different Kitchen area with the current Status.
//         io.sockets.emit("change_data");
//       });
//   });

//   // Functionality to change the predicted quantity value, called from /src/main/UpdatePredicted.js
//   socket.on("ChangePred", predicted_data => {
//     collection_foodItems
//       .update(
//         { _id: predicted_data._id },
//         { $set: { predQty: predicted_data.predQty } }
//       )
//       .then(updatedDoc => {
//         // Socket event to update the Predicted quantity across the Kitchen
//         io.sockets.emit("change_data");
//       });
//   });

//   // disconnect is fired when a client leaves the server
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });
