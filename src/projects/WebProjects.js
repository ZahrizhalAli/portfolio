import React from 'react';
import img1 from '../images/cat-pedigree/1.png';
import img2 from '../images/nobarkuy/cover.png';
import img3 from '../images/foodknows/cover.png';
import img4 from '../images/applyin/cover.png';
import mldata from "../webdata.json"
function WebProjects() {
  return (
    <>
    
    <div id="web-projects" className="text-center projects-title">
          <h2>Web Projects</h2>
        </div>
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
        <div className="row gv-5 isotope-grid">
        <div class="col-12 col-md-6 isotope-item" data-filters="photography">
                            <a class="card card-portfolio card-default card-image-md card-hover-zoom text-center" href="portfolio-single-style-1.html">
                                <span class="card-img" data-cursor-style="cursor-circle" data-cursor-text="view">
                                    <img src="assets/images/portfolio/cool-photography-1200-856.jpg" alt=""/>
                                </span>
                                <span class="card-body">
                                    <span class="card-title h4">Cool Photography</span>
                                    <span class="card-category subtitle">photography</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-12 col-md-6 isotope-item" data-filters="marketing">
                            <a class="card card-portfolio card-default card-image-md card-hover-zoom text-center" href="portfolio-single-style-5.html">
                                <span class="card-img" data-cursor-style="cursor-circle" data-cursor-text="view">
                                    <img src="assets/images/portfolio/app-design-1200-856.jpg" alt=""/>
                                </span>
                                <span class="card-body">
                                    <span class="card-title h4">App Design</span>
                                    <span class="card-category subtitle">marketing</span>
                                </span>
                            </a>
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
export default WebProjects;
