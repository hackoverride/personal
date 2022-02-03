import React from "react";

export default function Cv() {
  return (
    <div className="resume_container">
      <div>
        <h2>Projects</h2>
        <p>
          <h3>In development:</h3>

          <p>
            <span className="project_name">DigiKort</span> | Digital gift-cards
          </p>
          <p>
            <span className="project_name">Project Matrix</span> | A way to
            pitch and manage your project ideas
          </p>
        </p>
        <p>
          <h3>In production:</h3>
          <p>
            <span className="project_name">Klikkit</span> | A booking tool for
            the hospitality industry
          </p>
        </p>
      </div>
      <div>
        <h2>Skills</h2>
        <p className="listContainer">
          <span className="skill_list">JavaScript</span>
          <span className="skill_list">React</span>
          <span className="skill_list">Java</span>
          <span className="skill_list">MongoDB</span>
          <span className="skill_list">SQL</span>
          <span className="skill_list">PHP</span>
          <span className="skill_list">Raspberry PI / IOT</span>
          <span className="skill_list">HTML</span>
          <span className="skill_list">SCSS</span>
          <span className="skill_list">CSS</span>
          <span className="skill_list">Node</span>
          <span className="skill_list">UX UI</span>
          <span className="skill_list">Jupyter Notebook</span>
          <span className="skill_list">Python</span>
          <span className="skill_list">ML modelling</span>
        </p>
      </div>
      <div>
        <h2>Education</h2>
        <p>
          <p>Bachelor: System Development Programming | USN</p>
          <p>Diploma in management: Hospitality | ICMS</p>
        </p>
      </div>
      <div>
        <h2>Work history</h2>
        <p>Founder | Klikkit AS</p>
        <p>TA in Web development | USN</p>
        <p>Receptionist / Customer service | Farris Bad</p>
      </div>
    </div>
  );
}
