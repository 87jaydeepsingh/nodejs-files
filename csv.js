var express = require('express');
var fs = require('fs'); 
var csv = require('csv-parser');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var app     = express();
var file;
var count=1;
app.use(bodyParser.urlencoded({ extended: true })); 
debugger;
app.post('/aaa', function(req, res) {
var form = new formidable.IncomingForm();
form.parse(req, function (err, fields, files) {
file=files.filetoupload.path;
console.log(files.filetoupload.path);
fs.createReadStream(file).pipe(csv())
.on('data', function(data){
    try 
	{
			res.send("Name is: "+data.name);
    }
    catch(err) {
        
    }
})
.on('end',function(){
});  
});
});
app.listen(5000, function() {
  console.log('Server running on port');
});