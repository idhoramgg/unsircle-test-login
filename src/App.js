import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

//comp
// import Header from './components/header'
import Home from './components/Home'
import Login from './components/Login'
import Homepage from './components/Homepage'

function App() {
  return (
    <Router>
      <Route  path="/dashboard" component={Home}/>
       <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login}/>
    </Router>
    
  );
}

export default App;
