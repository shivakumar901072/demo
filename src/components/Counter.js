import React,{useState} from 'react';
import Counter1 from './Counter1';


function Counter() {
    const initialCount =0;
     const [count, setCount] = useState(initialCount);

   const  Increment =() => {
        setCount(count+1);

    }
    const Decrement =() => {
        setCount(count-1);

    }
    const Reset =() => {
        setCount(initialCount);

    }


    return (
        <div>
            <div>Global Counter{count}</div>
            <Counter1 count={count} Increment={Increment} Decrement={Decrement} Reset={Reset} />
            <Counter1 count={count} Increment={Increment} Decrement={Decrement} Reset={Reset} />
        </div>

    )
}
export default Counter;