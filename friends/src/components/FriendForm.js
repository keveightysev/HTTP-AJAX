import React from 'react';

const FriendForm = props => {
    return (
        <form action="POST" onSubmit={props.handleSubmit}>
            <input type="text" name="name" value={props.name} onChange={props.handleChange} />
            <input type="email" name="email" value={props.email} onChange={props.handleChange} />
            <input type="text" name="age" value={props.age} onChange={props.handleChange} />
            <button>Add Friend</button>
        </form>
    );
}

export default FriendForm;