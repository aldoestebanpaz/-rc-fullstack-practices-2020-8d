import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import sweetalert from 'sweetalert';
import auth from '../utils/auth';
import PrivateLink from '../components/PrivateLink';

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
      await axios.get('/api/v1/users/logout');
      auth.logout();
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
        auth.isAuthenticated() ?
          <button onClick={signOutHandler}>Sign Out</button> :
          <>
            <Link to="/users/signin">Sign In</Link>
            <Link to="/users/signup">Sign Up</Link>
          </>
      }
      <PrivateLink to="/article/create">Create</PrivateLink>
      <div className="card-columns">
        { cards }
      </div>
    </div>
  );
}

export default HomePage;
