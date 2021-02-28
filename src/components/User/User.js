import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const { name, gender, email, phone, salary, image } = props.user;
    return (
        <div className="container-user">
            <div className="users-image">
                <img src={image} alt="" />
            </div>
            <div className="users-detail">
                <h3>Name: {name}</h3>
                <h5>Email: {email}</h5>
                <p>Gender: {gender}</p>
                <p>Phone: {phone}</p>
                <p><small>Salary: {salary}</small></p>
                <button className="add-btn" onClick={() => props.handleAddFriends(props.user)}><FontAwesomeIcon icon={faPlusSquare} /> Add Friend</button>
            </div>
        </div>
    );
};

export default User;