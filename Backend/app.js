const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const connectDB =  require ('./DB/connection');


// set up express app
const app = express();
//use connection to mongodb server
connectDB();
app.use(express.json({extended:false}));
//initialize routes of API
app.use(require('./API/User'))

//listen for requests
app.listen(process.env.port || 3000, function(){
  console.log('now listening for requests');
});
 
