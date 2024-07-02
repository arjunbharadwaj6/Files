const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

router.get('/', async (req, res) => {
    try {
        const grade = req.query.grade;
        const quizzes = await Quiz.find({ grade });
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
