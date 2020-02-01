const express = require('express');
const alasql = require('alasql');
alasql("CREATE TABLE updb (u STRING, p STRING)");
alasql("CREATE TABLE tokdb (u STRING, token STRING)");
alasql("CREATE TABLE relationvalues (u STRING, n STRING, v1 INT, v2 INT, v3 INT)");

//https://expressjs.com/en/resources/middleware/cors.html
const app = express();
db =[];
app.get('/', (req, res) => {

 res.send("test")
  
});
app.get('/getAllusers', (req, res) => {

a= alasql("select * from updb");
 res.send(a)
  
});
app.get('/user/:u/:p', (req, res) => {
 users= alasql("select * from updb");
for( i = 0; i<users.length;i++)
{
  if(users[i].u == req.params.u&&users[i].p==req.params.p)
  {
    res.send(users[i])  
    break;
  }
}

 res.send(users); 
});

app.get('/insert/user/:u/:p', (req, res) => {

 alasql("INSERT INTO updb VALUES ('"+req.params.u+"','"+req.params.p+"')");
res.send("success")

  
});
/////////////////
app.get('/getAlltokens', (req, res) => {

a= alasql("select * from tokdb");
 res.send(a)
  
});
app.get('/token/:u/:token', (req, res) => {
 users= alasql("select * from tokdb");
for( i = 0; i<users.length;i++)
{
  if(users[i].u == req.params.u&&users[i].token==req.params.token)
  {
    res.send(users[i])  
    break;
  }
}

 res.send("Does not Exist"); 
});
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
app.get('/insert/token/:u', (req, res) => {

 alasql("INSERT INTO tokdb VALUES ('"+req.params.u+"','"+getRandomInt(1000)+"')");
res.send("success")

  
});

///////////////
app.get('/getAllrelations', (req, res) => {

a= alasql("select * from relationvalues");
 res.send(a)
  
});
app.get('/relations/:u', (req, res) => {
 users= alasql("select * from relationvalues");
 r = [];
for( i = 0; i<users.length;i++)
{
  if( users[i].u == req.params.u )
  {
    r.append(users[i]);  
  }
}

 res.send(r); 
});
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
app.get('/insert/r/:u/:n/:token/:v1/:v2/:v3', (req, res) => {

 alasql("INSERT INTO relationvalues VALUES ('"+req.params.u+"','"+req.params.n+"')");
res.send("success")

  
});
app.listen(3000, () => {
  console.log('server started');
});