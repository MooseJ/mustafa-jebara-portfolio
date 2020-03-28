import React, { Component } from 'react';
import AboutMeImage from '../assets/aboutme2.jpg'
import './About.css';

class About extends Component {
   
    render() {
        return (
          <div id="about-me-section">
            <img  id="about-me-img" src={AboutMeImage} alt="me in between two rocks"/>
            <div id="about-me-text">
              <h2 id="greeting">
                Hey,
              </h2>
              <p id="about-me-description">
                I enjoy short walks on the beach with a pipin hot cup of the finest coffee in one hand, and with my shoes in the other. 
                I just love how the sand feels on my socks while I'm burning up from the warm weather and the poor choice of drink.
                I would love to bring my son out to the beach but he's more fond of the indoors, 
                and the outdoors tend to be too dangerous for the little bugger.
                Oh I also write software sometimes. Please hire me. <br/> <br/>
                (I will write something more serious when I'm closer to being done with this. Hopefully nobody sees this before then 🤫)
              </p>
            </div>
          </div>
        )
      }
    }
    
export default About