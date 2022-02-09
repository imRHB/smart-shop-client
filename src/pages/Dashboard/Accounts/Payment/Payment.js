import { Container, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const Payment = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];
    return (
        <Container>
            <h4>Add Payment</h4>
            <hr />
            <form>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    <Grid item xs={6}>
                        <div>
                            <Typography variant="h6" component="h2">
                                Date <span>*</span>
                            </Typography>


                            {/* <DatePicker
                                label="Basic example"
                                // value={value}
                                {...register("date", { required: true })}
                                renderInput={(params) => <TextField {...params} />}
                            /> */}

                        </div>
                        <div>
                            <Typography variant="h6" component="h2">
                                Transaction Category <span>*</span>
                            </Typography>

                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"

                                helperText="Please select your currency"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>


                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                </Grid>
            </form>

        </Container>
    );
};

export default Payment;