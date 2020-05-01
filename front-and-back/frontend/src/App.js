import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    axios.get('/v1/users')
      .then(res => {
        console.log(res);
        setResponseData(res.data);
      });
  }, []);

  return (
    <div className="App">
      <p>Response:</p>
      <pre>
        {JSON.stringify(responseData, 2)}
      </pre>
    </div>
  );
}

export default App;
