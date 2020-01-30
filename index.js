const express = require('express');
const alasql = require('alasql');
 //alasql("CREATE TABLE test (language INT, hello STRING)");
   alasql("CREATE TABLE updb (u STRING, p STRING)");

  alasql("CREATE TABLE tokdb (u STRING, token STRING)");
 alasql("CREATE TABLE relationvalues (u STRING, v1 INT, v2 INT, v3 INT)");
//notice look into using cors and disabling it for the time being.
//https://expressjs.com/en/resources/middleware/cors.html
const app = express();
db =[];
app.get('/', (req, res) => {

 // alasql("INSERT INTO updb VALUES (u,p)");
 // alasql("INSERT INTO relationvalues VALUES (u,1,2,3)");
 alasql("INSERT INTO updb VALUES ('u','p')");
 res.send("test")
  
});
app.listen(3000, () => {
  console.log('server started');
});