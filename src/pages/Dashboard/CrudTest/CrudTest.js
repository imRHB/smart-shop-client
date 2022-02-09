import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Container } from "react-bootstrap";

const CrudTest = () => {
    const [users, setUsers] = useState([]);

    const [name, setName] = useState('');

    console.log(users);

    /* useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data);
            })
    }, []); */

    const handleOnBlur = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const handleAdd = () => {
        console.log('clicked');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.value);
    };

    return (
        <div>
            <Container>
                <h1 className="text-center my-5 fw-bold">CURD Operation Test</h1>

                {
                    users.map(user => <h4>
                        {user.name}
                    </h4>)
                }

                <div>
                    <p>{name}</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" onBlur={handleOnBlur} />
                    <button type="submit">ADD</button>
                </form>
            </Container>
        </div>
    );
};

export default CrudTest;