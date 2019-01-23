import React, { Component } from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';

import './App.css';

class App extends Component {
  state = {
    friends: [],
    error: ""
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friend')
      .then(res => this.setState({friends: res.data}))
      .catch(err => this.setState({error: "There has been an error."}));
  }
  render() {
    console.log(this.state.error);
    return (
      <div className="App">
      {this.state.error && `${this.state.error}`}
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
