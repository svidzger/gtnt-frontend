import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const RegistrationForm = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, username: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Registration successful! User: ' + JSON.stringify(user));
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
      <p>Register</p>
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
          value={user.username}
          onChange={handleUsernameChange}
        />
        <label>Email</label>
        <input
          className='auth-input'
          type='email'
          value={user.email}
          onChange={handleEmailChange}
        />
        <label>Password</label>
        <input
          className='auth-input'
          type='password'
          value={user.password}
          onChange={handlePasswordChange}
        />
        <label>Confirm Password</label>
        <input
          className='auth-input'
          type='password'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <button type='submit' style={{ marginTop: 10 }}>
          Submit
        </button>
      </form>
      <p>
        Already registered? <Link to='/auth/login'>Login</Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
