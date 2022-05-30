import React from "react";

function Projects() {
  return (
    <>
      <div className="isotope text-center">
        <ul className="nav justify-content-center isotope-options mb-60 pb-30">
          <li
            className="nav-item active show-on-scroll"
            data-show-delay="50"
            data-show-duration="400"
            data-show-distance="10"
          >
            <a href="#" data-filter="all" className="nav-link">
              <span className="nav-link-name">all projects</span>
            </a>
          </li>
          <li
            className="nav-item show-on-scroll"
            data-show-delay="100"
            data-show-duration="400"
            data-show-distance="10"
          >
            <a href="#" data-filter="branding" className="nav-link">
              <span className="nav-link-name">react js</span>
            </a>
          </li>
          <li
            className="nav-item show-on-scroll"
            data-show-delay="150"
            data-show-duration="400"
            data-show-distance="10"
          >
            <a href="#" data-filter="design" className="nav-link">
              <span className="nav-link-name">node js</span>
            </a>
          </li>
          <li
            className="nav-item show-on-scroll"
            data-show-delay="200"
            data-show-duration="400"
            data-show-distance="10"
          >
            <a href="#" data-filter="photography" className="nav-link">
              <span className="nav-link-name">TensorFlow</span>
            </a>
          </li>
          <li
            className="nav-item show-on-scroll"
            data-show-delay="250"
            data-show-duration="400"
            data-show-distance="10"
          >
            <a href="#" data-filter="marketing" className="nav-link">
              <span className="nav-link-name">Web3</span>
            </a>
          </li>
        </ul>
        <div className="row gv-5 isotope-grid mb-n7">
          <div className="col-12 col-md-6 isotope-item" data-filters="branding">
            <span
              className="d-block show-on-scroll"
              data-show-delay="50"
              data-show-duration="600"
            >
              <a
                className="card card-portfolio card-default card-image-md card-hover-zoom"
                href="portfolio-single-style-1.html"
              >
                <span
                  className="card-img"
                  data-cursor-style="cursor-circle"
                  data-cursor-text="view"
                >
                  <img
                    src="assets/images/portfolio/cool-photography-1200-856.jpg"
                    alt=""
                  />
                </span>
                <span className="card-body">
                  <span className="card-title h4">Cool Photography</span>
                  <span className="card-category subtitle">photography</span>
                </span>
              </a>
            </span>
          </div>
          <div className="col-12 col-md-6 isotope-item" data-filters="design">
            <span
              className="d-block show-on-scroll"
              data-show-delay="150"
              data-show-duration="600"
            >
              <a
                className="card card-portfolio card-default card-image-md card-hover-zoom"
                href="portfolio-single-style-5.html"
              >
                <span
                  className="card-img"
                  data-cursor-style="cursor-circle"
                  data-cursor-text="view"
                >
                  <img
                    src="assets/images/portfolio/app-design-1200-856.jpg"
                    alt=""
                  />
                </span>
                <span className="card-body">
                  <span className="card-title h4">App Design</span>
                  <span className="card-category subtitle">marketing</span>
                </span>
              </a>
            </span>
          </div>
        </div>
        <a
          href="portfolio-col-2-style-3.html"
          className="btn btn-circle btn-light btn-lg mt-100"
        >
          more
        </a>
      </div>
    </>
  );
}
export default Projects;
