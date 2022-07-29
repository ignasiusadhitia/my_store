import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "../context/AuthContext";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.login(this.state);
  };

  render() {
    if (this.props.isLoggedIn) return <Redirect push to="/dashboard" />;
    return (
      <main className="mystore-app__form">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            placeholder="email"
            name="email"
            required
          />

          <input
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            placeholder="password"
            name="password"
            required
          />

          <input className="form__submit-button" type="submit" value="Login" />
        </form>
        <span>Don't have an account? Register</span>
      </main>
    );
  }
}

export default withAuth(Login);
