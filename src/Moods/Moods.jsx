import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Moods.module.css";

function Moods() {
  const navigate = useNavigate();

  const onMoodClick = (moodId) => {
    navigate("/moods/" + moodId);
  };

  return (
    <div className={styles.container}>
      <h2 className="h3_mood">How's your mood today?</h2>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className={"mood_cards"}>
              {new Array(12).fill(0).map((m, index) => {
                return (
                  <div
                    key={"mood" + index}
                    className="card"
                    onClick={() => onMoodClick(index)}
                  >
                    Mood {index + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="line_between"></div>
    </div>
  );
}

export default Moods;
