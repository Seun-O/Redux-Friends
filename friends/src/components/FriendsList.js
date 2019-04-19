import React, { Component } from "react";
import { connect } from "react-redux";

import Friend from "../components/Friend";
import { getData } from "../actions/index";

class FriendsList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.friends.map(friend => (
          <Friend
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
          />
        ))}
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
