import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import './App.css';
import Projects from './compnents/projects/projects';
import About from './compnents/about/about';
import Header from './compnents/header/header';
import WorkExperience from './compnents/work-experience/work-experience';

export default class App extends React.Component {
  render() {
    return (   
      <BrowserRouter>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
        <div className="App">
          {/* The Header is wrapped around a wrapper component is to give Header access to the current route path */}
          <Route path="/" component={Header} />
          <Route exact path="/" component={WorkExperience} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}
