import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import styled from "styled-components";

import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

import "./App.css";

const AppWrapperDiv = styled.div`
  display: flex;
  border: 1px solid red;
`;

class App extends Component {
  state = {
    friends: [],
    error: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => this.setState({ error: "There has been an error." }));
  }
  render() {
    console.log(this.state.friends);
    return (
      <AppWrapperDiv>
        {this.state.error && `${this.state.error}`}
        {/* <FriendsList friends={this.state.friends} /> */}
        <div>
          <Route
            path="/"
            render={props => (
              <FriendsList {...props} friends={this.state.friends} />
            )}
          />
        </div>
        <div>
          <Route
            path="/addfriend"
            render={props => <FriendForm {...props} />}
          />
        </div>
      </AppWrapperDiv>
    );
  }
}

export default App;
