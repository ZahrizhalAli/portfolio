import React from "react";
import Footer from "../footer/Footer";
import Projects from "../projects/Projects";
function Home() {
  return (
    <>
      <div className="content-wrap">
        <div className="pt-160 home ">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <h1
                  className="mb-60"
                  data-show-duration="500"
                  data-show-distance="20"
                >
                  Zahrizhal's Working Space ✌️
                </h1>
                <a
                  href="contact-1.html"
                  className="btn btn-dark btn-with-ball show-on-scroll"
                  data-show-delay="60"
                  data-show-duration="500"
                  data-show-distance="20"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="shape mt-n160">
            <svg
              data-rellax-speed="-1"
              width="518"
              height="641"
              viewBox="0 0 518 641"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="187.5" cy="360.5" r="180.5" fill="#F5F5F5" />
            </svg>
          </div>
        </div>{" "}
        <div className="mt-30 text-center projects-title">
          <h2>Some Cool Projects</h2>
        </div>
        <Projects />
        <div className="container text-center home isotope">
          <div className="py-160 mt-n10 text-center">
            <h3 className="mb-60">
              Do you have a project?
              <br />
              Send us a message and let's connect 👋
            </h3>
            <a
              href="contact-1.html"
              className="btn btn-dark btn-with-ball mt-n10"
            >
              let’s work
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
