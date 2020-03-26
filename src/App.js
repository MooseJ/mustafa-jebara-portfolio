import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main'

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
