import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../utils/auth';
import sweetalert from 'sweetalert';

function HomePage() {

  const [ articles, setArticles ] = useState([]);
  const [ forceUpdate, setForceUpdate ] = useState(false);

  const getArticles = useCallback(async () => {
    const response = await axios.get('/api/v1/articles');
    setArticles(response.data);

  }, [])

  useEffect(() => {
    if (forceUpdate) {
      setForceUpdate(false);
    }
  }, [forceUpdate]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  const signOutHandler = async () => {
    try {
      await axios.get('/api/v1/users/logout',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
      );
      localStorage.removeItem('token');
      setForceUpdate(true);
    } catch (error) {
      sweetalert("ERROR", "Something went wrong", "error");
    }
  }

  const cards = articles.map(a =>
    <div key={a._id} className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title"><Link to={`/article/${a._id}`} >{a.title}</Link></h5>
        <p className="card-text">{a.body}</p>
      </div>
    </div>
  );

  return (
    <div>
      <h1>Home Page</h1>
      {
        Auth.isAuthenticated() ?
          <button onClick={signOutHandler}>Sign Out</button> :
          <>
            <Link to="/users/signin">Sign In</Link>
            <Link to="/users/signup">Sign Up</Link>
          </>
      }
      <Link to="/article/create">Create</Link>
      <div className="card-columns">
        { cards }
      </div>
    </div>
  );
}

export default HomePage;
