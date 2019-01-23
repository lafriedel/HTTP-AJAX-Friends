import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: "",
                age: "", //state currently updates this as a string
                email: ""
            }
        }
    }

    handleChange = e => {
        if (e.target.name === "age") {
            console.log("got it");
            let numberValue = Number(e.target.value);

            this.setState({
                friend: {
                    ...this.state.friend,
                    [e.target.name]: numberValue
                }
            })
        } else {
            this.setState({
                friend: {
                    ...this.state.friend,
                    [e.target.name]: e.target.value
                }
            })
        }

    }

    addFriendToList = e => {
        e.preventDefault();
        this.props.addFriendToList(this.state.friend);
        this.setState({
            friend: {
                name: "",
                age: "",
                email: ""
            }
        })
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addFriendToList}>
                    <input type="text" value={this.state.friend.name} name="name" placeholder="Name" onChange={this.handleChange}></input>
                    <input type="number" value={this.state.friend.age} name="age" placeholder="Age" onChange={this.handleChange}></input>
                    <input type="email" value={this.state.friend.email} name="email" placeholder="Email" onChange={this.handleChange}></input>
                    <button>Add friend</button>
                </form>
            </div>
        );
    }

}

export default FriendForm;