const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const api = require('./routes/api')


// set up express app
const app = express();
//use body parser middleware
//app.use(bodyParser.json());
//initialize routes
app.use(api);
//listen for requests
app.listen(process.env.port || 3000, function(){
  console.log('now listening for requests');
});
 
