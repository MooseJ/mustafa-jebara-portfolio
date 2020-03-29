import React from 'react'
import PropTypes from 'prop-types'

class Experience extends React.Component { 
  render() {
    return (
      <>
        <h3>{this.props.company}</h3>
        <div className="experience-subtitle">
          <h5>{this.props.title}</h5>
          <h5>{this.props.startDate} - {this.props.endDate}</h5>
        </div>
        
        <p>{this.props.description}</p>
      </>
    )
  }
}

Experience.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
}

export default Experience;