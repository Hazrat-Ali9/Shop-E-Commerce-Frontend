import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
      fetch("http://localhost:9000/product/")
        .then((res) => res.json())
        .then((data) => {
          setMenu(data);
        });
    }, []);
    return [menu,setMenu];
};
// Use Product
export default useProduct;