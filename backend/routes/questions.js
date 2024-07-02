const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/:quizId', async (req, res) => {
    const { quizId } = req.params;
    try {
        const quizQuestions = await Question.find({ quizId });
        res.json(quizQuestions);
    } catch (err) {
        console.error('Error fetching questions:', err);
        res.status(500).json({ message: 'Failed to fetch questions' });
    }
});

module.exports = router;
