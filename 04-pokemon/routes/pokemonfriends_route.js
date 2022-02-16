const express = require('express');
const router = express.Router();
const pokemonfriends_controller = require('../controllers/pokemonfriends_controller')

// Implementera GET / READ -  Alla pokemonkort
// curl -X GET http://localhost:3000/pokemoncards/
router.get('/', pokemonfriends_controller.read);

// Implementera GET / READ -  Ett pokemonkort
// curl -X GET http://localhost:3000/pokemoncards/1234
router.get('/:id', pokemonfriends_controller.read);

// Implementera POST / CREATE - Skapa ett pokemonkort
// curl -X POST http://localhost:3000/pokemoncards/1234
router.post('/', pokemonfriends_controller.create);

// Implementera PUT / UPDATE - Uppdatera ett pokemonkort
// curl -X PUT http://localhost:3000/pokemoncards/1234
router.put('/:id', pokemonfriends_controller.update);

// Implementera DELETE / DELETE (DESTROY) - Radera ett pokemonkort
// curl -X DELETE http://localhost:3000/pokemoncards/1234
router.delete('/:id', pokemonfriends_controller.remove);

// Implementera addCard
// curl -X POST http://localhost:3000/pokemonfriends/addCard -H 'Content-Type: application/json' -d '{"card" : 21, "friend" : 2}'
router.post('/:id/addCard', pokemonfriends_controller.addCard);

module.exports = router;