import { useEffect, useState } from 'react';

const useSuppliers = () => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetch('https://smart-shop-pos.herokuapp.com/suppliers')
            .then(res => res.json())
            .then(data => setSuppliers(data));
    }, []);

    return suppliers;
};

export default useSuppliers;