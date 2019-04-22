import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions/index";

class Form extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.addFriend(friend);
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    console.log(this.props.friends);
    return (
      <div className="four wide column">
        <form onSubmit={this.handleSubmit} className="ui form" action="">
          <div className="field">
            <input
              onChange={this.handleChange}
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
            />
          </div>
          <div className="field">
            <input
              onChange={this.handleChange}
              name="age"
              type="number"
              placeholder="Age"
              value={this.state.age}
            />
          </div>
          <div className="field">
            <input
              onChange={this.handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
            />
          </div>
          <div className="field">
            <button className="ui fluid button black" type="submit">
              Post
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
  { addFriend }
)(Form);
