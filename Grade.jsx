import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Grade = ({ grade }) => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/quizzes?grade=${grade}`
        );
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [grade]);

  const handleStartClick = (quizId) => {
    navigate(`/g/${grade}/${quizId}`);
  };

  return (
    <div>
      <h2 className="text-center m-5">Quizzes for Grade {grade}</h2>
      <div className="container">
        <div className="row">
          {quizzes.map((quiz) => (
            <div className="col-md-4" key={quiz.quizId}>
              {console.log(quiz.quizId)}
              <div className="card m-3">
                <img src={quiz.image} alt="Quiz" className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">{quiz.heading}</h3>
                  <p className="card-text">{quiz.description}</p>
                  <button
                    onClick={() => handleStartClick(quiz.quizId)}
                    className="btn btn-primary"
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grade;
