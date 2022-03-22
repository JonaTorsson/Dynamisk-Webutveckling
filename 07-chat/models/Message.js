/**
 * Message models
 * 
 */
const mongoose = require('mongoose');

// Declare Model schema
const messageSchema = new mongoose.Schema({
    username: String,
    room: String,
    content: {
        type: String,
        trim: true,
    },
    timestamp: {
        type: Number,
        min: 1640995200000, // 2022-01,01T00:00
    },
    users: [String],
});

// Declare Model
const Message = mongoose.model('Message', messageSchema);

// Export model
module.exports = Message;