import React, { useEffect } from 'react';
import styles from "./PaymentGateway.module.css";
import { Box, Typography, Button } from "@mui/material";
import StripePayment from '../../PaymentGateway/Stripe/StripePayment/StripePayment';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import stripeImg from "../../../../assets/images/stripe.PNG";
import Swal from "sweetalert2";


const PaymentGateway = () => {
    const [mode, setMode] = React.useState('');
    const [orders, setOrders] = React.useState([]);

    const handleModeChange = (event) => {
        setMode(event.target.value);
    };

    useEffect(() => {
        fetch(`https://smart-shop-pos.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data[data.length - 1]))
    }, []);

    const { _id, grandTotal } = orders;


    //update payment status

    const handleUpdateStatus = () => {
        const updated = { payment: 'paid' }

        const url = `https://smart-shop-pos.herokuapp.com/orders/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Payment successful!!",
                        showConfirmButton: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = `/customer-invoice/${_id}`
                        }
                    });
                }
            })
    };


    return (
        <Box className={`${styles.paymentPage}`}>
            <div className={`${styles.paymentFormSection} ${"shadow"}`}>
                <img style={{ marginBottom: "10px", borderRadius: "10px 10px 0 0", height: "120px", width: "100%" }} src={stripeImg} alt="" className='img-fluid' />
                <div className={`${styles.paymentForm}`}>

                    <div style={{ width: "100%", margin: "auto", display: "flex", justifyContent: "between", alignItems: "center" }}>
                        <div>
                            <h5 className='fw-bold'>Total Amount </h5>
                        </div>
                        <div style={{ padding: "5px 10px", marginLeft: "auto", backgroundColor: "rgb(248, 243, 243)", color: "#001e3c " }}>
                            {orders.payment === "unpaid" ?
                                <h4>
                                    $ {grandTotal}
                                </h4>
                                :
                                <h4>
                                    $ 0.00
                                </h4>
                            }
                        </div>
                    </div>
                    <hr />

                    <Box className={`${styles.inputContainer}`}>
                        <Typography className={`${styles.inputTitle}`} variant="f6">
                            Transaction Mode
                            <span style={{ color: "#f44336" }}>*</span>
                        </Typography>
                        <FormControl fullWidth sx={{ mt: 1 }}>

                            <InputLabel id="demo-simple-select-label">Transaction </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                className={`${styles.inputFields}`}
                                label="Select Mode"
                                value={mode}
                                onChange={handleModeChange}
                            >
                                <MenuItem value="cash">Cash</MenuItem>
                                <MenuItem value="card">Card</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    {mode === "card" &&
                        <Box className={`${styles.cardPay}`} >
                            <StripePayment />
                        </Box>
                    }
                    {mode === "cash" &&
                        <>
                            <Box >
                                <TextField fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    id="outlined-basic"
                                    size="small"
                                    value={grandTotal}
                                    sx={{ marginBottom: "15px" }}
                                    className={`${styles.inputFields}`}
                                    label="Payment Amount"
                                    variant="outlined"
                                />
                            </Box>
                            <Box sx={{ mt: 2, mb: 2, display: "flex", justifyContent: "center" }}>
                                {orders.payment === "unpaid" ?
                                    < Button onClick={handleUpdateStatus} className={`${styles.paymentButton}`}>Make Payment</Button>
                                    :
                                    <Button disabled onClick={handleUpdateStatus} className={`${styles.paymentDisabledButton}`}>Make Payment</Button>
                                }
                            </Box>
                        </>
                    }
                    <hr />
                    <Button className={`${styles.cancelButton}`}>Add new POS</Button>
                </div>

            </div>
        </Box >
    );
};

export default PaymentGateway;