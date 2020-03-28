import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';

export default class App extends React.Component {
  render() {
    return (  
      <>
        <Header/>
        <Main/>
        <About/>
      </> 
    );
  }
}
