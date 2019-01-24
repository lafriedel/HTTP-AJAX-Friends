import React from "react";
import { Link, Route } from "react-router-dom";
import Friend from "./Friend";
import FriendDetails from "./FriendDetails";

const FriendsList = props => {
  console.log("FriendsList props", props);
  return (
    <div>
      {props.friends.map(friend => (
        <React.Fragment key={friend.id}>
          <Link to={`/${friend.id}`}>
            <Friend friend={friend} key={friend.id} />
          </Link>
          <Route path={`/${friend.id}`} render={properties => <FriendDetails {...properties} populateForm={props.populateForm} friend={friend} key={friend.id} />} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default FriendsList;
