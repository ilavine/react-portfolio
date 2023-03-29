import React from "react";
import "./About.css";
import headshot from "../../assets/headshot.jpeg";

function About() {
  return (
    <div className="bg-light text-secondary px-4 py-5 text-center">
    
      <div className="py-5 row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <p className="fs-4 mb-2">
          <h1 className="display-5 fw-bold text-blue">About Me</h1>
            After many years of studying Linguistics, I decided I was more interested in the Tech industry. While pursuing my Associate's Degree in Computer Science, I began working at a E-Learning company primarily doing manual software testing. Shortly after graduating, I continued software testing, this time utilizing automated software testing tools. While I do enjoy writing test scripts, I have become more interested in web development and now attend UNH Coding Bootcamp in order to make another career shift.
          </p>
        </div>
        <div className="col-lg-4 order-lg-1">
          <img id="profileImg" className="img-fluid rounded-circle mb-6" src={headshot} alt="headshot" />
        </div>
      </div>
      
    </div>
  );
}

export default About;

