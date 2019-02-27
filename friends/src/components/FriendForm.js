import React from 'react';

const FriendForm = props => {
    return (
        <form action="">
            <input type="text" name="name" value={props.name} onChange={props.handleChange} />
            <input type="email" name="email" value={props.email} onChange={props.handleChange} />
            <input type="number" name="age" value={props.age} onChange={props.handleChange} />
            <button>Add Friend</button>
        </form>
    );
}

export default FriendForm;