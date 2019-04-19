import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <h1>App</h1>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected </Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
