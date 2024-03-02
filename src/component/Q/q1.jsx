import React from "react";
import { Link } from "react-router-dom";

function q1() {
  return (
    <>
      <div className="progress">
        <div className="progress__fill">
          <div className="progress__text"></div>
        </div>
      </div>
      <div className="container3">
        <h1>Question 1/7</h1>
        <p>
          <span>First of all,</span> <br></br>
          How satisfied are you with your current lifestyle
        </p>

        <div className="options-container">
        <Link to="../q2">

          <label className="option ">
            
            <i className="fa-solid fa-circle-check check "></i>
            <input 
              type="button"
              onclick="toggleCheck(this)"
              value="Completely! I am very productive! I’m currently like where I’m at in life."
            ></input>
          </label>
          </Link>

          <Link to="../q2">

          <label className="option">
            <i className="fa-solid fa-circle-check check "></i>
            <input
              type="button"
              onclick="toggleCheck(this)"
              value="Could be better. I’d like to see some improvement."
            ></input>
          </label>
          </Link>

          <Link to="../q2">

          <label className="option">
          <i className="fa-solid fa-circle-check check"></i>
            <input
              type="button"
              onclick="toggleCheck(this)"
              value="Not at all. I’m looking for a major change."
            ></input>
          </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default q1;
