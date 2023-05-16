import React from "react";
import Footer from "../footer/Footer";
import MlProjects from "../projects/MlProjects";
import WebProjects from "../projects/WebProjects";
import Blog from "../blogs/Blog"
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
                <h5 class="pb-5">AI/ML Engineer | Software Engineer | Tech Community Player</h5>
                <a
                  href="https://www.linkedin.com/in/zahrizhal-ali/"
                  className="btn btn-dark btn-with-ball"
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
        <hr class="mt-160 pb-8"></hr>
        <div className="row text-center mt-50">
        <div class="col-md-3 col-sm">
                                    <div class="number-box">
                                        <div class="number-box-title h1">106</div>
                                        <div class="number-box-subtitle">projects</div>
                                    </div>
        </div>
        <div class="col-md-3 col-sm">
                                    <div class="number-box">
                                        <div class="number-box-title h1">87</div>
                                        <div class="number-box-subtitle">Cup of Coffee</div>
                                    </div>
        </div>
        <div class="col-md-3 col-sm">
                                    <div class="number-box">
                                        <div class="number-box-title h1">3+</div>
                                        <div class="number-box-subtitle">Years</div>
                                    </div>
        </div>
        <div class="col-md-3 col-sm">
                                    <div class="number-box">
                                        <div class="number-box-title h1">9</div>
                                        <div class="number-box-subtitle">Awards</div>
                                    </div>
        </div>
        </div>
        <hr class="pb-8"></hr>
        
        <MlProjects />
        <WebProjects />
        <Blog/>

        <div className="container text-center home isotope">
          <div className="py-160 mt-n10 text-center">
            <h3 className="mb-60">
              Feel free to contact me
              <br />
              to discuss more about data science, ml, web (or cats) 👋
            </h3>
            <a
              href="mailto:zzahrizhal.ali@gmail.com"
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
