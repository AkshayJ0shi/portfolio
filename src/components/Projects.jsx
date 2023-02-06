import { Box } from '@chakra-ui/react'
import React from 'react'
import data from "../data/projects"
const Projects = () => {

  return (
    <div id='projects'>
      <div className="container">
        {/* <div>I have worked on these personal projects</div> */}
        <div className="project-list">
          {data &&
          data.map( project => {
            return (
              <div className="project-card">
                <div className="img-container">
                  <img className='project-img' src={project.image} alt={project.name} />
                </div>
                <div className="project-info">
                  <div className="project-info-upper">
                    <div className='project-heading'>{project.name}</div>
                      <div className="tech-used">
                      {project.techStack.map(tech => {
                        return <div className="tech">{tech}</div>
                      })}
                      </div>
                      <p className="project-desc">{project.description}</p>

                    </div>
                    <div className="project-info-lower">
                      <div className="github">
                        <a href={project.github}>Github</a>
                      </div>

                      <div className="demo">
                        <a href={project.demo}>Demo</a>
                      </div>
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