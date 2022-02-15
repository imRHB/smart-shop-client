import { useEffect, useState } from 'react';

const useSuppliers = () => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/suppliers')
            .then(res => res.json())
            .then(data => setSuppliers(data));
    }, []);

    return suppliers;
};

export default useSuppliers;