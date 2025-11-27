import React, { useState } from "react";
import "./quiz.css";

export default function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    type: "mcq", // mcq or fill
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });

  // Add question to quiz
  const addQuestion = () => {
    if (!currentQuestion.question.trim()) return;
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      type: "mcq",
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    });
  };

  // Save quiz to localStorage
  const saveQuiz = () => {
    if (!title.trim() || questions.length === 0) {
      alert("Please add a title and at least one question.");
      return;
    }
    const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    quizzes.push({ title, questions });
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
    alert("Quiz saved!");
    setTitle("");
    setQuestions([]);
  };

  return (
    <div className="quiz-container">
      <h1>Create Quiz</h1>
      <input
        className="input-title"
        type="text"
        placeholder="Enter Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="question-box">
        <textarea
          placeholder="Enter Question"
          value={currentQuestion.question}
          onChange={(e) =>
            setCurrentQuestion({ ...currentQuestion, question: e.target.value })
          }
        />

        <select
          value={currentQuestion.type}
          onChange={(e) =>
            setCurrentQuestion({ ...currentQuestion, type: e.target.value })
          }
        >
          <option value="mcq">Multiple Choice</option>
          <option value="fill">Fill in the Blank</option>
        </select>

        {currentQuestion.type === "mcq" ? (
          <div>
            {currentQuestion.options.map((opt, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Option ${i + 1}`}
                value={opt}
                onChange={(e) => {
                  const newOptions = [...currentQuestion.options];
                  newOptions[i] = e.target.value;
                  setCurrentQuestion({
                    ...currentQuestion,
                    options: newOptions,
                  });
                }}
              />
            ))}
            <input
              type="number"
              min="1"
              max="4"
              placeholder="Correct Option (1-4)"
              value={currentQuestion.correctAnswer}
              onChange={(e) =>
                setCurrentQuestion({
                  ...currentQuestion,
                  correctAnswer: e.target.value,
                })
              }
            />
          </div>
        ) : (
          <input
            type="text"
            placeholder="Correct Answer"
            value={currentQuestion.correctAnswer}
            onChange={(e) =>
              setCurrentQuestion({
                ...currentQuestion,
                correctAnswer: e.target.value,
              })
            }
          />
        )}

        <button className="btn" onClick={addQuestion}>
          Add Question
        </button>
      </div>

      <button className="btn save-btn" onClick={saveQuiz}>
        Save Quiz
      </button>

      
      <ul>
        {questions.map((q, idx) => (
          <li key={idx}>{q.question}</li>
        ))}
      </ul>
    </div>
  );
}
