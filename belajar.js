const express = require('express')
let mysql = require('mysql');
let bodyParser = require("body-parser");
let cors = require("cors");
const app = express()
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'kampus'
});

app.use(cors());
app.use(bodyParser.json());
connection.connect();

app.get("/mahasiswa", (req, res) => {
  connection.query("SELECT * FROM mahasiswa", (error, result) => {
    res.send(result);
  })
})

app.listen(3000, () => {
  console.log("BACKEND DIJALANKAN")
})