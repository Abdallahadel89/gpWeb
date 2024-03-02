import React from "react";
import { Link } from "react-router-dom";

function q2() {
  return (
    <>
      <div className="progress">
        <div className="progress__fill">
          <div className="progress__text"></div>
        </div>
      </div>
      <div className="container3">
        <h1>Question 2/7</h1>
        <p>
          <span>First of all,</span> <br></br>
          What time do you usually wake up in the morning?
        </p>

        <div className="options-container">
        <Link to="../re">

          <label className="option ">
            
            <i className="fa-solid fa-circle-check check "></i>
            <input 
              type="button"
              onclick="toggleCheck(this)"
              value="Morning person here! Usually around 5-8 AM."
            ></input>
          </label>
          </Link>

          <Link to="../re">

          <label className="option">
            <i className="fa-solid fa-circle-check check "></i>
            <input
              type="button"
              onclick="toggleCheck(this)"
              value="Around 8-10 AM."
            ></input>
          </label>
          </Link>

          <Link to="../re">

          <label className="option">
          <i className="fa-solid fa-circle-check check"></i>
            <input
              type="button"
              onclick="toggleCheck(this)"
              value="Late in the afternoon. No Vitamin D!."
            ></input>
          </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default q2;
