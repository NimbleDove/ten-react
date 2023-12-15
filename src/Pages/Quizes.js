import React, { useState, useRef, useEffect } from "react";
import { quiz } from "../Questions";
import Cross from "./assets/cross.png";
import Menu from "./assets/menu.png";

import "../Quiz.css";

const Quizes = () => {
  const [isActive, setIsActive] = useState(false);
  const goHome = () => {
    window.location.href = "/";
  };
  const handleClick = (event) => {
    //  toggle isActive state on click
    setIsActive((current) => !current);
  };
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer, perQuestionScore, type, imgSrc } =
    questions[activeQuestion];

    
const onClickNext = () => {
  if (type === "MPQ") {
    setResult((prev) =>
      selectedAnswer
        ? {}
        : { ...prev, score: prev.score + selectedAnswerIndex + 1 }
    );
  } else {
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + perQuestionScore,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (!selectedAnswer) {
      setSelectedAnswerIndex(selectedAnswerIndex);

      const isCorrect = selectedAnswer === correctAnswer;
      setWrongAnswers([
        ...wrongAnswers,
        {
          question: questions[activeQuestion].question,
          selectedAnswer: isCorrect ? "Correct" : selectedAnswer,
        },
      ]);
    }
    setSelectedAnswerIndex(null);
  }

  if (activeQuestion !== questions.length - 1) {
    setActiveQuestion((prev) => prev + 1);
  } else {
    setActiveQuestion(0);
    setShowResult(true);
  }
};

const onAnswerSelected = (answer, index) => {
  setSelectedAnswerIndex(index);
  if (answer === correctAnswer) {
    setSelectedAnswer(true);
  } else {
    setSelectedAnswer(false);
  }
};


    
    

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  // __________TIMER_________

  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:00:00");
  const [total, setTotal] = useState(false);
  const [red, setRed] = useState(false);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      setTotal(true);
    }

    if (seconds <= 5) {
      setRed(true);
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:01:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);


  return (
    <div className="body">
      <nav>
        <h1 className="title"> Trigonometri Test</h1>
        <div id="menu">
          <div id="menu-bar" onClick={handleClick}>
            <img src={isActive ? Cross : Menu} className="menu-img" alt="" />
          </div>
          <div className={`nav ${isActive ? "change" : ""}`} id="nav">
            <ul>
              <li>
                <a onClick={goHome} href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`menu-bg ${isActive ? "change-bg" : ""}`}
          id="menu-bg"
        ></div>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </nav>

      <div className="quiz">
        <div className="quiz-container">
          {!(showResult || total) ? (
            <div>
              <div>
                <span className="active-question-no">
                  {addLeadingZero(activeQuestion + 1)}
                </span>
                <span className="total-question">
                  /{addLeadingZero(questions.length)}
                </span>
              </div>

              <div className={`${red ? "timer_red" : "timer"}`}>
                <h2>{timer}</h2>
              </div>

              <h2>{question}</h2>
              <div className="img">
                <img src={imgSrc} alt="" className="questionimg" />
              </div>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    style={{ color: answer }}
                    className={
                      selectedAnswerIndex === index ? "selected-answer" : null
                    }
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flex-right">
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          ) : (
            <div className="result">
              <h3>Result</h3>
              <p>
                Total Question: <span>{questions.length}</span>
              </p>
              <p>
                Total Score:<span> {result.score}</span>
              </p>
              <p>
                Correct Answers:<span> {result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers:<span> {result.wrongAnswers}</span>
              </p>
              <button>See wrong questions list</button>

              {wrongAnswers.length > 0 && (
              <div>
                <h3>Wrong Answers</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Your Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wrongAnswers.map((answer, index) => (
                      <tr key={index}>
                        <td>{answer.question}</td>
                        <td>{answer.selectedAnswer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
             
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quizes;
