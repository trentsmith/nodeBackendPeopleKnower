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

      stmt.run("u","p");
  stmt.finalize();
 
  
});
 
//db.close();
this.db =db;
  res.send('Hello test')

});

app.get('/getAll', (req, res) => {

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