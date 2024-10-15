import React, { useState } from 'react';
import './log.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json(); 

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      const { token } = data; 
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);

      // Check if the user is an admin
      if (email === 'dharun@admin.com' && password === '123') {
        window.location.href = '/adminOrders'; // Redirect to AdminOrders
      } else {
        window.location.href = '/home'; // Redirect to Home for normal users
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label htmlFor="email" className="login-label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password" className="login-label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="login-button-group">
          <button type="submit" className="login-button">Login</button>
          <button type="button" onClick={() => window.location.href = '/signup'} className="signup-link">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Login;