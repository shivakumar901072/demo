import React from 'react';


function Counter1(props) {
   
    return (
        <div>
            Counter1: {props.count}
            <button onClick={props.Increment}>Increment</button>
            <button onClick={props.Decrement}>Decrement</button>
            <button onClick={props.Reset}>Reset</button>
        </div>

    )
}
export default Counter1;