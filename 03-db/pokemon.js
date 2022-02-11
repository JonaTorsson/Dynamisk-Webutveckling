const express = require('express');
const app = express();

app.use(express.static('static'));

app.post('/savePokemon', express.urlencoded( {extended: false}), (res, req) => {
    insertPokemonCard(req.body.name, req.body.hp);

    res.end();
});

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});



// ------
// Funktioner
//-----
require('dotenv').config();
const mysql = require('mysql');
function createMysqlConnection() {
    return mysql.createConnection( // Tar fram databasen, "skapat en connection"
    {
        host: process.env.DB_HOST, 
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);
}

function insertPokemonCard(name, hp) {
    const con = createMysqlConnection(); // skapar en connectinon
    con.connect(function(err) { // ansluter
        if (err) throw err;
        console.log('Connected to database!');

        let sql = "INSERT INTO PokemonCards (name, hp) VALUES (?, ?)";
        let data = [name, hp];

        con.query(sql, data, function(err, result){
            if (err) throw err;
            console.log('Pokemon Card created');
            console.log(result);
            con.end();
        });

    });
}