import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <div className="ui container">
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
