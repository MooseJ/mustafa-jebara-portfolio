import PropTypes from 'prop-types'
import React from 'react'
import me from '../images/me.jpg'
import Project from './Project';
import Experience from './Experience'

class Main extends React.Component {
  render() {
    let close = (
      <link
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></link>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
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
          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === 'experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          {
            Expereinces.map(experience => (
              <>
                <Experience 
                  company={experience.company}
                  title={experience.title}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  description={experience.description}
                />
                <hr/>
              </>
            ))
          }
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={me} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main


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

const Expereinces = [
  {
    company: "Very Dope Company",
    title: "Software Engineer",
    startDate: "May 2018",
    endDate: "May 2020",
    description: `Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
    eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
    erat volutpat. Praesent urna nisi, fringila lorem et vehicula
    lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
    Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
    Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
    amet.`,
  },
  {
    company: "Very Dope Company",
    title: "Software Engineer",
    startDate: "May 2018",
    endDate: "May 2020",
    description: `Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
    eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
    erat volutpat. Praesent urna nisi, fringila lorem et vehicula
    lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
    Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
    Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
    amet.`,
  },
  {
    company: "Very Dope Company",
    title: "Software Engineer",
    startDate: "May 2018",
    endDate: "May 2020",
    description: `Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
    eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
    erat volutpat. Praesent urna nisi, fringila lorem et vehicula
    lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
    Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
    Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
    amet.`,
  },
  {
    company: "Very Dope Company",
    title: "Software Engineer",
    startDate: "May 2018",
    endDate: "May 2020",
    description: `Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
    eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
    erat volutpat. Praesent urna nisi, fringila lorem et vehicula
    lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
    Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
    Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
    amet.`,
  },
]