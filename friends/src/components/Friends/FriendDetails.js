import React from "react";
import styled from 'styled-components';

const FriendDetailWrapper = styled.div`
display: flex;
justify-content: space-between;
`;

const FriendInfo = styled.div`
margin-left: 10px;
`;

const FriendButtons = styled.button`
margin-left: 15px;
cursor: pointer;

&:hover {
    background: green;
}
`;

const DeleteButton = styled(FriendButtons)`
&:hover {
    background: red;
}
`;


const FriendDetails = props => {
  // let details = props.friend.match.params.id;
  console.log("FriendDetails props", props);
  return (
    <FriendDetailWrapper>
      <FriendInfo>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
      </FriendInfo>
      <div>
        <FriendButtons onClick={e => props.populateForm(e, props.friend.id)}>
          Update Info
        </FriendButtons>
        <DeleteButton onClick={e => props.deleteFriend(e, props.friend.id)}>
          Delete Friend
        </DeleteButton>
      </div>
    </FriendDetailWrapper>
  );
};

export default FriendDetails;
