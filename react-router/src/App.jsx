import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Exercise1 from './pages/exercises/Exercise1';
import Exercise2 from './pages/exercises/Exercise2';
import Exercise3 from './pages/exercises/Exercise3';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Switch>
          <Route path="/ejercicios/1" component={Exercise1} />
          <Route path="/ejercicios/2" component={Exercise2} />
          <Route path="/ejercicios/3" component={Exercise3} />
          <Route path="/aboutme" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
