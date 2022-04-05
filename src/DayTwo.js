import React from 'react';

function DayTwo(props) {

    // grab the function from props here and use it
    props.myFunction()
    return (
        <div>
            <h1>Day Two Component:</h1>
            <h3>{props.myArray}</h3>
            {/* <h3>{props.myObject}</h3> No No!  */}
            <h3>{JSON.stringify(props.myObject)}</h3>
        </div>
    );
}

export default DayTwo;