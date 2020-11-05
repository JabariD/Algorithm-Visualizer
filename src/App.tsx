import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** Components to render based on path */
import HomePage from './components/home/HomePage';
import ErrorRoute from './components/ErrorRoute';
import Algorithms from './components/algorithms/Algorithms';
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component = {HomePage} />
        <Route path="/algorithms" component = {Algorithms} />
        <Route path="/datastructures" component = {About} />
        <Route path="/contact" component = {Contact} />
        <Route component = {ErrorRoute}/>
      </Switch>
    </Router>
  );
}

const Contact = () => (
  <div>
    <h1>Contact!</h1>
  </div>
);

const About = () => (
  <div>
    <h1>About!</h1>
  </div>
);

export default App;
