import React from 'react';

const FriendDetails = props => {
    // let details = props.friend.match.params.id;
    console.log("FriendDetails props", props)
    return (
        <div>
            {props.friend.age}
            {props.friend.email}
        </div>
    )
}

export default FriendDetails;