import React from "react";
import { Link, Route } from "react-router-dom";
import styled from 'styled-components';

import Friend from "./Friend";
import FriendDetails from "./FriendDetails";

const FriendsListDiv = styled.div`
border: 1px solid purple;
min-width: 700px;
`;

const FriendWrapperDiv = styled.div`
background: whitesmoke;
padding: 10px;
margin-bottom: 10px;

&:hover {
  cursor: pointer;
}
`;

const FriendsList = props => {
  console.log("FriendsList props", props);
  return (
    <FriendsListDiv>
      {props.friends.map(friend => (
        <FriendWrapperDiv key={friend.id}>
          <Link to={`/${friend.id}`}>
            <Friend friend={friend} key={friend.id} />
          </Link>
          <Route path={`/${friend.id}`} render={properties => <FriendDetails {...properties} populateForm={props.populateForm} deleteFriend={props.deleteFriend} friend={friend} key={friend.id} />} />
        </FriendWrapperDiv>
      ))}
    </FriendsListDiv>
  );
};

export default FriendsList;
