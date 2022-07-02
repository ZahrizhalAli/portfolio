import React from 'react';
import img1 from '../images/nobarkuy/1.png';
import img2 from '../images/nobarkuy/2.png';
import img3 from '../images/nobarkuy/3.png';
function SingleProject2() {
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
              <h1 className="mb-100 mb-lg-0 pb-8 pb-lg-0">Nobarkuy</h1>
            </div>
            <div
              className="col-12 col-lg-6 col-xl ms-xl-n30 show-on-scroll"
              data-show-duration="500"
              data-show-distance="10"
              data-show-delay="100"
            >
              <p className="lead mb-0">
                Created Movie-like streaming platform and using Machine Learning
                to filter out negative comments using IMDB Sentiment Analysis
                using TensorFlowJS.
              </p>
              <hr />
              <div className="row gh-3 gv-1">
                <div className="col-12 col-sm-6 col-lg-auto">
                  <ul className="list-group list-group-gap borderless">
                    <li className="list-group-item">
                      <span className="fw-medium me-8">Date:</span> July 1, 2022
                    </li>
                    <li className="list-group-item">
                      <span className="fw-medium me-8">Category:</span> Website
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
                          <a href="/" className="nav-link">
                            TensorFlow
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/" className="nav-link">
                            ReactJs
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/" className="nav-link">
                            Firebase
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
                The website are built using ReactJS and implemented TMDB (The
                Movie Database) API to fetch Movies and using Firebase hosting
                to keep the website alives. Machine Learning implemented to
                classify negative or positive comments using TensorFlow js.
              </p>
              <a
                href="https://github.com/ZahrizhalAli/nobarkuy-movies"
                className="btn btn-dark btn-with-ball show-on-scroll"
                data-show-duration="500"
                data-show-distance="10"
                data-show-delay="250"
              >
                GitHub
              </a>
              <a
                href="https://nobarkuy-d395b.web.app/"
                className="btn m-3 btn-dark btn-with-ball show-on-scroll"
                data-show-duration="500"
                data-show-distance="10"
                data-show-delay="250"
              >
                Link
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
                <li>Web Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProject2;
