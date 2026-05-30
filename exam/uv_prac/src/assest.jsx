// 1. FIXED: Imported useEffect
import React, { useState, useEffect } from "react";

function Asset() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error));
    }, []); // 2. FIXED: Added the empty dependency array here to stop the infinite loop!

    return (
        <div>
            <h2>Users directory</h2>
            <ul>
                {/* 3. FIXED: Changed parameter to singular 'user' to match the usage inside */}
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>UserName:</strong> {user.username} | <strong>Email: </strong> {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Asset;