'use client'

import { axiosInstance } from '@/common/axios'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Categories = () => {

    const [categories, setCategories] = useState([])
    const router = useRouter();

    const handleRouting = (category)=>{
        router.push(`/${category}`)
    }
    useEffect(() => {
        const loadCategories = async () => {
            try {
                const response = await axiosInstance("https://fakestoreapi.com/products/categories", {});
                console.log(response);

                const categoryData = response?.data.reduce((acc, item) => {
                    let obj = {};

                    if (item === "electronics") {
                        obj = { id: item, imageUrl: "images/electronics.jpeg", content: "Experience Innovation with Every Purchase at ShopKart!", heading: "Electronics" };
                    } else if (item === "men's clothing") {
                        obj = { id: item, imageUrl: "images/men-clothing.jpeg", content: "Elevate Your Style – Unleash the Best Version of You!", heading: "Mens Clothing" };
                    } else if (item === "women's clothing") {
                        obj = { id: item, imageUrl: "images/women-clothing.jpeg", content: "Empower Your Wardrobe – Embrace Your Unique Style!", heading: "Womens Clothing" };
                    } else if (item === "jewelery") {
                        obj = { id: item, imageUrl: "images/jewellery.webp", content: "Timeless Beauty, Endless Shine – Discover Your Perfect Piece!", heading: "Jewellery" };
                    }

                    if (Object.keys(obj).length !== 0) {
                        acc.push(obj);
                    }

                    return acc;
                }, []);

                setCategories(categoryData)

            } catch (error) {
                console.error("Error loading categories:", error);
            }
        }
        loadCategories();
    }, [])

    useEffect(() => {
        if (categories.length > 0) {

        }
    }, [categories])

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h4' sx={{ fontWeight: 800 }}>
                    Shop by Category
                </Typography>
            </Box>

            <Container sx={{marginY:2}}>
                <Grid container spacing={2}>
                    {
                        categories.length > 0 && categories.map((item) => {
                            return (
                                <Grid item xs={12} md={3} key={item?.id}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            alt={item?.id}
                                            height="140"
                                            image={item?.imageUrl}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item?.heading}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {item?.content}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={()=>{
                                                handleRouting(item?.id)
                                            }}>Explore</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>

        </>
    )
}

export default Categories;