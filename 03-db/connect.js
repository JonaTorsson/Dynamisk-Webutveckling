const mysql = require('mysql');

const con = mysql.createConnection( // Tar fram databasen, "skapat en connection"
    {
        host: "localhost", 
        port: "3306",
        user: "root",
        password: "root",
        database: "Pokemon"
    }
);

con.connect((err) => {
    if (err) throw err;

    console.log("Anslutit till databasen!!!");

    let sql = "SELECT id, name, hp FROM PokemonCards";
    sql = sql + " WHERE id = 2"                         // Hämtar bara fram carden med id 2

    con.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        console.log('Publiken vi har ett resultat!!');
        console.log(result); // Visar PokemonCards datan
        result.forEach(r => {
            console.log('Pokemon har namnet ' + r.name + ' med hp till ' + r.hp);
        });
/** 
        for (var i=0; i<result.length; i++) {
            r = result[i];
            console.log('Pokemon har namnet ' + r.name + ' med hp till ' + r.hp);
        }
        */

        con.end(); // Stänger ner anslutningen, behöver inte stänga manuellt med (control + c)
    });
}); //connect är en Assynkron metod, det som är i parantesen är en callbakck

// console.log('ställ fråga til MySQL');