import React from 'react'
import PropTypes from 'prop-types'

const GoToArticle = (props) => 
  <button
    onClick={() => {
      props.onOpenArticle(props.articleName)
    }}
  >
    {props.articleName}
  </button>


GoToArticle.propTypes = {
  onOpenArticle: PropTypes.func,
  articleName: PropTypes.string
}

export default GoToArticle