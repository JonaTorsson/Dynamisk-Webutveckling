const debug = require('debug');
const express = require('express');
const app = express();

// Logger
//Logger:1
//Logger:2

// controller:pokemon_friends
// controller:pokemon_cards
// models:pokemon_friends

const testLogger = debug('logger');
const testLogger1 = debug('logger:1');
const testLogger2 = debug('logger:2');

testLogger('Detta är min testLogger');
testLogger1('Detta är min testLogger:1');
testLogger2('Detta är min testLogger:2');

const log = debug('log');
log('test');
// log(app);

const person = { namn: 'Martin', email: 'jona@gmail.se'};
log(person);

// %s = sträng
// %d = tal/nummer
// %j = json