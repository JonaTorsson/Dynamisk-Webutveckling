require('dotenv').config();
const mysql = require('mysql');

const knex = require('knex');
const connection = knex({
    client: 'mysql',        // nu vet den att den ska prata med mysql
    connection: {
        host: process.env.DB_HOST, 
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

/*
connection.select().table('PokemonCards').then((result) =>{
    console.log(result);
    result.forEach(r => {
        console.log('Pokemon har namnet ' + r.name + ' med hp till ' + r.hp);
    })
});
*/

/*
connection.select('id', 'name', 'hp').table('PokemonCards').then((result) =>{ // SELECT id, namE FROM POKEMONCARDS
    console.log(result);
});
*/
/*
// SELECT id, namE FROM POKEMONCARDS WHERE id = 2 OR id = 4
connection.select('id', 'name', 'hp').where({id: 2}).orWhere({id: 4}).table('PokemonCards').then((result) =>{ // SELECT id, namE FROM POKEMONCARDS
    console.log(result);
});
*/

/*
// SELECT id, namE FROM POKEMONCARDS WHERE id IN (2, 3, 5)
connection.select('id', 'name', 'hp').whereIn('id', [2, 3, 5]).table('PokemonCards').then((result) =>{
    console.log(result);
});
*/

/*
// SELECT * FROM PokemonCards WHERE id = 1
connection('PokemonCards').where('id', 1).select().then((result) => {
    console.log(result);
});
*/

connection ('PokemonCards').insert({name: 'Nodemon', hp: 165}).finally((result) =>{
    console.log(result);
    
});


// const knex = require('knex)();


// Fulhack för att slippa trycka ctrl-c
const s = 1;
setTimeout(() => { process.exit(0); }, 
s*1000
); 