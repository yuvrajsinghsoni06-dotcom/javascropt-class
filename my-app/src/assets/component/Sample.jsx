import React from "react";

function Sample({ count, setCount }) {
    return (
        <div>
            <h2>Trending Headlines</h2>
            <button 
                className="counter" 
                onClick={() => setCount((prevCount) => prevCount + 2)}
            >
                count is {count}
            </button>
        </div>
    );
}

export default Sample;<q></q>