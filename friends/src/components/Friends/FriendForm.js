import React from 'react';

const FriendForm = props => {
    function conditionalSubmit(e) {
        e.preventDefault();
        if (props.isUpdating) {
            props.updateFriendInfo();
        } else {
            props.addFriendToList();
        }
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         friend: {
    //             name: "",
    //             age: "", 
    //             email: ""
    //         }
    //     }
    // }

    // handleChange = e => {
    //     if (e.target.name === "age") {
    //         let numberValue = Number(e.target.value);

    //         this.setState({
    //             friend: {
    //                 ...this.state.friend,
    //                 [e.target.name]: numberValue
    //             }
    //         })
    //     } else {
    //         this.setState({
    //             friend: {
    //                 ...this.state.friend,
    //                 [e.target.name]: e.target.value
    //             }
    //         })
    //     }

    // }

    // addFriendToList = e => {
    //     e.preventDefault();
    //     this.props.addFriendToList(this.state.friend);
    //     this.setState({
    //         friend: {
    //             name: "",
    //             age: "",
    //             email: ""
    //         }
    //     }, console.log("addFriendToList in FriendForm", this.state))
        
    // }
  
        return (
            <div>
                {/* <form onSubmit={this.addFriendToList}> */}
                <form onSubmit={conditionalSubmit}>
                    <input type="text" value={props.friend.name} name="name" placeholder="Name" onChange={props.handleChange}></input>
                    <input type="number" value={props.friend.age} name="age" placeholder="Age" onChange={props.handleChange}></input>
                    <input type="email" value={props.friend.email} name="email" placeholder="Email" onChange={props.handleChange}></input>
                    <button>
                        {props.isUpdating ? "Update Info" : "Add Friend"}
                    </button>
                </form>
            </div>
        );
    

}

export default FriendForm;