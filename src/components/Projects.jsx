import React from 'react'
import data from "../data/projects"
const Projects = () => {

  return (
    <div id='projects'>
      <div className="container">
        <div>I have worked on these personal projects</div>
        <div className="project-list">
          {data &&
          data.map( project => {
            return (
              <div className="project-card">
                <div className="project-img">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-info">
                    <div className='project-heading'>{project.name}</div>
                    <p className="project-desc">{project.description}</p>
                    <div className="tech-used">
                    {project.techStack.map(tech => {
                      return <div className="tech">{tech}</div>
                    })}
                    </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects