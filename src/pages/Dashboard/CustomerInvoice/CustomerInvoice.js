import { Container, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { Button, Table } from 'react-bootstrap';
import logo from '../../../assets/images/logo2.png'
import styles from "./CustomerInvoice.module.css";
import { savePDF } from "@progress/kendo-react-pdf";
import { Link, useParams } from 'react-router-dom';

const CustomerInvoice = () => {
    const [orders, setOrders] = React.useState([]);
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [id]);


    const pdfExportComponent = useRef(null);
    const handleExportWithComponent = () => {
        savePDF(pdfExportComponent.current, { paperSize: "A4" })
    }
    return (

        <Container sx={{ mt: 2 }} >

            <Box sx={{ mt: 5 }}>
                <Button onClick={handleExportWithComponent} className={`${styles.btn}`} >Download</Button>
                <Link to="/dashboard/add-new-invoice" style={{ textDecoration: 'none' }}>    <Button className={`${styles.btn}`} >New POS</Button></Link>
            </Box>
            <Box ref={pdfExportComponent} sx={{ bgcolor: "white", position: "relative" }} className={`${styles.containerBorder}`}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 2 }}>
                    <Grid item xs={12} sx={{ textAlign: "left" }}>
                        <Box >
                            <Typography sx={{ textAlign: "left", fontWeight: "bold", fontStyle: 'italic' }} variant="h4">Invoice</Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box >
                            <Typography sx={{ textAlign: "left" }} >Bill TO: {orders.name}</Typography>

                            <Typography sx={{ textAlign: "left" }} variant="body1">Phone Number: {orders.customerPhone}</Typography>

                            <Typography sx={{ textAlign: "left" }} variant="body1">Address: {orders.address}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box sx={{ ml: "auto" }}>
                            <Typography sx={{ textAlign: "right " }}>Invoice ID:#fss{Math.floor(Math.random() * 1000) + 1} </Typography>
                            <Typography sx={{ textAlign: "right" }}>Invoice Date: {orders.date}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ width: 200, mx: "auto", mb: 5 }}>
                    <img
                        src={logo}
                        alt=""
                    />
                </Box>
                <Container sx={{ width: "100%", my: 5 }}>
                    <Box className={`${styles.tableContainer}`}>

                        <TableContainer component={Paper} sx={{ border: 1, borderColor: "grey.300" }}>
                            <Table aria-label="simple table">
                                <TableHead className={`${styles.tableHeader}`}>
                                    <TableRow hover>
                                        <TableCell className={`${styles.tableCell}`} align="center">SL.</TableCell>
                                        <TableCell className={`${styles.tableCell}`} align="center">Product Name</TableCell>
                                        <TableCell className={`${styles.tableCell}`} align="center">Unit Price</TableCell>

                                        <TableCell className={`${styles.tableCell}`} align="center">Quantity </TableCell>

                                        <TableCell className={`${styles.tableCell}`} align="right">Amount</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} className={`${styles.tableHover}`}>

                                        <TableCell align="center" component="th" scope="row">
                                            1            </TableCell>
                                        <TableCell align="center">{orders.product}</TableCell>
                                        <TableCell align="center">BDT {orders.price}</TableCell>
                                        <TableCell align="center">{orders.quantity}</TableCell>
                                        <TableCell align="right">BDT {orders.price * orders.quantity}</TableCell>


                                    </TableRow>
                                    <TableCell colSpan={4} align="right" sx={{ borderRight: 1 }} style={{ fontWeight: "bold" }}>
                                        Total Amount (With Discount):
                                    </TableCell>
                                    <TableCell align="right" style={{ fontWeight: "bold" }}>BDT {orders.grandTotal}</TableCell>

                                </TableBody>
                            </Table>

                        </TableContainer>

                        <Typography sx={{ textAlign: "left", mt: 8, mb: 3, fontWeight: "bold" }}>Prepared By: Hasan Zahid</Typography>

                        <Typography sx={{ textAlign: "left" }}>Smart Shop | Dhaka,Bangladesh  <br /> https://smart-shop-pos.web.app </Typography>

                    </Box>
                </Container>
                <Typography sx={{ color: "#e0e0e0", position: "absolute", right: "10px", bottom: "-35px" }}>An exciting place for the whole family to shop</Typography>
            </Box >

        </Container >
    );
};

export default CustomerInvoice;
