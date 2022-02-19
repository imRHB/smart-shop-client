import { useEffect, useState } from 'react';

const useCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, []);

    return category;
};

export default useCategory;