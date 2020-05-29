import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import sweetalert from 'sweetalert';

function SignupPage() {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ repeatPassword, setRepeatPassword ] = useState('');
  const history = useHistory();

  const signUpHandler = async () => {

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

    if (password.trim() !== repeatPassword.trim()) {
      sweetalert("ERROR", "The password does not match", "error");
      return;
    }
    
    try {
      await axios.post('/api/v1/users', {
        username: username.trim(),
        password: password.trim()
      });
      history.push('/users/signin');
    } catch (error) {
      sweetalert("ERROR", "Something went wrong", "error");
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={e => setUsername(e.target.value)} value={username} />
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} />
        <br/>
        <label htmlFor="repeat_password">Repeat the password</label>
        <input type="password" name="repeat_password" onChange={e => setRepeatPassword(e.target.value)} value={repeatPassword} />
        <button onClick={signUpHandler}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignupPage;
