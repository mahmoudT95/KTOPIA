import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import { useEffect, useState } from "react";
import "./Questions.scss";

const Question = () => {
  // useState To Store Data
  const [questions, setQuestions] = useState([]);
  // Get Questions From DB
  useEffect(() => {
    axios
      .get(`http://localhost:3005/questions`)
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const [correctans, setCorrectans] = useState(false);
  const correctAnswer = () => toast.success("Correct Answer Bravoo 👏!");
  const WrongAnswer = () => toast.error("Wrong Answer 😔!");

  // Func To Handel Choise
  const handelClick = (e) => {
    if (e.currentTarget.classList.contains("correct")) {
      e.currentTarget.classList.add("bg-success", "text-white", "pe-none");
      correctAnswer();
    } else {
      e.currentTarget.classList.add("bg-danger", "text-white", "pe-none");
      WrongAnswer();
    }
  };

  // Tostas
  return (
    <section className="question-wrapper py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="main-heading">Simple Math Question</h1>
            {questions.map((question, i) => {
              return (
                <div key={i} className="single-question text-center mb-4">
                  <h2 className="single-question-heading mb-3">
                    Question {i + 1}
                  </h2>
                  <div className="body mb-2">{question.question}</div>
                  <div className="multi-choise">
                    <span
                      className="choose correct"
                      onClick={handelClick}
                      style={{ order: Math.round(Math.random() * 4) }}
                    >
                      {question.correctAnswer}
                    </span>
                    <span
                      className="choose incorrect"
                      onClick={handelClick}
                      style={{ order: Math.round(Math.random() * 4) }}
                    >
                      {question.incorrectAnswers[0]}
                    </span>
                    <span
                      className="choose incorrect"
                      onClick={handelClick}
                      style={{ order: Math.round(Math.random() * 4) }}
                    >
                      {question.incorrectAnswers[1]}
                    </span>
                    <span
                      className="choose incorrect"
                      onClick={handelClick}
                      style={{ order: Math.round(Math.random() * 4) }}
                    >
                      {question.incorrectAnswers[2]}
                    </span>
                  </div>
                </div>
              );
            })}
            <ToastContainer theme="colored" autoClose={2000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
