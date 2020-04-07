import PropTypes from 'prop-types'
import React from 'react'
import GoToArticle from './GoToArticle'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Mustafa  Jebara</h1>
        <p>
          Software Developer
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {
          articles.map(article => (
            <GoToArticle onOpenArticle={props.onOpenArticle} articleName={article}/>
          ))
        }
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

const articles = ['projects', 'experience', 'about']
