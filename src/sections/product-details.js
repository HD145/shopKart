'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import CategoryView from '@/components/category/category-view';

export default function ProductDetails({ params }) {
    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                    <Box
                        component="img"
                        src={params?.image} // Replace with your image URL
                        alt="Example Image"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography variant="h4" component="h1">
                            {params?.title}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {params?.description}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="contained" color="primary" onClick={()=>console.log(params)
                            }>
                                Buy
                            </Button>
                            <Button variant="outlined" color="secondary">
                                Add To Cart
                            </Button>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

            <Divider sx={{marginY:2}} />
            <Typography variant='h6' fontWeight="600">Related Products</Typography>
            <CategoryView category ={params?.category} id = {params?.id}/>
        </Box>
    );
}
