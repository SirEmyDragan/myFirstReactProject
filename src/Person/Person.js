import React from 'react';
// import Radium from 'radium';

import './Person.css';

const person = (props) => { // person component
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return (
        // <div className = "Person" style = {style}>
        <div className = "Person" >
            <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p> {/* any text between opening and closing tags of Person */}
            <input type = "text" onChange = {props.changed} value = {props.name} />
        </div>
    )        
};

// export default Radium(person);
export default person;