const express = require('express');
const mongoose = require('mongoose');
const quizzesRouter = require('./routes/quizzes');
const questionsRouter = require('./routes/questions');
const scoresRouter = require('./routes/scores');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb+srv://arjunicse:3mguXRXHKCIglMfG@cluster0.3pp80yw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors({
  origin: "http://localhost:5173",
}))

mongoose.connect(MONGODB_URI, {})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB', error);
});

app.use(express.json());

app.use('/quizzes', quizzesRouter);
app.use('/question', questionsRouter);
app.use('/scores', scoresRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
