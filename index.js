const express = require('express');

const app = express();

app.get('/', (req, res) => {
const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});
 
db.serialize(() => {
  db.each(`create table updb(u varchar(20), p varchar(20));
`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
  res.send('Hello test')
});
 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
});

app.get('/test', (req, res) => {
  res.send('Hello test')
});

app.listen(3000, () => {
  console.log('server started');
});