import React from 'react';

function Message(props) {

    console.log(props);
    const userName = props.name
    let secondWord = ""
    if (props.newUser) {
        secondWord = "abroad"
    } else {
        secondWord = "back"
    }
    let msg = `Welcome ${secondWord}, ${userName}`
    
    return (
        <div>
            <h2>Welcome {props.newUser ? "abord" : "back"}, {props.name}</h2>
            <h3>{msg}</h3>
            <p>My name is {props.name}</p>
            <p>the number after 3 is {props.num + 2}</p>
            <p>My name is {props.name}</p>
        </div>
    );
}

export default Message;