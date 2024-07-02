import React, { useState, useEffect } from "react";
import "./Question.css";
import { useParams } from "react-router-dom";

function Question() {
  const { grade, quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  useEffect(() => {
    if (!showScore) {
      const intervalId = setInterval(() => {
        setSec((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [showScore]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`http://localhost:3000/question/${quizId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch quiz questions");
      }
      const data = await response.json();
      setQuestions(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      setLoading(false);
    }
  };

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion]?.answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSec(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours > 0 ? String(hours).padStart(2, "0") + ":" : ""}${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!questions.length) {
    return <div>No questions available for this quiz.</div>;
  }

  return (
    <div className="quiz-page">
      <div className="info">
        <p>asdfkjasdfkzhbdhaskbdkh</p>
      </div>
      <div className="quiz">
        {showScore ? (
          <div className="score-section">
            <h2>
              Your Score: {score} out of {questions.length}
            </h2>
            <h2>You took {formatTime(sec)} to solve it</h2>
            <button onClick={resetQuiz}>Restart Quiz</button>
          </div>
        ) : (
          <div className="question">
            <div className="extra-info">
              <p>
                Total Questions: {currentQuestion + 1}/{questions.length}
              </p>
              <p>Time Taken: {formatTime(sec)}</p>
            </div>
            <h2>{questions[currentQuestion]?.question}</h2>
            <ul className="options">
              {questions[currentQuestion]?.options &&
                questions[currentQuestion].options.map(
                  (option, optionIndex) => (
                    <li key={optionIndex}>
                      <button onClick={() => handleAnswerClick(option)}>
                        {option}
                      </button>
                    </li>
                  )
                )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;
