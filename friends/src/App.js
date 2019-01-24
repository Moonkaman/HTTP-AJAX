import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Friends from "./components/Friends";
import Home from "./components/Home";
import Friend from "./components/Friend";
import NavBar from "./components/NavBar";
import PopUpForm from "./components/PopUpForm";

class App extends Component {
  state = {
    friends: [],
    newFriend: {
      name: "",
      age: "",
      email: ""
    }
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

  handleChange = e => {
    this.setState({
      newFriend: { ...this.state.newFriend, [e.target.name]: e.target.value }
    });
  };

  addFriend = e => {
    e.preventDefault();
    if (
      this.state.newFriend.name !== "" &&
      this.state.newFriend.age !== "" &&
      this.state.newFriend.email !== ""
    ) {
      axios
        .post(`http://localhost:5000/friends`, this.state.newFriend)
        .then(res => {
          this.setState({
            friends: res.data
          });
          this.props.history.push("/friends");
        })
        .catch(err => console.log(err));
    } else {
      alert("Please fill out all fields on the form");
    }
  };

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
        <Route
          path="/add-friend"
          render={props => {
            return (
              <>
                <Friends {...props} friends={this.state.friends} />
                <PopUpForm
                  {...props}
                  handleChange={this.handleChange}
                  newFriend={this.state.newFriend}
                  addFriend={this.addFriend}
                />
              </>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
