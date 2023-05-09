import React from "react"
import imgprofile from '../images/profile.jpg';

function About(){

    return <>
    <div className="container pt-130 pb-130 mt-n10">
                <div className="row gh-1 gv-1 align-items-center align-items-lg-stretch flex-column flex-lg-row">
                    <div className="col-12 col-md-6 col-lg-5 shape-parent lines-style-5 order-1 " data-show-duration="600" data-show-distance="10" data-show-delay="100">
                        <img className="w-100 rounded-circle" src={imgprofile} alt=""/>
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
                            <p className="mb-30">I'm a software engineer and machine learning enthusiast who loves turning data and algorithms into insights...and occasionally, into memes. My expertise includes deep learning, Python, JavaScript, and the occasional bout of sarcasm. When I'm not busy developing AI models, you can find me attempting creative ways to teach random cats how neural network works. If you're looking for a data-savvy, pun-loving engineer who isn't afraid to think outside the box, i can be a good teammate for you.</p>
                         
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
                                <button className="h5 btn btn-link btn-clean btn-dark btn-block w-100" data-bs-target="#collapseLeadership" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseLeadership">
                                    <span className="accordion-item-icon">🦁</span> Leadership & Awards <svg className="accordion-item-plus" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0V16" stroke="currentColor" stroke-width="1.3" />
                                        <path d="M0 8H16" stroke="currentColor" stroke-width="1.3" />
                                    </svg>
                                </button>
                                <div id="collapseLeadership" className="collapse" data-parent="#accordionAbout">
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
                                <button className="h5 btn btn-link btn-clean btn-dark btn-block w-100" data-bs-target="#collapseBrand" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseBrand">
                                    <span className="accordion-item-icon">🔥</span> Machine Learning <svg className="accordion-item-plus" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0V16" stroke="currentColor" stroke-width="1.3" />
                                        <path d="M0 8H16" stroke="currentColor" stroke-width="1.3" />
                                    </svg>
                                </button>
                                <div id="collapseBrand" className="collapse" data-parent="#accordionAbout">
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
                              <div className="accordion-item">
                                <button className="h5 btn btn-link btn-clean btn-dark btn-block w-100" data-bs-target="#collapseCert" type="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseCert">
                                    <span className="accordion-item-icon">🎨</span> Certifications <svg className="accordion-item-plus" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0V16" stroke="currentColor" stroke-width="1.3" />
                                        <path d="M0 8H16" stroke="currentColor" stroke-width="1.3" />
                                    </svg>
                                </button>
                                <div id="collapseCert" className="collapse show" data-parent="#accordionAbout">
                                    <div className="collapse-content">
                                        <ul>
                                            <li>Google TensorFlow Developer Certifications</li> 
                                            <li>Deeplearning.AI TensorFlow Developer Specialization</li>
                                            <li>Deeplearning.AI TensorFlow Data and Deployment Specialization</li>
                                            <li>Google Data Analytics</li>
                                            <li>Datacamp: Data Scientist Career Track Certification</li>
                                            <li>Google IT Automation with Python</li>
                                            <li>Mathematics for Machine Learning Specialization</li>
                                            <li>Python for Computer Vision with Open CV and Deep Learning</li>
                                            <li>The Complete Python Pro Bootcamp 2022</li>
                                            <li>The Complete Web Development Bootcamp</li>
                                        </ul>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/about" className="btn btn-dark btn-with-ball mt-60">let’s work</a>
                    </div>
                    
                </div>
            </div>
    </>
}

export default About;