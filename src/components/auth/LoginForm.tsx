import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <p>Log in</p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label>Username</label>
        <input
          className='auth-input'
          type='text'
          value={username}
          onChange={handleUsernameChange}
        />
        <label>Password</label>
        <input
          className='auth-input'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button type='submit' style={{ marginTop: 10 }}>
          Submit
        </button>
      </form>
      <p>
        Don't have an account? <Link to='/auth/register'>Register here.</Link>
      </p>
    </div>
  );
};

export default LoginForm;
