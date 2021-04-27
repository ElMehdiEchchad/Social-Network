const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const connectDB = require('./Models/connection');
const AuthentificationRoutes = require('./Routes/API/Authentification');
const UserRoutes = require('./Routes/API/User');


// set up express app
const app = express();
//use connection to mongodb server
connectDB();
app.use(express.json({ extended: false }));

//Adding CORS 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT, POST , PATCH , DELETE , GET');
    return res.status(200).json({})
  }
  next(); 
}) 
//initialize routes of API
app.use(UserRoutes);
app.use('/api/users/', AuthentificationRoutes);

//listen for requests
app.listen(process.env.port || 3000, function () {
  console.log('now listening for requests');
});

