import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import styles from "./Payment.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from '@mui/icons-material/Menu';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SendIcon from '@mui/icons-material/Send';


const Payment = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [value, setValue] = React.useState(null);
    const currencies = [
        {
            value: 'USD',
            label: '$',
        }, {
            value: 'EUR',
            label: '€',
        }, {
            value: 'BTC',
            label: '฿',
        }, {
            value: 'JPY',
            label: '¥',
        },
    ];
    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>ADD PAYMENT</span> <br />{" "}
                    <span style={{ color: "#969494" }}>Add New Payment</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "right", my: 2 }}>
                <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>Create Account</Button>
                <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>Manage Account</Button>
                <Button className={`${styles.paymentBtn}`} startIcon={<ReceiptIcon />}>Payment</Button>
                <Button className={`${styles.receiptBtn}`} startIcon={<ReceiptIcon />}>Receipt</Button>
            </Box>
            <Box className={`${styles.paymentContainer}`}>
                <Typography sx={{ fontWeight: "bold" }}>Add Payment</Typography>
                <hr />
                <Box>
                    <Typography sx={{ fontWeight: "bold" }}>Choose Transaction</Typography>

                    <form>
                        <Grid container spacing={4} columns={16} sx={{ marginTop: 2, marginBottom: 2 }}>
                            <Grid item xs={8}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Date<span style={{ color: "#f44336" }}>*</span></Typography>

                                    <TextField id="outlined-basic" size="small" type="date" sx={{ width: '350px' }} label="Choose Date" variant="outlined" {...register("name", { required: true })} />
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Transaction Category<span style={{ color: "#f44336" }}>*</span></Typography>

                                    <TextField id="outlined-basic" size="small" sx={{ width: '350px' }} label="Supplier Contact No." variant="outlined" {...register("contact", { required: true })} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Transaction Mode<span style={{ color: "#f44336" }}>*</span></Typography>

                                    <TextField id="outlined-basic" size="small" sx={{ width: '350px' }} label="Supplier Contact No." variant="outlined" {...register("contact", { required: true })} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Cheque/Pay Order No<span style={{ color: "#f44336" }}>*</span></Typography>

                                    <TextField id="outlined-basic" size="small" sx={{ width: '350px' }} label="Supplier Contact No." variant="outlined" {...register("contact", { required: true })} />
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Bank Name<span style={{ color: "#f44336" }}>*</span></Typography>

                                    <TextField id="outlined-basic" size="small" sx={{ width: '350px' }} label="Supplier Contact No." variant="outlined" {...register("contact", { required: true })} />
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Description<span style={{ color: "#f44336" }}>*</span></Typography>

                                    <TextField id="outlined-basic" size="small" sx={{ width: '350px' }} label="Supplier Name" variant="outlined" {...register("name", { required: true })} />
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Select Option Name<span style={{ color: "#f44336" }}>*</span></Typography>

                                    <TextField id="outlined-basic" size="small" sx={{ width: '350px' }} label="Supplier Contact No." variant="outlined" {...register("contact", { required: true })} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Payment Amount<span style={{ color: "#f44336" }}>*</span></Typography>

                                    <TextField id="outlined-basic" size="small" sx={{ width: '350px' }} label="Supplier Contact No." variant="outlined" {...register("contact", { required: true })} />
                                </Box>
                                <Box sx={{ textAlign: "right" }}>
                                    <Button className={`${styles.paymentBtn}`} sx={{ my: 2 }} endIcon={<SendIcon />}>Submit</Button>
                                </Box>
                            </Grid>
                        </Grid>

                    </form>

                </Box>

            </Box>
        </Container >
    );
};

export default Payment;