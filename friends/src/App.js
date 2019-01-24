import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import styled from "styled-components";

import FriendsList from "./components/Friends/FriendsList";
import FriendForm from "./components/Friends/FriendForm";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";

const AppWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

const DataWrapperDiv = styled.div`
  display: flex;
`;


class App extends Component {
  state = {
    friends: [],
    error: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
           friends: res.data 
        }, console.log("CDM", res))
    })
      .catch(() => this.setState({ error: "There has been an error." }));
  }

  addFriendToList = friend => {
    axios.post("http://localhost:5000/friends", friend)
    .then(res => {
      console.log("addFriendToList in App", res);
      this.updateStateWithNewData();
    })
    .catch(err => console.log(err))
  }

  updateStateWithNewData() {
    axios.get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
          friends: res.data,
          error: ""
          },
          console.log("updateStateWithNewData", res)
        )
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: "There has been an error."
        })
      });
  }

  render() {
    console.log("render in App", this.state);
    return (
      <AppWrapperDiv>
        {this.state.error && `${this.state.error}`}
        <div>
          <Navigation />
        </div>

        <DataWrapperDiv>
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
              render={props => <FriendForm {...props} addFriendToList={this.addFriendToList} />}
            />
          </div>
        </DataWrapperDiv>
      </AppWrapperDiv>
    );
  }
}

export default App;
