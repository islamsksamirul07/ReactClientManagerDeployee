import React, { useState } from 'react';
import axios from 'axios';
import urls from "../component/base_url_api";
import { Button } from 'react-bootstrap';

const LoginAuth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${urls.base_url}/login`, {
        username,
        password
      });

      console.log('Login success:', response);
      // Handle success: redirect or update state
    } catch (error) {
      console.error('Login error:', error);
      // Handle error: show message, clear fields, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" color="success">Login</Button>
    </form>
  );
};

export default LoginAuth;
