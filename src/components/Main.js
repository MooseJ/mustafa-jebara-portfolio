import React, { Component } from 'react';
import './Main.css';
import myson from '../assets/myson.png';

class Main extends Component {
   
    render() {
        return (
          <main>
            <span id="main-headline">
              <h2 id="main-name">
                Mustafa Jebara
              </h2>
              <h1>
                Developer, <br/>
                Creator, <br/>
                and <br/>
                Father <br/>
                ( Of a Cat )
              </h1>
            </span>
            <img className="myson" src={myson} alt="my son"/>
          </main>
        )
      }
    }
    
export default Main
