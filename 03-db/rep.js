const mysql = require('mysql');

const setting = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "Repetition"
};

const con = mysql.createConnection(setting);

con.connect((err) => {
    if(err) {
        throw err;
    }
console.log('Nu är vi anslutna till databasen!!');

let sql = "SELECT id, make, type FROM Vehicles";

con.query(sql, (err, result) => {


    con.end();
});

});

console.log('slutet!!');