import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div class="bg-dark text-secondary px-4 py-5 text-center">
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">About Me</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">  After many years of studying Linguistics, I decided I was more interested in the
                Tech
                industry. While pursuing my Associate's Degree in Computer Science, I began working at a E-Learning
                company primarily doing manual software testing. Shortly after graduating, I continued software
                testing,
                this time utilizing automated software testing tools. While I do enjoy writing test scripts, I have
                become more interested in web development and now attend UNH Coding Bootcamp in order to make
                another
                career shift.   </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">LinkedIn</button>
              <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">GitHub</button>
              <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">E-mail</button>
            </div>
          </div>
        </div>
      </div>
    );
}
    
    
  
  export default About;