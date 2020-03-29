import React from 'react'
import PropTypes from 'prop-types'

class Project extends React.Component { 
  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.linkLabel}</a>
      </>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkLabel: PropTypes.string

}

export default Project;