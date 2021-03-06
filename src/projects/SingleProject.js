import React from 'react';
import img1 from '../images/cat-pedigree/1.png';
import img2 from '../images/cat-pedigree/2.png';
import img3 from '../images/cat-pedigree/3.png';
function SingleProject() {
  return (
    <>
      <div className="container mt-10">
        <div className="pt-160 mt-n30 pb-130 mb-n10">
          <div className="row gh-1">
            <div className="d-none d-xl-block col-1"></div>
            <div
              className="col-12 col-lg-5 col-xl-4 me-lg-auto me-xl-0 "
              data-show-duration="500"
              data-show-distance="10"
            >
              <h1 className="mb-100 mb-lg-0 pb-8 pb-lg-0">Cat Pedigree</h1>
            </div>
            <div
              className="col-12 col-lg-6 col-xl ms-xl-n30 show-on-scroll"
              data-show-duration="500"
              data-show-distance="10"
              data-show-delay="100"
            >
              <p className="lead mb-0">
                I like cats, so made the app for the cats. I Created Machine
                Learning model to classify cat breeds using image input from
                Mobile Apps.
              </p>
              <hr />
              <div className="row gh-3 gv-1">
                <div className="col-12 col-sm-6 col-lg-auto">
                  <ul className="list-group list-group-gap borderless">
                    <li className="list-group-item">
                      <span className="fw-medium me-8">Date:</span> June 14,
                      2022
                    </li>
                    <li className="list-group-item">
                      <span className="fw-medium me-8">Category:</span> Animal
                      Welfare
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-lg-auto">
                  <ul className="list-group list-group-gap borderless">
                    <li className="list-group-item">
                      <span className="fw-medium me-8">Type:</span> Team Work
                    </li>
                    <li className="list-group-item">
                      <span className="fw-medium">Technology:</span>
                      <ul className="nav nav-gap-sm align-items-center d-inline-flex ms-4">
                        <li className="nav-item">
                          <a
                            href="https://facebook.com/runwebrun"
                            className="nav-link"
                          >
                            <svg
                              width="6"
                              height="15"
                              viewBox="0 0 10 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.17421 3.65234H9.99996V0.154687C9.68557 0.107422 8.60224 0 7.34088 0C4.70831 0 2.90529 1.82188 2.90529 5.16914V8.25H0V12.1602H2.90529V22H6.46588V12.1602H9.25375L9.69693 8.25H6.46588V5.55586C6.46588 4.42578 6.7424 3.65234 8.17421 3.65234Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-none d-xl-block col-1"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-12 show-on-scroll"
          data-show-duration="500"
          data-show-delay="50"
        >
          <a
            href={img2}
            className="gallery-item gallery-item-sm"
            data-fancybox="gallery-1"
            data-animation-effect="fade"
          >
            <img src={img2} alt="" />
          </a>
        </div>
        <div
          className="col-12 col-sm-6 show-on-scroll"
          data-show-duration="500"
          data-show-delay="50"
        >
          <a
            href={img1}
            className="gallery-item gallery-item-md"
            data-fancybox="gallery-1"
            data-animation-effect="fade"
          >
            <img src={img1} alt="" />
          </a>
        </div>
        <div
          className="col-12 col-sm-6 show-on-scroll"
          data-show-duration="500"
          data-show-delay="200"
        >
          <a
            href={img3}
            className="gallery-item gallery-item-md"
            data-fancybox="gallery-1"
            data-animation-effect="fade"
          >
            <img src={img3} alt="" />
          </a>
        </div>
      </div>
      <div className="container">
        <div className="py-160 mt-n10">
          <div className="row gh-1 gv-5 justify-content-between">
            <div className="d-none d-xl-block col-1"></div>
            <div className="col-12 col-lg-6 col-xl me-lg-auto me-xl-n30">
              <h2
                className="d-flex align-items-center show-on-scroll"
                data-show-duration="500"
                data-show-distance="10"
                data-show-delay="50"
              >
                About
                <hr className="d-none d-sm-block my-0 me-0 ms-auto width-70px" />
              </h2>
              <p
                className="show-on-scroll"
                data-show-duration="500"
                data-show-distance="10"
                data-show-delay="150"
              >
                The app aims to build platform where any cat owners connect to
                each other. I have the role to created Machine Learning model
                for classifying the cat breeds and convert the model into
                TFLite. The model accuracy got {'>'} 83% where Transfer Learning
                implemented. The projects are proposed as Bangkit 2022 Final
                Capstone Project. The team consists of 2 Mobile Devs, 3 Machine
                Learning Engineer and 1 Cloud Engineer
              </p>
              <a
                href="https://github.com/cat-pedigree/"
                className="btn btn-dark btn-with-ball show-on-scroll"
                data-show-duration="500"
                data-show-distance="10"
                data-show-delay="250"
              >
                GitHub
              </a>
            </div>
            <div className="d-none d-xl-block col-lg-2"></div>
            <div
              className="col-12 col-lg-4 show-on-scroll"
              data-show-duration="700"
              data-show-distance="20"
              data-show-delay="200"
            >
              <ul className="list mt-lg-6 mb-0">
                <li>Machine Learning</li>
                <li>Android</li>
                <li>Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProject;
