import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App() {
  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return { state };
}

export default connect(mapStateToProps)(App);
