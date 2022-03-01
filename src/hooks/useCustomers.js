import { useEffect, useState } from 'react';

const useCustomers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('https://smart-shop-pos.herokuapp.com/customers')
            .then(res => res.json())
            .then(data => setCustomers(data));
    }, []);

    return customers;
};

export default useCustomers;