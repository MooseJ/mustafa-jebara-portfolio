import React from 'react';
import Project from './Project'

const ProjectArticle = (props) =>
  <article
    id="projects"
    className={`${props.article === 'projects' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
    >
    <h2 className="major">Projects</h2>
    {
      Projects.map(project => (
        <>
          <Project 
            title={project.title} 
            description={project.description} 
            linkLabel={project.linkLabel} 
            link={project.link}  
          />
          <hr/>
        </>
      ))
    }
    {props.close}
  </article>

export default ProjectArticle

const Projects = [
  {
    title: "Project Title",
    description: `Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
    at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
    urna nisi, fringila lorem et vehicula lacinia quam. Integer
    sollicitudin mauris nec lorem luctus ultrices.`,
    link: "https://github.com/MooseJ",
    linkLabel: "View Source Code"
  },
  {
    title: "Project Title",
    description: `Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
    at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
    urna nisi, fringila lorem et vehicula lacinia quam. Integer
    sollicitudin mauris nec lorem luctus ultrices.`,
    link: "https://github.com/MooseJ",
    linkLabel: "View Source Code"
  },
  {
    title: "Project Title",
    description: `Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
    at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
    urna nisi, fringila lorem et vehicula lacinia quam. Integer
    sollicitudin mauris nec lorem luctus ultrices.`,
    link: "https://github.com/MooseJ",
    linkLabel: "View Source Code"
  },
  {
    title: "Project Title",
    description: `Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
    at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
    urna nisi, fringila lorem et vehicula lacinia quam. Integer
    sollicitudin mauris nec lorem luctus ultrices.`,
    link: "https://github.com/MooseJ",
    linkLabel: "View Source Code"
  }
]