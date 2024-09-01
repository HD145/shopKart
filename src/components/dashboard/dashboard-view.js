'use client'

import { Box, Button, Grid, Typography } from '@mui/material'
import React, { Suspense, useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { axiosInstance, endpoints, url } from '@/common/axios'
import dynamic from 'next/dynamic'
import Loader from '@/sections/Loader'
import MuiDialog from '@/sections/dialog'
import { CartDataContext } from '@/common/cart-context'

// using NextJS dynamic for lazy load
const TermsConditions = dynamic(() => import("./terms-conditions").then((mod) => mod.TermsConditions), {
  loading: () => (
    <Loader />
  )
})

// using React's Lazy loading
const Categories = React.lazy(() => import("./categories"))

const DashboardView = () => {

  const { cartData, setCartData } = useContext(CartDataContext);

  console.log("cartData", cartData);
  
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 2, marginTop: 10 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/dashboard.png" // Replace with your image URL
              alt="Description"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="h6" gutterBottom>
              <strong>Best Quality Products</strong>
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: "coral" }}>
              <strong>Shop Outside the Box!</strong>
            </Typography>
            <Typography variant="body1" component="p">

            </Typography>
          </Grid>
        </Grid>
      </Box>

      <TermsConditions />
      <Suspense fallback={<Loader />}>
        <Categories />
      </Suspense>
    </>
  )
}

export default DashboardView