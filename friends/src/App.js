import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Friends from "./components/Friends";
import Home from "./components/Home";
import Friend from "./components/Friend";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          exact
          path="/friends"
          render={props => <Friends {...props} friends={this.state.friends} />}
        />
        <Route
          path="/friends/:friendId"
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
