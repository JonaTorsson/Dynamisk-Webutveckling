const express = require('express');
const router = express.Router();
const authors_controller = require('../controllers/authors_controller');

// Implementera GET / READ -  Alla pokemonkort
// curl -X GET http://localhost:3000/pokemoncards/
router.get('/', authors_controller.read);

// Implementera GET / READ -  Ett pokemonkort
// curl -X GET http://localhost:3000/pokemoncards/1234
router.get('/:id', authors_controller.read);

// Implementera POST / CREATE - Skapa ett pokemonkort
// curl -X POST http://localhost:3000/pokemoncards/ -H 'Content-Type: application/json' -d '{"name" : "Bobba Fett", "hp" : 145}'
router.post('/', authors_controller.create);
    

// Implementera PUT / UPDATE - Uppdatera ett pokemonkort
// curl -X PUT http://localhost:3000/pokemoncards/ -H 'Content-Type: application/json' -d '{"name" : "Bobba Fett", "hp" : 145}'
router.put('/:id', authors_controller.update);

// Implementera DELETE / DELETE (DESTROY) - Radera ett pokemonkort
// curl -X DELETE http://localhost:3000/pokemoncards/20
router.delete('/:id', authors_controller.remove);

module.exports = router;