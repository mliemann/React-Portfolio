import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Marlon
                    <span className="text-primary">Liemann</span>
                </h1>
                <div className="subheading mb-5">
                    Charlotte, NC 28215 · (704) 953-6221 ·
                    <a href="mailto:mliemann@live.com">mliemann@live.com</a>
                </div>
                <p className="lead mb-5">
                    I have over 5 years of experience working within software companies
                    in a sales & customer success capacity. Thanks to my heavy
                    involvement with our product team, I have found a new passion in
                    developing software and ensuring my customers attain value from their investments. I have experience troubleshooting software,
                    hardware & developing website front and back ends.
                </p>
                <div className="social-icons">
                    <a className="social-icon" title="Go to my LinkedIn profile" href="https://www.linkedin.com/in/marlon-liemann-2a0548130/"><i
                            className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" title="Go to my GitHub profile" href="https://github.com/mliemann"><i className="fab fa-github"></i></a>
                    <a className="social-icon" title="Download My Resume" href="https://drive.google.com/file/d/1JkdATZTNAFmmqB7Gj5BJSnaVlnWXnGGl/view?usp=sharing"><i className="far fa-file"></i></a>
                        {/* <!-- <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a> --> */}
                </div>
            </div>
        </section>
  );
}

export default Home;
