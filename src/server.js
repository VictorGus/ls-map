const express = require('express');
const YAML = require('yaml');
const fs = require('fs');
const app = express();

const Universities = YAML.parse(fs.readFileSync('../resources/test.yaml', 'utf-8'));

app.use(function(req, res, next ){
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.listen(process.env.PORT || 8899, (err, res) => {
  if(err) {
    console.log("Ann error occured during server run", err);
  }
  console.log("Server is running ", process.env.PORT || 8899);
})

app.get('/load-data', (request, response) => {
  response.send(JSON.stringify(Universities));
})
