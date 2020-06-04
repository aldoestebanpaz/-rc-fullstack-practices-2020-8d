import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import sweetalert from 'sweetalert';
import auth from '../utils/auth';

function SigninPage() {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const history = useHistory();

  const signInHandler = async () => {
    if (username.trim() === '') {
      sweetalert("ERROR", "The username is empty", "error");
      return;
    }

    if (password.trim() === '') {
      sweetalert("ERROR", "The password is empty", "error");
      return;
    }

    if (password.trim().length < 8 || password.trim().length > 32) {
      sweetalert("ERROR", "Allowed characters range for password must be from 8 to 32 chars", "error");
      return;
    }

    try {
      const response = await axios.post('/api/v1/users/login', {
        username: username.trim(),
        password: password.trim()
      });
      auth.login(response.data.token);
      history.push('/');
    } catch (error) {
      sweetalert("ERROR", "Something went wrong", "error");
    }
  }

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={e => setUsername(e.target.value)} value={username} />
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} />
        <button onClick={signInHandler}>Sign In</button>
      </div>
    </div>
  );
}

export default SigninPage;
