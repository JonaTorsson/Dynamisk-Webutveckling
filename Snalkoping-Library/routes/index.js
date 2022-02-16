const express = require('express');
const router = express.Router();

router.get('/', (reg, res) => {
    res.send('OK! 😃');
});

router.use('/pokemoncards', require('./Authors_route'));


module.exports = router;
