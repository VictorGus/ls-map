const express = require('express');
const YAML = require('yaml');
const fs = require('fs');
const app = express();
const path = require('path');

var Universities = YAML.parse(fs.readFileSync('./resources/test.yaml', 'utf-8'));

app.use(express.static(path.join(__dirname, '/ui/build')));

function watchCallback(curr, prev) {
  Universities = YAML.parse(fs.readFileSync('./resources/test.yaml', 'utf-8'));
  console.log(Universities);
}

fs.watch('./resources/test.yaml', watchCallback);

app.use(function(req, res, next ){
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/ui/build/index.html'));});

app.listen(process.env.PORT || 8899, (err, res) => {
  if(err) {
    console.log("Ann error occured during server run", err);
  }
  console.log("Server is running ", process.env.PORT || 8899);
})

app.get('/load-data', (request, response) => {
  response.send(JSON.stringify(Universities));
})
