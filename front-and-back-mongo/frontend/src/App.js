import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
