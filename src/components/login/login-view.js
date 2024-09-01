"use client"

import React, { useMemo } from 'react';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';

export const LoginView = () => {

    const defaultValues = useMemo(() => ({
        "username": '',
        "password": ''
    }), []);

    const schema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        // password: Yup.string().required('Password is required')
    });

    const methods = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const { getValues, setValues, handleSubmit, control, formState: { errors } } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            // console.log(data);
            const res = await axios.post('https://fakestoreapi.com/auth/login', {
                username: "mor_2314",
                password: "83r5^_"
            })
            console.log(res);
        } catch (error) {
            console.error(error)
        }
    });

    console.log("ji");

    const renderForm = (
        <Container maxWidth="md">
            <Box sx={{ padding: 2 }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: 'relative', width: '100%', height: '300px' }}>
                            <img
                                src="https://pbs.twimg.com/profile_images/891867531064909825/2oGAV_zz_400x400.png"
                                alt="Profile"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Controller
                                name="username"
                                control={control}
                                render={({ field, fieldState: { error } }) => (
                                    <TextField
                                        {...field}
                                        label="Username"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.username}
                                        helperText={errors.username && errors.username.message}

                                    />
                                )}
                            />

                            <Controller
                                name="password"
                                control={control}
                                render={({ field, fieldState: { error } }) => (
                                    <TextField
                                        {...field}
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        fullWidth
                                        error={!!errors.password}
                                        helperText={errors.password && errors.password.message}

                                    />
                                )}
                            />


                            <Button type="submit" variant='contained' onClick={() => onSubmit(getValues())}>Login</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5'
            }}
        >
            <FormProvider methods={methods} onSubmit={onSubmit}>
                {renderForm}
            </FormProvider>
        </Box>
    );
};

export default LoginView;