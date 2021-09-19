import React from "react";

function Education() {
  return (
    <section className="resume-section" id="education">
    <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">University of North Carolina - Charlotte</h3>
                <div className="subheading mb-3">Certification</div>
                <div>Full Stack Coding Bootcamp</div>
                <p>Bootcamp to achieve proficiency in: Browser-Based Technologies (HTML, CSS, JavaScript,
                    jQuery), Databases (MySQL, MongoDB), Server-Side Development (MongoDB, Express.js, React.js,
                    Node.js), Quality Assurance and Deployment</p>
            </div>
            <div className="flex-shrink-0">
                <span className="text-primary">April 2021 - October 2021</span>
            </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
                <h3 className="mb-0">Kaplan University </h3>
                <div className="subheading mb-3">Bachelors of Science in Business Administration</div>
                <p>HLC & ACBSP Accreditation; GPA: 3.59</p>
            </div>
            <div className="flex-shrink-0">
                <span className="text-primary"> Graduated 2016</span>
            </div>
        </div>
    </div>
</section>

            
        
  );
}

export default Education;
