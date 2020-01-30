const express = require('express');
const alasql = require('alasql');
 alasql("CREATE TABLE test (language INT, hello STRING)");
//notice look into using cors and disabling it for the time being.
//https://expressjs.com/en/resources/middleware/cors.html
const app = express();
db =[];
app.get('/', (req, res) => {
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {

 alasql("INSERT INTO test VALUES (1,'Hello!')");
 alasql("INSERT INTO test VALUES (2,'Aloha!')");
 alasql("INSERT INTO test VALUES (3,'Bonjour!')");
  console.log( alasql("SELECT * FROM test WHERE language > 0") );
  db.run("CREATE TABLE updb (u TEXT, p TEXT)");
  db.run("CREATE TABLE tokdb (u TEXT, token TEXT)");
  db.run("CREATE TABLE relationvalues (u TEXT, v1 INT, v2 INT, v3 INT)");

  var stmt = db.prepare("INSERT INTO updb (u,p) VALUES (?,?)");
      stmt.run("u","p");
  var stmt = db.prepare("INSERT INTO relationvalues (u,v1,v2,v3) VALUES (?,?,?,?)");
      stmt.run("u",1,1,1);
  stmt.finalize();
 
  
});
app.get('/getpass/:u/:p', (req, res) => {

    res.send('Hello test');
    var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
 db.serialize(function() {

    db.each("SELECT * FROM updb where u = "+req.params.u+" and p = "+req.params.p, function(err, row) {
     if(req.params.u==row.u&&req.params.p==row.p)
     {
        console.log(row.u + ": " + row.p);
     }
  });
});

});
app.get('/getuser/:u/:token', (req, res) => {

    res.send('Hello test'+req.params.id);
    var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
 db.serialize(function() {

    db.each("SELECT * FROM tokdb where u = "+req.params.u+" and p = "+req.params.token, function(err, row) {
     if(req.params.u==row.u&&req.params.token==row.token)
     {
        console.log(row.u + ": " + row.token);
     }
  });
});

});
//db.close();
this.db =db;
  res.send('Hello test')

});

app.get('/getAllrelations', (req, res) => {

var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
 db.serialize(function() {
 db.each("SELECT u,v1,v2,v3 FROM relationvalues", function(err, row) {
     console.log(row.u + ": " + row.v1.toString());
  });
    res.send('Hello test')

});

});


app.get('/getAllusers', (req, res) => {

var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
 db.serialize(function() {
 db.each("SELECT u,p FROM updb", function(err, row) {
     console.log(row.p + ": " + row.u);
  });
    res.send('Hello test')

});

});

app.get('/insertuser/:u/:p', (req, res) => {

var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
db.serialize(function() { 
  var stmt = db.prepare("INSERT INTO updb (u,p) VALUES (?,?)");

      stmt.run(req.params.u,req.params.p);
  stmt.finalize();
     res.send('Hello test')

  
});
 

});

app.get('/insertuser/:u/:p', (req, res) => {

var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
db.serialize(function() { 
  var stmt = db.prepare("INSERT INTO updb (u,p) VALUES (?,?)");

      stmt.run(req.params.u,req.params.p);
  stmt.finalize();
     res.send('Hello test')

  
});
 

});

app.get('/insertrelation/:u/:v1/:v2/:v3', (req, res) => {

var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
db.serialize(function() { 
  var stmt = db.prepare("INSERT INTO updb (u,v1,v2,v3) VALUES (?,?,?,?)");

      stmt.run(req.params.u,req.params.v1,req.params.v2,req.params.v3);
  stmt.finalize();
     res.send('Hello test')

  
});
 

});

app.listen(3000, () => {
  console.log('server started');
});