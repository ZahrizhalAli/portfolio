import React from "react"

function About(){

    return <>
    <div className="container pt-130 pb-130 mt-n10">
                <div className="row gh-1 gv-1 align-items-center align-items-lg-stretch flex-column flex-lg-row">
                    <div className="col-12 col-md-6 col-lg-5 shape-parent lines-style-5 order-1 " data-show-duration="600" data-show-distance="10" data-show-delay="100">
                        <img className="w-100 rounded-circle" src="assets/images/persons/brian-newton-940-940.jpg" alt=""/>
                        <div className="shape justify-content-end">
                            <svg className="mt-n60" width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="62.5" cy="62.5" r="62.5" fill="#F5F5F5" />
                            </svg>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="col-lg-1 d-none d-lg-block order-2 order-lg-2"></div>
                    <div className="col-12 col-lg ms-lg-n30 order-4 order-lg-3" data-show-duration="600" data-show-distance="10">
                        <p className="subtitle pt-30 mt-n7">Resume</p>
                        <h1 className="h2">I’m Zahrizhal Ali ✌️.</h1>

                        <ul className="nav nav-pills nav-tabs nav-no-gap pt-5 pb-7 mb-30" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><span className="nav-link-name">short bio</span></a>
                            </li>
                            
                        </ul>

                        <div className="tab-content">
                            
                            <div className="tab-pane active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <p className="mb-30">Working to better understand and explore how technology solves problems and benefits humans. Expertise in building deep learning or machine learning models and web development. I enjoy learning and converting project ideas with broadly relevant problems and doing machine learning-specific research. </p>
                         
                                <p className="mb-30">Were let. Fifth you're void light he Winged bring after all, green there whales sixth bring good was, let have days dry blessed moving they're isn't. Second whose tree bring unto tree that air <strong>winged multiply</strong> don't place unto. Fly fish air days to night life deep fourth face one spirit.</p>
                                <p className="mb-n3">My colleagues would describe me as a <ins>strong individual, with a love-learning attitude, and a resourceful individual</ins> especially when working with a team. Highly excited to seek opportunities that will allow me to develop technologies, especially with problem-solving-related projects like e-commerce and education. Specific fields of interest include data science, applied machine learning, and web development. </p>
                            </div>
                        </div>
                        <div className="accordion mt-40 pt-5" id="accordionAbout">
                            <div className="accordion-item">
                                <button className="h5 btn btn-link btn-clean btn-dark btn-block w-100" data-bs-target="#collapseDesign" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseDesign">
                                    <span className="accordion-item-icon">🦄</span>Work Experiences <svg className="accordion-item-plus" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0V16" stroke="currentColor" stroke-width="1.3" />
                                        <path d="M0 8H16" stroke="currentColor" stroke-width="1.3" />
                                    </svg>
                                </button>
                                <div id="collapseDesign" className="collapse" data-parent="#accordionAbout">
                                    <div className="collapse-content">
                                        <ul>
                                            <li>AI Engineer Intern @ SOCA AI <strong>2023-Present</strong></li>
                                            <li>Machine Learning Mentor @ Bangkit Academy 2023<strong>2023-Present</strong></li>
                                            <li>Machine Learning Engineer @ HaiTernak <strong>2022-2023</strong></li>
                                            <li>Software Engineer (Frontend) @ ICLABS FIKOM UMI<strong>2022</strong></li>
                                            <li>Teaching Assistant @ ICLABS FIKOM UMI<strong>2021-2023</strong></li>
                                            <li>Freelancer (Full Stack)<strong>2020-2022</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <button className="h5 btn btn-link btn-clean btn-dark btn-block w-100" data-bs-target="#collapseDesign" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseDesign">
                                    <span className="accordion-item-icon">🦁</span> Leadership & Awards <svg className="accordion-item-plus" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0V16" stroke="currentColor" stroke-width="1.3" />
                                        <path d="M0 8H16" stroke="currentColor" stroke-width="1.3" />
                                    </svg>
                                </button>
                                <div id="collapseDesign" className="collapse" data-parent="#accordionAbout">
                                    <div className="collapse-content">
                                        <ul>
                                            <li>Research Scholarship Awardee by BRIN - <strong>2023</strong></li>
                                            <li>Djarum Scholarship Awardee by PT Djarum - <strong>2021</strong></li>
                                            <li>PKM Funding Awardee by RISTEKDIKTI - <strong>2022</strong></li>
                                            <li>CTO and Co-Founder HaiTernak - IWDM Startup Competition <strong>2022</strong></li>
                                            <li>Lead Google Developer Students Club - <strong>2022</strong></li>
                                            <li>Chief Human Resources Department UKM PERISAI UMI - <strong>2022</strong></li>
                                            <li>1st Winner Writing of Agritech Exhibition Competition - <strong>2022</strong></li>
                                            <li>3rd Winner of National Essay Competition by Forestshare ITB - <strong>2022</strong></li>
                                            <li>1st Winner of National Essay Competition by UNNES- <strong>2022</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <button className="h5 btn btn-link btn-clean btn-dark btn-block w-100" data-bs-target="#collapseBrand" type="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseBrand">
                                    <span className="accordion-item-icon">🔥</span> Machine Learning <svg className="accordion-item-plus" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0V16" stroke="currentColor" stroke-width="1.3" />
                                        <path d="M0 8H16" stroke="currentColor" stroke-width="1.3" />
                                    </svg>
                                </button>
                                <div id="collapseBrand" className="collapse show" data-parent="#accordionAbout">
                                    <div className="collapse-content">
                                <p className="mb-30">My Interests is in data science and machine learning techniques, including deep learning, natural language processing, and computer vision. Mostly did all my projects with range of programming language and tools such as <strong>Python, TensorFlow, Scikit-learn, Pandas, Open-CV</strong>. For visualizing data, I often used <strong>
                                    Matplotlib, Seaborn and Tableau</strong> In addition I used <strong>MySQL, MongoDB and BigQuery</strong>. I documented all my previous works in GitHub and Kaggle.</p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="h5 btn btn-link btn-clean btn-dark btn-block w-100" data-bs-target="#collapseMobile" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseMobile">
                                    <span className="accordion-item-icon">💎</span> Web Development <svg className="accordion-item-plus" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0V16" stroke="currentColor" stroke-width="1.3" />
                                        <path d="M0 8H16" stroke="currentColor" stroke-width="1.3" />
                                    </svg>
                                </button>
                                <div id="collapseMobile" className="collapse" data-parent="#accordionAbout">
                                    <div className="collapse-content">
                                    <p className="mb-0 font-size-16">I have worked on a wide range of projects, from personal project to medium-scale web application used by 100+ users. Tech stack I'm using is MERN <strong>MongoDB, React.js, Express.js and Node.js</strong>. During my works I used <strong>GitHub</strong> for documenting and controlling my projects. For Cloud based technology I used <strong>GCP, Firebase, and AWS S3 Storage</strong>. I devote to deliver good performing web app by utilizing Progressive Web App and increasing the performance of the web app.</p>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="contact-1.html" className="btn btn-dark btn-with-ball mt-60">let’s work</a>
                    </div>
                    <div className="col-auto col-lg-1 order-3 order-lg-4">
                        <div className="sticky-top d-flex justify-content-lg-end pt-30">
                            <ul className="nav nav-gap-sm d-inline-flex align-items-center flex-lg-column">
                                <li className="nav-item " data-show-duration="500" data-show-distance="10" data-show-delay="200">
                                    <a href="#" className="nav-link">
                                        <svg width="7" height="15" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.17421 3.65234H9.99996V0.154687C9.68557 0.107422 8.60224 0 7.34088 0C4.70831 0 2.90529 1.82188 2.90529 5.16914V8.25H0V12.1602H2.90529V22H6.46588V12.1602H9.25375L9.69693 8.25H6.46588V5.55586C6.46588 4.42578 6.7424 3.65234 8.17421 3.65234Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item " data-show-duration="500" data-show-distance="10" data-show-delay="250">
                                    <a href="#" className="nav-link">
                                        <svg width="17" height="15" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.0706 5.51356C22.086 5.73504 22.086 5.95656 22.086 6.17804C22.086 12.9334 17.0783 20.7172 7.92575 20.7172C5.10601 20.7172 2.48661 19.8787 0.283203 18.4232C0.683835 18.4707 1.069 18.4865 1.48505 18.4865C3.81167 18.4865 5.95347 17.6797 7.6638 16.3033C5.47581 16.2558 3.64221 14.7845 3.01046 12.7594C3.31865 12.8069 3.6268 12.8385 3.9504 12.8385C4.39723 12.8385 4.84411 12.7752 5.2601 12.6645C2.97968 12.1898 1.2693 10.1332 1.2693 7.64935V7.58609C1.93183 7.96579 2.70231 8.20309 3.5189 8.2347C2.17837 7.31709 1.30013 5.75086 1.30013 3.97894C1.30013 3.02972 1.54661 2.15959 1.97807 1.40019C4.42801 4.50103 8.11063 6.52604 12.24 6.74756C12.163 6.36787 12.1168 5.97239 12.1168 5.57687C12.1168 2.76076 14.3356 0.466797 17.0937 0.466797C18.5266 0.466797 19.8209 1.0838 20.73 2.0805C21.8548 1.85902 22.9334 1.43184 23.8887 0.846495C23.5189 2.03307 22.7331 3.02977 21.7008 3.66255C22.7023 3.55186 23.673 3.26702 24.5667 2.87155C23.8888 3.88403 23.0413 4.78577 22.0706 5.51356Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item " data-show-duration="500" data-show-distance="10" data-show-delay="300">
                                    <a href="#" className="nav-link">
                                        <svg width="15" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.2827 5.3166C8.24087 5.3166 5.78732 7.8148 5.78732 10.912C5.78732 14.0092 8.24087 16.5074 11.2827 16.5074C14.3245 16.5074 16.7781 14.0092 16.7781 10.912C16.7781 7.8148 14.3245 5.3166 11.2827 5.3166ZM11.2827 14.5497C9.31698 14.5497 7.70998 12.9183 7.70998 10.912C7.70998 8.90563 9.3122 7.27425 11.2827 7.27425C13.2532 7.27425 14.8554 8.90563 14.8554 10.912C14.8554 12.9183 13.2484 14.5497 11.2827 14.5497ZM18.2846 5.08772C18.2846 5.81331 17.7107 6.39282 17.0029 6.39282C16.2902 6.39282 15.7211 5.80844 15.7211 5.08772C15.7211 4.36699 16.295 3.78261 17.0029 3.78261C17.7107 3.78261 18.2846 4.36699 18.2846 5.08772ZM21.9243 6.4123C21.843 4.66404 21.4508 3.11545 20.1929 1.83956C18.9399 0.563678 17.419 0.164355 15.7019 0.0766992C13.9323 -0.0255664 8.62827 -0.0255664 6.85865 0.0766992C5.14643 0.159486 3.62552 0.558809 2.36766 1.83469C1.10979 3.11058 0.722392 4.65917 0.636302 6.40743C0.535865 8.20925 0.535865 13.6098 0.636302 15.4117C0.717609 17.1599 1.10979 18.7085 2.36766 19.9844C3.62552 21.2603 5.14165 21.6596 6.85865 21.7473C8.62827 21.8495 13.9323 21.8495 15.7019 21.7473C17.419 21.6645 18.9399 21.2652 20.1929 19.9844C21.446 18.7085 21.8382 17.1599 21.9243 15.4117C22.0247 13.6098 22.0247 8.21412 21.9243 6.4123ZM19.6381 17.345C19.2651 18.2995 18.5429 19.0348 17.6007 19.4195C16.1898 19.9893 12.8419 19.8578 11.2827 19.8578C9.72352 19.8578 6.37081 19.9844 4.96469 19.4195C4.02727 19.0397 3.30507 18.3043 2.92724 17.345C2.36766 15.9084 2.49679 12.4995 2.49679 10.912C2.49679 9.32443 2.37244 5.91071 2.92724 4.47899C3.30029 3.52451 4.02248 2.78917 4.96469 2.40446C6.37559 1.83469 9.72352 1.96618 11.2827 1.96618C12.8419 1.96618 16.1946 1.83956 17.6007 2.40446C18.5381 2.7843 19.2603 3.51964 19.6381 4.47899C20.1977 5.91558 20.0686 9.32443 20.0686 10.912C20.0686 12.4995 20.1977 15.9133 19.6381 17.345Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
}

export default About;