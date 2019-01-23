import React from 'react';

const FriendForm = () => {
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder="Name"></input>
                <input type="number" name="age" placeholder="Age"></input>
                <input type="email" name="email" placeholder="Email"></input>
                <button>Add friend</button>
            </form>
        </div>
    );
}

export default FriendForm;