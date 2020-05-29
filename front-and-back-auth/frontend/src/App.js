import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import CreateEditArticlePage from './pages/CreateEditArticlePage'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <Switch>
            <Route path="/article/create" exact component={CreateEditArticlePage} />
            <Route path="/article/edit/:id" component={CreateEditArticlePage} />
            <Route path="/article/:id" component={ArticlePage} />
            <Route path="/users/signup" component={SignupPage} />
            <Route path="/users/signin" component={SigninPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
