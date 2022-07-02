import React from 'react';
import img1 from '../images/applyin/cover.png';

function SingleProject4() {
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
              <h1 className="mb-100 mb-lg-0 pb-8 pb-lg-0">ApplyIn</h1>
            </div>
            <div
              className="col-12 col-lg-6 col-xl ms-xl-n30 show-on-scroll"
              data-show-duration="500"
              data-show-distance="10"
              data-show-delay="100"
            >
              <p className="lead mb-0">
                LinkedIn Jobs apply automation using Selenium Web Driver,
                BeautifulSoup and Python programming language.
              </p>
              <hr />
              <div className="row gh-3 gv-1">
                <div className="col-12 col-sm-6 col-lg-auto">
                  <ul className="list-group list-group-gap borderless">
                    <li className="list-group-item">
                      <span className="fw-medium me-8">Date:</span> October 19,
                      2021
                    </li>
                    <li className="list-group-item">
                      <span className="fw-medium me-8">Category:</span>{' '}
                      Automation
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-lg-auto">
                  <ul className="list-group list-group-gap borderless">
                    <li className="list-group-item">
                      <span className="fw-medium me-8">Type:</span> Personal
                      Project
                    </li>
                    <li className="list-group-item">
                      <span className="fw-medium">Technology:</span>
                      <ul className="nav nav-gap-sm align-items-center d-inline-flex ms-4">
                        <li className="nav-item">
                          <a
                            href="https://facebook.com/runwebrun"
                            className="nav-link"
                          >
                            Python
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
            href={img1}
            className="gallery-item gallery-item-sm"
            data-fancybox="gallery-1"
            data-animation-effect="fade"
          >
            <img src={img1} alt="" />
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
                Aims to automate job application using Python with single click,
                your resume gets send to lots of companies. First, we scrape the
                neccessary web element and learn the pattern of job application
                and start automate the process.
              </p>
              <a
                href="https://github.com/ZahrizhalAli/linkedin-job-apply-automation"
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
                <li>TensorFlow</li>
                <li>React js (soon)</li>
                <li>Node Js (soon)</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProject4;
