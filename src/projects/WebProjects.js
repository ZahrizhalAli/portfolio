import React from 'react';
import webdata from "../webdata.json"
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
        <div className="row gv-5 isotope-grid mt-5">
          {webdata && webdata.map((d) => {
            return <>
            <div class="col-lg-4 col-md-4 col-sm-6 p-6 isotope-item" data-filters="photography">
                            <a class="card card-portfolio card-default card-image-lg card-hover-zoom text-center" href={d.link}>
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
          href="github.com/ZahrizhalAli"
          className="btn btn-circle btn-light btn-lg mt-100"
        >
          more
        </a>
      </div>
    </>
  );
}
export default WebProjects;
