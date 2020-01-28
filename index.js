const express = require('express');

const app = express();
db =[];
app.get('/', (req, res) => {
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run("CREATE TABLE updb (u TEXT, p TEXT)");
   db.run("CREATE TABLE relationvalues (u TEXT, v1 INT, v2,INT, v3 INT)");

  var stmt = db.prepare("INSERT INTO updb (u,p) VALUES (?,?)");

  var stmt = db.prepare("INSERT INTO relationvalues (u,v1,v2,v3) VALUES (?,?,?,?)");
      stmt.run("u",1,1,1);
  stmt.finalize();
 
  
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

app.get('/insert', (req, res) => {

var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');
db.serialize(function() { 
  var stmt = db.prepare("INSERT INTO updb (u,p) VALUES (?,?)");

      stmt.run("u1","p1");
  stmt.finalize();
     res.send('Hello test')

  
});
 

});

app.listen(3000, () => {
  console.log('server started');
});