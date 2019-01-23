import React, { Component } from "react";
import {Route} from 'react-router-dom';
import axios from "axios";

import "./App.css";

import Friends from './components/Friends';
import Home from './components/Home';

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
        <Route exaxt path='/' render={props => <Home {...props} />} />
      </div>
    );
  }
}

export default App;
