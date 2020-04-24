import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App(props) {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link><br/>
        <Link to="/aboutme">About Me</Link>
        <hr/>
        <Switch>
          <Route path="/aboutme" component={AboutPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
