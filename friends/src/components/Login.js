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
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() =>
      setTimeout(() => {
        this.props.history.push("/protected");
      }, 2000)
    );
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui text container">
          <div className="ui stacked segment">
            <form
              className={`ui large form ${this.props.status}`}
              onSubmit={this.handleLogin}
            >
              <div className="field">
                <div className="ui left icon input">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.credentials.username}
                    required
                  />
                  <i className="user icon" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <input
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.credentials.password}
                    required
                  />
                  <i className="lock icon" />
                </div>
              </div>
              <div className="ui success message">
                <div className="header">Form Completed</div>
                <p>You're all signed up for the newsletter.</p>
              </div>
              <div className="ui error message">
                <div className="header">Action Forbidden</div>
                <p>
                  You can only sign up for an account once with a given e-mail
                  address.
                </p>
              </div>
              <div>
                <button className="ui fluid black button" type="submit">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapProps = state => {
  return {
    status: state.status
  };
};

export default connect(
  mapProps,
  { login }
)(Login);
