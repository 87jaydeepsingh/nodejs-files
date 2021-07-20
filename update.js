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
    var sql = " UPDATE customers SET address ='Highway 37' WHERE address='kandivali'";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of rows affected" + result.affectedRows);
    });
});