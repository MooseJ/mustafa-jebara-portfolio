import PropTypes from 'prop-types'
import React from 'react'
import ExperienceArticle from './ExperienceArticle'
import ProjectArticle from './ProjectArticle';
import AboutArticle from './AboutArticle';

class Main extends React.Component {
  render() {
    let close = (
      <link
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <ProjectArticle article={this.props.article} articleTimeout={this.props.articleTimeout} close={close} />
        <ExperienceArticle article={this.props.article} articleTimeout={this.props.articleTimeout} close={close} />
        <AboutArticle article={this.props.article} articleTimeout={this.props.articleTimeout} close={close} />
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
