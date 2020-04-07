import React from 'react'
import PropTypes from 'prop-types'

const Experience = (props) => 
  <>
    <h3>{props.title}</h3>
    <div className="experience-subtitle">
      <h5>{props.company}</h5>
      <h5>{props.startDate} - {props.endDate}</h5>
    </div>
    
    <p>{props.description}</p>
  </>

Experience.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
}

export default Experience;