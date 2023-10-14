import React from 'react';
import 'C:/Users/HP/Desktop/mern full stack/react project/task6/src/assets/styles/style.css';
import project1 from 'C:/Users/HP/Desktop/mern full stack/react project/task6/src/assets/images/project1.png';
import project2 from 'C:/Users/HP/Desktop/mern full stack/react project/task6/src/assets/images/project2.png';

function Projects() {
    const projects = [
      {
        title: 'calculator',
        description: 'it is a calculator interactive website which you change various modes',
        imageUrl: project1,
        githubLink: 'https://github.com/yourusername/project1',
        demoLink: 'https://yourproject1demo.com',
      },
      {
        title: 'Project 2',
        description: 'when you give list of data it conversts into a beautiful table',
        imageUrl: project2,
        githubLink: 'https://github.com/yourusername/project2',
        demoLink: 'https://yourproject2demo.com',
      },
    ];
  
    return (
      <section id="projects" className="section">
        <div className="container">
          <h2>My Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <img src={project.imageUrl} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default Projects;
