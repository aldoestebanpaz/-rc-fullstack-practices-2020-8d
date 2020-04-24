import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function AboutPage(props) {

  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>About Me</h1>
      <p>The current location is {location.pathname}</p>
      <button onClick={handleClick}>Go to home</button>
    </div>
  );
}

export default AboutPage;
