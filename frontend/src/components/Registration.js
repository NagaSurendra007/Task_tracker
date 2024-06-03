import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    // Here, you might want to send credentials to your backend for authentication
    onLogin(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div><input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /></div><div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button></div>
    </form>
  );
};

const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    // Here, you might want to send registration data to your backend
    onRegister(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div><input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /></div><div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /></div>
      <button type="submit">Register</button>
    </form>
  );
};

const LogoutButton = ({ onLogout }) => {
  return <button onClick={onLogout}>Logout</button>;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Here, you might authenticate with your backend
    // For simplicity, just setting isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegister = (username, password) => {
    // Here, you might register the user with your backend
    // For simplicity, just setting isLoggedIn to true after registration
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <LogoutButton onLogout={handleLogout} />
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <LoginForm onLogin={handleLogin} />
          <h2>Register</h2>
          <RegistrationForm onRegister={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;