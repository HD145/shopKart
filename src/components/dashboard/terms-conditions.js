import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CameraFrontIcon from '@mui/icons-material/CameraFront';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RecyclingIcon from '@mui/icons-material/Recycling';

export const TermsConditions = () => {
    return (
        <Box sx={{ background: "black", marginY:3}}>
            <Grid container spacing={3} sx={{ paddingX: 3, paddingY: 2 }}>
                <Grid item md={3} xs={12}>
                    <Box display={"flex"} justifyContent="space-around" sx={{ background: "#432c2c", padding: "2rem", alignItems: "center", height:"150px" }}>
                        <LocalShippingIcon sx={{ color: "coral" }} />
                        <Box color="white">
                            <Typography variant='h6' sx={{ fontWeight: 600 }}>Free Shipping</Typography>
                            <Typography>Above 500 only</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Box display={"flex"} justifyContent="space-around" sx={{ background: "#432c2c", padding: "2rem", alignItems: "center", height:"150px"  }}>
                        <CameraFrontIcon sx={{ color: "coral" }} />
                        <Box color="white">
                            <Typography variant='h6' sx={{ fontWeight: 600 }}>Certified</Typography>
                            <Typography>100% Guarantee</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Box display={"flex"} justifyContent="space-around" sx={{ background: "#432c2c", padding: "2rem", alignItems: "center", height:"150px"  }}>
                        <LocalAtmIcon sx={{ color: "coral" }} />
                        <Box color="white">
                            <Typography variant='h6' sx={{ fontWeight: 600 }}>Huge Savings</Typography>
                            <Typography>At Lowest Price</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Box display={"flex"} justifyContent="space-around" sx={{ background: "#432c2c", padding: "2rem", alignItems: "center" , height:"150px" }}>
                        <RecyclingIcon sx={{ color: "coral" }} />
                        <Box color="white">
                            <Typography variant='h6' sx={{ fontWeight: 600 }}>Easy Returns</Typography>
                            <Typography>No Questions Asked</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

// export default TermsConditions;