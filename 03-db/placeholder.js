require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection( // Tar fram databasen, "skapat en connection"
    {
        host: process.env.DB_HOST, 
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

con.connect((err) => {
    if (err) throw err;

    console.log("Anslutit till databasen!!!");

    // con.query(sql, placeholder data, callback);
    /*
    let sql = "INSERT INTO PkemonCards (Name, hp) VALUES (?, ?)";
    let data = ['Talonflame, 130'];
    con.query(sql, data, function(err, result){
        if (err) {
            throw err;
        }
        console.log(result);
    });
    */

    let sql = "INSERT INTO PokemonCards SET ?"; // insert INTO Pokemon SET name = fsdfsfasdas
    let data = {
        name: "Gourgeist",
        hp: 100
    };
    con.query(sql, data, function(err, result) {
        if (err) throw err;
        console.log(result);
    });

}); 