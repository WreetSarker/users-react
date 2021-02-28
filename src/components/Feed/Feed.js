import React, { useEffect, useState } from 'react';
import usersData from '../../users.json';
import Collection from '../Collection/Collection';
import User from '../User/User';
import './Feed.css';

const Feed = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(usersData)
    }, [])
    const [friends, setFriends] = useState([]);
    const handleAddFriends = (friend) => {
        const newFriends = [...friends, friend]
        setFriends(newFriends);
    }
    return (
        <div className="container">
            <div className="users-container">
                {
                    users.map(user => <User handleAddFriends={handleAddFriends} key={user.id} user={user}></User>)
                }
            </div>
            <div className="collection-container">
                <Collection friends={friends}></Collection>
            </div>
        </div>

    );
};

export default Feed;