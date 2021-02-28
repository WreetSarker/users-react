import React from 'react';

const Collection = (props) => {
    // console.log(props.friends[0].salary);
    const salarySum = props.friends.reduce((total, current) => total + parseFloat((current.salary).slice(1)), 0)
    // console.log(parseFloat((props.friends[0].salary).slice(1)));
    return (
        <div>
            <h2>Total added friends: {props.friends.length}</h2>
            <p>Total salary of added friends: {salarySum}</p>
        </div>
    );
};

export default Collection;