import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PhotosPage from './pages/PhotosPage';
import AboutMe from './pages/AboutMe';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <Switch>
            <Route path="/photos/:photoid" component={PhotosPage} />
            <Route path="/photos" component={PhotosPage} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
