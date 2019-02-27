import React from 'react';

import Friend from './Friend';

const FriendList = props => {
    return (
        <>
        {props.friends.map(friend => <Friend {...friend} key={friend.id} />)}
        </>
    );
}

export default FriendList;