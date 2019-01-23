import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
