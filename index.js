const express = require('express');
const app = express();
const path = require('path');

app.get('/loaderio-loaderio-1b4d6ef49e9ee52ca64da200e025b2bf.html', function(req, res){
res.sendFile(path.join(__dirname, '/index.html'));
});

app.set('view engine', 'pug');
app.use(require('body-parser')
  .urlencoded({extended:true}));

const studentsController = 
  require("./controllers/students-controller");

let students = require("./models/students-model");

studentsController.setup(app, students);

app.listen(8080)
.on('error', function(err) {
  if (err.errno === 'EADDRINUSE')
     console.error("Port 8080 busy (server already started).");
  else 
    throw err;
});
