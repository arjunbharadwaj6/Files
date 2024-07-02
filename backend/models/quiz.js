const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    image: String,
    heading: String,
    description: String,
    grade: String,
    quizId: String
});

module.exports = mongoose.model('Quiz', quizSchema);
