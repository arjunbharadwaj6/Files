const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    quizId: {
        type: String,
        required: true,
    }
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
