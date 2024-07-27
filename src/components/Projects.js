import React from 'react';
import '../style/Projects.css'

function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project-item">
          <h2>Project 1</h2>
          <p>Description of Project 1...</p>
        </div>
        <div className="project-item">
          <h2>Project 2</h2>
          <p>Description of Project 2...</p>
        </div>
        {/* Add more projects */}
      </div>
    </div>
  );
}

export default Projects;
