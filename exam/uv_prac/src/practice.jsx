import React, { useState, useEffect } from "react";

function Practice() {
    // 1. Store the fetched data using useState
    const [users, setUsers] = useState([]);
    
    // NEW: Add a state to track loading
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        // Fetch data from the API
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setIsLoading(false); // Turn off loading once data arrives!
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false); // Turn off loading even if there's an error
            });
    }, []);

    // 2. Display "Loading..." while data is being fetched
    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    // 3 & 4. Display the received data in a list format
    return (
        <div>
            <h2>User Directory</h2>
            <ul>
                {/* FIXED: Changed { } to ( ) so it actually returns the <li> */}
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>Username: </strong> {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Practice;