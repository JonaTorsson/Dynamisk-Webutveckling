const express = require('express');
const router = express.Router();

router.get('/', (reg, res) => {
    res.send('OK! 😃');
});

router.use('/pokemoncards', require('./pokemoncards_route'));
router.use('/pokemonfriends', require('./pokemonbattles_route'));
router.use('/pokemonbattles', require('./pokemonfriends_route'));

module.exports = router;
