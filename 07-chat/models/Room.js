/**
 * 
 * Room model
 */
const mongoose = require('mongoose');

// DEclare model schema
const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
});

// Declare Model
const Room = mongoose.model('Room', roomSchema);

// Export model
module.exports = Room;
