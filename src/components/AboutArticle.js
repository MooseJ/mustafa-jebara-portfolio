import React from 'react';
import me from '../images/me.jpg'



const AboutArticle = (props) => 
  <article
    id="about"
    className={`${props.article === 'about' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
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
    {props.close}
  </article>

 export default AboutArticle