import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'

export default class App extends React.Component {
  render() {
    return (  
      <>
        <Header></Header>
        <Main></Main>
      </> 
    );
  }
}
