import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Friends from "./components/Friends";
import Home from "./components/Home";
import Friend from "./components/Friend";
import NavBar from "./components/NavBar";
import PopUpForm from "./components/PopUpForm";
import EditFriend from "./components/EditFriend";

class App extends Component {
  state = {
    friends: [],
    aFriend: {
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
      aFriend: { ...this.state.aFriend, [e.target.name]: e.target.value }
    });
  };

  addFriend = e => {
    e.preventDefault();
    if (
      this.state.aFriend.name !== "" &&
      this.state.aFriend.age !== "" &&
      this.state.aFriend.email !== ""
    ) {
      axios
        .post(`http://localhost:5000/friends`, this.state.aFriend)
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

  removeFriend = (e, id) => {
    e.stopPropagation();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  populateState = id => {
    const friendData = this.state.friends.find(
      friend => String(friend.id) === String(id)
    );

    this.setState({
      aFriend: friendData
    });

    this.props.history.push(`/edit-friend/${id}`);
  };

  updateFriend = _ => {
    axios
      .put(
        `http://localhost:5000/friends/${this.state.aFriend.id}`,
        this.state.aFriend
      )
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push(`/friends/${this.state.aFriend.id}`);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          exact
          path="/friends"
          render={props => (
            <Friends
              {...props}
              friends={this.state.friends}
              removeFriend={this.removeFriend}
            />
          )}
        />
        <Route
          path="/friends/:friendId"
          render={props => (
            <Friend
              {...props}
              friends={this.state.friends}
              populateState={this.populateState}
            />
          )}
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
                  aFriend={this.state.aFriend}
                  addFriend={this.addFriend}
                />
              </>
            );
          }}
        />
        <Route
          path="/edit-friend/:friendId"
          render={props => (
            <EditFriend
              {...props}
              friends={this.state.friends}
              aFriend={this.state.aFriend}
              handleChange={this.handleChange}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
