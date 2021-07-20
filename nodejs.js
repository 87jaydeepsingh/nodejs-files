var express    = require("express");
 var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'attitude',
   database : 'mydb'
 });
 var app = express();
 connection.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
 });
 app.get("/abc",function(req,res){
 connection.query('SELECT * from monday', function(err, rows, fields) {
	 res.setHeader('Access-Control-Allow-Origin', '*');
     res.send(JSON.stringify(rows));
   });
 });
app.listen(4002);
