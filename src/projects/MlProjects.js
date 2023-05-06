import React from 'react';
import img1 from '../images/cat-pedigree/1.png';
import img2 from '../images/nobarkuy/cover.png';
import img3 from '../images/foodknows/cover.png';
import img4 from '../images/applyin/cover.png';
import mldata from "../mldata.json"
function MlProjects() {
  return (
    <>
    
    <div id="ml-projects" className="text-center projects-title">
          <h2>Machine Learning Projects</h2>
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
              <span className="nav-link-name">Open CV</span>
            </a>
          </li>
          <li
            className="nav-item show-on-scroll"
            data-show-delay="150"
            data-show-duration="400"
            data-show-distance="10"
          >
            <a href="#" data-filter="design" className="nav-link">
              <span className="nav-link-name">Python</span>
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
              <span className="nav-link-name">Scikit-learn</span>
            </a>
          </li>
        </ul>
        <div className="row gv-5 isotope-grid">
          {mldata && mldata.map((d) => {
            return <>
            <div class="col-12 col-md-6 isotope-item" data-filters="photography">
                            <a class="card card-portfolio card-default card-image-md card-hover-zoom text-center" href={d.link}>
                                <span class="card-img" data-cursor-style="cursor-circle" data-cursor-text="view">
                                    <img src={d['img-url']} alt={d['img-url']}/>
                                </span>
                                <span class="card-body">
                                    <span class="card-title h4">{d.title}</span>
                                    <span class="card-category subtitle">{d.subtitle}</span>
                                </span>
                            </a>
                        </div>
            </>
          })}
        
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
export default MlProjects;
