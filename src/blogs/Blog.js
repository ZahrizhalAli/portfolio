import React from "react"
import blogdata from "../blogdata.json"


function Blog(){

    return <>
     <div id="ml-projects" className="text-center projects-title">
          <h2>My Blogs on Medium</h2>
        </div>
    <div className="isotope p-10">
                    <ul className="nav justify-content-center isotope-options mb-60">
                        <li className="nav-item active">
                            <a href="#" data-filter="all" className="nav-link">
                                <div className="nav-link-name">all posts</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-filter="lifestyle" className="nav-link">
                                <div className="nav-link-name">statistics</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-filter="design" className="nav-link">
                                <div className="nav-link-name">machine learning</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-filter="business" className="nav-link">
                                <div className="nav-link-name">data science</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-filter="company" className="nav-link">
                                <div className="nav-link-name">company</div>
                            </a>
                        </li>
                    </ul>
                    <div className="row gv-4 isotope-grid">
                            {blogdata && blogdata.map((b) => {
                                return <>
                        <div className="col-lg-3 p-4 mt-30 col-md-3 col-sm-6 isotope-item" data-filters="lifestyle">

                                <div className="card card-blog card-vertical">
                                <a href={b.link} className="card-img">
                                    <img src={b.imgurl} alt=""/>
                                </a>
                                <div className="card-body">
                                    <a href={b.link} className="card-title h5">{b.title}</a>
                                    <div className="card-date">{b.date}</div>
                                    <p className="card-text">{b.description}.</p>
                                    <a href="single-post.html" className="btn btn-clean">read more<svg className='icon-arrow icon-arrow-right' width='25' height='10' viewBox='0 0 25 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M20 1L24 5L20 9' stroke='currentColor' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' />
                                            <path d='M7 5L24 5' stroke='currentColor' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' />
                                        </svg></a>
                                </div>
                            </div>
                            </div>
                                </>
                            })}
  
                    </div>
                    
                </div>
    </>
}

export default Blog;