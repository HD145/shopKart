'use client'

import { axiosInstance } from '@/common/axios';
import { CartDataContext } from '@/common/cart-context';
import Loader from '@/sections/Loader'
import ProductLayout from '@/sections/product-layout';
import { Container } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'

const CategoryView = ({ category, id = null }) => {
    console.log(category);

    const [data, setData] = useState([])

    const val = useContext(CartDataContext);

    console.log("cart", val);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axiosInstance(`https://fakestoreapi.com/products/category/${category}`, {});

                let filteredData = response?.data ?? [];
                if (id) {
                    filteredData = filteredData.filter((product) => product.id !== id);
                }
                setData(filteredData);

            } catch (error) {
                console.error("Error in loading:", error);
            }
        }
        loadData();
    }, [])
    return (
        <Container>
            <ProductLayout product={data} flag={id ? false : true} />
        </Container>
    )
}

export default CategoryView