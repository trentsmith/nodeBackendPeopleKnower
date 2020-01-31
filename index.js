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
 res.send("test")
  
});
app.get('/getAllusers', (req, res) => {

 // alasql("INSERT INTO updb VALUES (u,p)");
 // alasql("INSERT INTO relationvalues VALUES (u,1,2,3)");
a= alasql("select * from updb");
 res.send(a[0].u)
  
});
app.get('/user/:u/:p', (req, res) => {

 // alasql("INSERT INTO updb VALUES (u,p)");
 // alasql("INSERT INTO relationvalues VALUES (u,1,2,3)");
 //alasql("select * ");
 users= alasql("select * from updb");
for( i = 0; i<users.length;i++)
{
  if(users[i].u == req.params.u&&users[i].p==req.params.p)
  {
    res.send(users[i])  
    break;
  }
}

  
});

app.get('/insert/user/:u/:p', (req, res) => {

 // alasql("INSERT INTO updb VALUES (u,p)");
 // alasql("INSERT INTO relationvalues VALUES (u,1,2,3)");
 //alasql("select * ");
 alasql("INSERT INTO updb VALUES ('"+req.params.u+"','"+req.params.p+"')");
resp.send("success")

  
});
app.listen(3000, () => {
  console.log('server started');
});