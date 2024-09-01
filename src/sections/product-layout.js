"use client"

import * as React from 'react';
import Loader from './Loader';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import MuiDialog from './dialog';
import ProductDetails from './product-details';
import { useContext } from 'react';
import { CartDataContext } from '@/common/cart-context';

function ProductLayout({ product, flag }) {

    const [productDetails, setProductDetails] = useState(null);

    const {cartData, setCartData} = useContext(CartDataContext);

    const handleClickProduct = async (item) => {
        setProductDetails(item);
    };

    const handleCloseAllModals = () => {
        setProductDetails(null);
    };

    const handleCartItems = (item)=>{
        setCartData([...cartData, {...item, quantity:1}])
    }

    if (product.length === 0) {
        return <Loader />;
    }
    return (
        <Container sx={{ marginTop: 10 }}>
            <Grid container spacing={2}>
                {product.length > 0 && product.map((item) => (
                    <Grid item xs={12} md={3} key={item?.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt={`${item?.category}...`}
                                height="140"
                                image={item?.image}
                            />
                            <CardContent>
                                <Typography gutterBottom sx={{ fontWeight: 600 }} component="div">
                                    {`${item?.title.slice(0, 50)}...`}
                                </Typography>
                                {flag && (
                                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                        {`${item?.description.slice(0, 100)}...`}
                                    </Typography>
                                )}
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleClickProduct(item)}>Explore</Button>
                            </CardActions>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button variant="contained" color="primary">
                                    Buy
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={()=>handleCartItems(item)}>
                                    Add To Cart
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {productDetails !== null && (
                <MuiDialog
                    heading={productDetails?.category.toUpperCase()}
                    // open={Boolean(productDetails)} 
                    handleClose={() => handleCloseAllModals()}
                    component={<ProductDetails params={productDetails} />}
                    maxWidth="xxl"
                />
            )}
        </Container>
    );
}

export default ProductLayout;
