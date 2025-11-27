import React, { useState, useEffect } from "react";
import "./WriteQuiz.css";

export default function WriteQuiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);

  // Load quizzes from localStorage
  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    setQuizzes(storedQuizzes);
  }, []);

  const handleAnswer = (ans) => {
    if (answerSelected) return;
    const correctAnswer = questions[currentQ].answer;
    if (ans.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
      setScore(score + 1);
    }
    setAnswerSelected(true);
  };

  const nextQuestion = () => {
    setAnswerSelected(false);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz.title);
    setQuestions(quiz.questions);
    setCurrentQ(0);
    setScore(0);
    setShowScore(false);
    setAnswerSelected(false);
  };

  const restartQuiz = () => {
    setSelectedQuiz(null);
    setQuestions([]);
    setCurrentQ(0);
    setScore(0);
    setShowScore(false);
    setAnswerSelected(false);
  };

  return (
    <div className="writequiz-page">
      <div className="writequiz-container">
        {!selectedQuiz ? (
          <>
            <h1>📝 Write Quiz</h1>
            <h2>Select a Quiz</h2>
            {quizzes.length === 0 ? (
              <p>No quizzes found. Please create a quiz first.</p>
            ) : (
              <div className="quiz-options">
  {quizzes
    .filter((quiz) => quiz.title && quiz.title.trim() !== "") // only valid quizzes
    .map((quiz, index) => (
      <div
        key={index}
        className="quiz-card"
        onClick={() => startQuiz(quiz)}
        style={{ background: `var(--card-gradient-${index % 5})` }}
      >
        {quiz.title}
      </div>
    ))}
</div>

            )}
          </>
        ) : showScore ? (
          <div className="quiz-start">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <button onClick={restartQuiz}>Back to Quiz Selection</button>
          </div>
        ) : (
          <div className="quiz-question">
            <h2>{questions[currentQ].question}</h2>
            {questions[currentQ].type === "mcq" ? (
              <div className="quiz-options">
                {questions[currentQ].options.map((opt, i) => {
                  const correctAnswer = questions[currentQ].answer;
                  let className = "quiz-card";
                  if (answerSelected) {
                    if (opt === correctAnswer) className += " correct";
                    else if (opt !== correctAnswer && opt === opt) className += " wrong";
                  }
                  return (
                    <div
                      key={i}
                      className={className}
                      onClick={() => handleAnswer(opt)}
                    >
                      {opt}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="quiz-fill">
                <input
                  type="text"
                  placeholder="Type answer here"
                  disabled={answerSelected}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAnswer(e.target.value);
                  }}
                />
                {answerSelected && (
                  <p className="feedback">
                    Correct Answer: {questions[currentQ].answer}
                  </p>
                )}
              </div>
            )}
            {answerSelected && (
              <button className="next-btn" onClick={nextQuestion}>
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
