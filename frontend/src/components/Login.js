import React, { Component } from 'react';
import axios from 'axios';
import './Login.css'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    try {
      const response = await axios.post('http://localhost:5000/api/pro/login', {
        username: username,
        password: password
      });
      console.log('logged:', response.data);
      this.setState({ username: '', password: '' });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

class LogoutButton extends Component {
  render() {
    const { onLogout } = this.props;
    return <button onClick={onLogout}>Logout</button>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <p>Welcome! You are logged in.</p>
            <LogoutButton onLogout={this.handleLogout} />
          </div>
        ) : (
          <LoginForm onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default LoginForm;
