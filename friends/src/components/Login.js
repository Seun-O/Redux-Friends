import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.credentials);
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/protected"));
  };

  render() {
    return (
      <div className="ui container">
        <form className="ui form" onSubmit={this.handleLogin}>
          <div className="field">
            <label>Username</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
            />
          </div>
          <div>
            <button type="submit" value="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapProps = state => {
  return state;
};

export default connect(
  mapProps,
  { login }
)(Login);
