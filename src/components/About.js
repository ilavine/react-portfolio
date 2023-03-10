import React from "react";


function About() {
  return (
    <>
      <div class="bg-dark text-secondary px-4 py-5 text-center">
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">About Me</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">
              {" "}
              After many years of studying Linguistics, I decided I was more
              interested in the Tech industry. While pursuing my Associate's
              Degree in Computer Science, I began working at a E-Learning
              company primarily doing manual software testing. Shortly after
              graduating, I continued software testing, this time utilizing
              automated software testing tools. While I do enjoy writing test
              scripts, I have become more interested in web development and now
              attend UNH Coding Bootcamp in order to make another career shift.{" "}
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                LinkedIn
              </button>
              <button
                type="button"
                class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                GitHub
              </button>
              <button
                type="button"
                class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                E-mail
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="col">
            <div class="card shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div class="card-body">
                <p class="card-text">
                  <h3> Project 1</h3>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View Repo
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View App
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
