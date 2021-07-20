var mysql = require("mysql")
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});
con.connect(function(err) {

    if (err) throw err;
    console.log("Connected !");
    var sql = "DELETE FROM customers WHERE address ='Highway 37'";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of rows affected" + result.affectedRows);
    });
});