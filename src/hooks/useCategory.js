import { useEffect, useState } from 'react';

const useCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://smart-shop-pos.herokuapp.com/category')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, []);

    return category;
};

export default useCategory;