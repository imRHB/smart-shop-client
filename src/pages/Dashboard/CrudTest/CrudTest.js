import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from "react-bootstrap";
import useProducts from "./CustomTestHooks/useProducts";

const CrudTest = () => {
    const products = useProducts();
    console.log(products);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/designations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

    };


    return (
        <div>
            <Container>
                <h1 className="text-center my-5 fw-bold">CURD Operation Test</h1>

                <ul>
                    {
                        products.map(product => <li>
                            {product.name}
                        </li>)
                    }
                </ul>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input type="text" {...register("item", { required: true })} placeholder="Expense Item" /> */}
                    {/* <select {...register("item")}>
                        <option value="">Select Expanse...</option>
                        <option value="lunch">Lunch</option>
                        <option value="snacks">Snacks</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="electricity">Electricity</option>
                        <option value="salary">Salary</option>
                        <option value="Advanture">Bounus</option>
                        <option value="Advanture">Food</option>
                        <option value="Advanture">Shop</option>
                        <option value="Advanture">Water</option>
                        <option value="Advanture">Gass</option>
                    </select> */}
                    <br />
                    {/* <input type="date" {...register("date")} placeholder="Date" /> */}
                    <br />
                    <input type="text" {...register("designation", { required: true })} placeholder="Designation Name" />
                    <br />
                    <input type="text" {...register("details", { required: true })} placeholder="Designation Details" />
                    <br />
                    {/* <input type="number" {...register("balance")} placeholder="Balance" /> */}
                    <br />
                    <input type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default CrudTest;