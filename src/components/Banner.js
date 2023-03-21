import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

function Banner() {
  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">
            Yulia Lavine Portfolio
          </h1>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link
                to="https://www.linkedin.com/in/iuliia-lavine/"
                target="_blank"
              >
                <button
                  type="button"
                  className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                >
                  LinkedIn
                </button>
              </Link>
              <Link to="https://github.com/ilavine" target="_blank">
                <button
                  type="button"
                  className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                >
                  GitHub
                </button>
              </Link>
              <Link to="mailto:yulia.lavine@gmail.com" target="_blank">
                <button
                  type="button"
                  className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                >
                  E-mail
                </button>
              </Link>
              <a href={resume} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                >
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Banner;
