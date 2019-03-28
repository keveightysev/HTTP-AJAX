import React from 'react';

const UpdateForm = props => {
    return props.update ? (
        <form action="POST" onSubmit={e => props.handleUpdate(e, props.friend)}>
            <input type="text" name="name" value={props.friend.name} onChange={props.handleChange} />
            <input type="email" name="email" value={props.friend.email} onChange={props.handleChange} />
            <input type="number" name="age" value={props.friend.age} onChange={props.handleChange} />
            <button>Update</button>
        </form>
    )
    : null;
}

export default UpdateForm;