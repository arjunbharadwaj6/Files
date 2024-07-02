const express = require('express');
const router = express.Router();
const Score = require('../models/score');

router.get('/', async (req, res) => {
    try {
        const quizId = req.query.quizId;
        const scores = await Score.find({ quizId });
        res.json(scores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
