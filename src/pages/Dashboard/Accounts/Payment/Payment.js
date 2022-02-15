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
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';



const Payment = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const categories = [
        {
            value: '1',
            label: 'Customer',
        }, {
            value: '2',
            label: 'Supplier',
        }
    ];

    const [category, setCategory] = React.useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

                    <TabContext value={value}>
                        <Box sx={{ display: 'flex', justifyContent: "center" }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" >
                                <Typography sx={{ fontWeight: "bold", marginTop: 2, marginRight: 3 }}>Choose Transaction</Typography>
                                <Tab label="Payment" value="1" />
                                <Tab label="Receipt" value="2" />
                            </TabList>
                        </Box>
                        <form className={`${styles.paymentForm} ${'shadow'}`}>
                            <Grid container spacing={4} columns={16} sx={{ marginTop: 2, marginBottom: 2 }}>
                                <Grid item md={8} sx={16}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="f6">Date<span style={{ color: "#f44336" }}>*</span></Typography>

                                        <input type="date" {...register("date", { required: true })} style={{ width: '300px', padding: "8px", backgroundColor: "#e4e4e4", border: "1px solid #aeaeae", borderRadius: "3px" }} />

                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="f6">Transaction Category<span style={{ color: "#f44336" }}>*</span></Typography>

                                        <TextField id="outlined-basic" size="small" sx={{ width: '300px' }} label="Select Category" variant="outlined"
                                            select
                                            value={category}
                                            onChange={handleCategoryChange}
                                            {...register("category", { required: true })}
                                        >
                                            {categories.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="f6">Transaction Mode<span style={{ color: "#f44336" }}>*</span></Typography>

                                        <TextField id="outlined-basic" size="small" sx={{ width: '300px' }} label="Select Mode" variant="outlined" {...register("mode", { required: true })} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="f6">Cheque/Pay Order No<span style={{ color: "#f44336" }}>*</span></Typography>

                                        <TextField id="outlined-basic" size="small" sx={{ width: '300px' }} label="Pay Mode" variant="outlined" {...register("payMode", { required: true })} />
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="f6">Bank Name<span style={{ color: "#f44336" }}>*</span></Typography>

                                        <TextField id="outlined-basic" size="small" sx={{ width: '300px' }} label="Bank Name" variant="outlined" {...register("bank", { required: true })} />
                                    </Box>
                                </Grid>
                                <Grid item md={8} sx={16}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="f6">Description<span style={{ color: "#f44336" }}>*</span></Typography>

                                        <TextField id="outlined-basic" size="small" sx={{ width: '300px' }} label="Description" variant="outlined" {...register("desc", { required: true })} />
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="f6">Select Option Name<span style={{ color: "#f44336" }}>*</span></Typography>

                                        <TextField id="outlined-basic" size="small" sx={{ width: '300px' }} label="Supplier Contact No." variant="outlined" {...register("contact", { required: true })} />
                                    </Box>

                                    <TabPanel value="1" sx={{ m: 0, p: 0 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography sx={{ fontWeight: "bold" }} variant="f6">Payment Amount<span style={{ color: "#f44336" }}>*</span></Typography>

                                            <TextField id="outlined-basic" size="small" sx={{ width: '300px' }} label="Payment Amount" variant="outlined" {...register("amount", { required: true })} />
                                        </Box>
                                    </TabPanel>



                                    <TabPanel value="2" sx={{ m: 0, p: 0 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography sx={{ fontWeight: "bold" }} variant="f6">Receipt Amount<span style={{ color: "#f44336" }}>*</span></Typography>
                                            <TextField id="outlined-basic" size="small" sx={{ width: '300px' }} label="Receipt Amount" variant="outlined" {...register("amount", { required: true })} />
                                        </Box>
                                    </TabPanel>



                                    <Box sx={{ textAlign: "right" }}>
                                        <Button className={`${styles.paymentBtn}`} sx={{ my: 2 }} endIcon={<SendIcon />}>Submit</Button>
                                    </Box>
                                </Grid>
                            </Grid>

                        </form>

                    </TabContext  >

                </Box>

            </Box>
        </Container >
    );
};

export default Payment;