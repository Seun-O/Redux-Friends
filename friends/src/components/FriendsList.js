import React, { Component } from "react";
import { connect } from "react-redux";

import Friend from "../components/Friend";
import { getData } from "../actions/index";
import Form from "./Form";

class FriendsList extends Component {
  render() {
    return (
      <div className="ui grid">
        <Form />
        <div className="twelve wide column">
          <div className="ui three stackable cards">
            {this.props.friends.map(friend => (
              <Friend
                key={friend.id}
                name={friend.name}
                age={friend.age}
                email={friend.email}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getData();
  }
}

const mapProps = state => {
  return { friends: state.friends };
};

export default connect(
  mapProps,
  { getData }
)(FriendsList);
