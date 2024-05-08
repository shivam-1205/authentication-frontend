import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Questionnaire() {
  const [mood, setMood] = useState("");
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [disablePrevBtn, setDisabPrevBtn] = useState(true);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  const [questions, setQuestions] = useState([
    {
      questionName: "I frequently bring work home at night",
      option1: "Yes",
      option2: "No",
    },
    {
      questionName:
        "Not enough hours in the day to do all the things that I must do",
      option1: "Yes",
      option2: "No",
    },
    {
      questionName:
        "I deny or ignore problems in the hope that they will go away",
      option1: "Yes",
      option2: "No",
    },
    {
      questionName: "I underestimate how long it takes to do things",
      option1: "Yes",
      option2: "No",
    },
    {
      questionName:
        "I feel that there are too many deadlines in my work / life that are difficult to meet",
      option1: "Yes",
      option2: "No",
    },
  ]);

  const params = useParams();

  useEffect(() => {
    setMood(params.moodId);
  }, []);

  const onNextClick = () => {
    setActiveQuestionIndex((currentIndex) => {
      const nextIndex =
        currentIndex < questions.length - 1
          ? currentIndex + 1
          : questions.length - 1;
      if (nextIndex > 0 && currentIndex === 0) {
        setDisabPrevBtn(false);
      }
      if (nextIndex === questions.length - 1) {
        setDisableNextBtn(true);
      }
      return nextIndex;
    });
  };

  const onPrevClick = () => {
    setActiveQuestionIndex((currentIndex) => {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      if (prevIndex === 0) {
        setDisabPrevBtn(true);
      }
      if (prevIndex < questions.length - 1) {
        setDisableNextBtn(false);
      }
      return prevIndex;
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>{mood}</h2>
          <div className="list-group p-4 card">
            {questions.map((q, index) => {
              return (
                <a
                  href="#"
                  className={`list-group-item list-group-item-action ${
                    index === activeQuestionIndex ? "active" : ""
                  }`}
                  aria-current="true"
                  onClick={() => {
                    setActiveQuestionIndex(index);
                  }}
                >
                  {q.questionName}
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="modal mt-5 card"
            tabindex="-1"
            style={{
              display: "block",
              position: "relative",
              height: "auto",
            }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Question</h5>
                </div>
                <div className="modal-body">
                  <p>{questions[activeQuestionIndex].questionName}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    {questions[activeQuestionIndex].option2}
                  </button>
                  <button type="button" className="btn btn-success">
                    {questions[activeQuestionIndex].option1}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-2 d-flex flex-row justify-content-evenly">
            <button
              className="btn btn-secondary"
              onClick={onPrevClick}
              disabled={disablePrevBtn}
            >
              Previous
            </button>
            <button
              className="btn btn-secondary"
              onClick={onNextClick}
              disabled={disableNextBtn}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
