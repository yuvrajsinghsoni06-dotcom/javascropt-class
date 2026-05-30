import React , {useState} from 'react';


function Counter(){

    // const [name, setName] = useState("Guest");
    // const [age, setAge] = useState(0);
    // const [isEmployeed, setEmployeed] = useState(true);
    const [count, setCount] = useState(0);

    const increaingfunction = ()=> {
        setCount(count + 1);
    }
    const decreasingFunction = ()=> {
        setCount(count - 1)
    }
    const reset = ()=> {
        setCount(0)
    }

    return(
        <div className="container">
            <p className="display">Count : {count}</p>
            <button onClick={increaingfunction}>max+</button>
            <button onClick={decreasingFunction}>min-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    

    
}

export default Counter