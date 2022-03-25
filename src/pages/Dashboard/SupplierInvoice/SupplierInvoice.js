import React, { useEffect, useRef } from 'react';
import { Button, Container, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Table } from 'react-bootstrap';
import logo from '../../../assets/images/logo2.png';
import styles from './SupplierInvoice.module.css'
import useAuth from '../../../hooks/useAuth';
import { loadEmployees } from "../../../store/employee";
import { useDispatch, useSelector } from "react-redux";
import { savePDF } from "@progress/kendo-react-pdf";
import { Link } from 'react-router-dom';
function Row(props) {
    const { product, index } = props;
    return (
        <React.Fragment>
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} className={`${styles.tableHover}`}>

                <TableCell align="center" component="th" scope="row">
                    {index + 1} </TableCell>
                <TableCell align="center">{product.p_name}</TableCell>
                <TableCell align="center">{product.p_id}</TableCell>
                <TableCell align="center">{product.qty}</TableCell>
                <TableCell align="center">BDT {product.rate}</TableCell>
                <TableCell align="right">BDT {product.total}</TableCell>


            </TableRow>
        </React.Fragment>
    );
}
const SupplierInvoice = () => {
    const [purchaseProducts, setPurchaseProducts] = React.useState([]);
    const { employee } = useAuth()
    useEffect(() => {
        fetch("https://smart-shop-pos.herokuapp.com/stores")
            .then(res => res.json())
            .then(data => {
                setPurchaseProducts(data[data.length - 1])
            })
    }, []);
    const employees = useSelector(
        (state) => state.entities.employee.allEmployees
    );

    // Load all designations from Database
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadEmployees());
    }, [dispatch]);


    const setEmployee = employees.find(filteredEmployee => filteredEmployee.email === employee.email);

    const dummyName = "Supplier";
    const dummyAddress = "N/A";
    const { supplierName, contactNo, supplierAddress, date, products, grandTotal } = purchaseProducts;

    const pdfExportComponent = useRef(null);
    const handleExportWithComponent = () => {
        savePDF(pdfExportComponent.current, { paperSize: "A4" })
    }

    return (
        <Container >
            <Box sx={{ my: 3 }}>
                <Button onClick={handleExportWithComponent} className={`${styles.btn}`} >Download</Button>
                <Link to="/dashboard/purchase-product" style={{ textDecoration: 'none' }}>    <Button className={`${styles.btn}`} >Purchase Another Product</Button></Link>
            </Box>
            <Box ref={pdfExportComponent} sx={{ bgcolor: "white", position: "relative" }} className={`${styles.containerBorder}`}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 5 }}>
                    <Grid item xs={12} sx={{ textAlign: "left" }}>
                        <Box >
                            <Typography sx={{ textAlign: "left", fontWeight: "bold", mb: 3, fontStyle: 'italic' }} variant="h3">Invoice</Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box >
                            <Typography sx={{ textAlign: "left" }} >Bill To: {supplierName ? supplierName : dummyName}</Typography>

                            <Typography sx={{ textAlign: "left" }} variant="body1">Phone Number: {contactNo}</Typography>

                            <Typography sx={{ textAlign: "left" }} variant="body1">Address: {supplierAddress ? supplierAddress : dummyAddress}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box sx={{ ml: "auto" }}>
                            <Typography sx={{ textAlign: "right " }}>Invoice ID:#fss{Math.floor(Math.random() * 1000) + 1} </Typography>
                            <Typography sx={{ textAlign: "right" }}>Invoice Date: {date}</Typography>
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
                                        <TableCell className={`${styles.tableCell}`} align="center">Product ID</TableCell>
                                        <TableCell className={`${styles.tableCell}`} align="center">Total Quantity</TableCell>
                                        <TableCell className={`${styles.tableCell}`} align="center">Unit Price</TableCell>

                                        <TableCell className={`${styles.tableCell}`} align="center">Total </TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products?.map((product, index) => (
                                        <Row key={product._id} product={product} index={index} />
                                    ))}
                                    <TableCell colSpan={5} align="right" sx={{ borderRight: 1 }} style={{ fontWeight: "bold" }}>
                                        Total Amount(with Discount):
                                    </TableCell>
                                    <TableCell align="right" style={{ fontWeight: "bold" }}>BDT {grandTotal}</TableCell>

                                </TableBody>
                            </Table>

                        </TableContainer>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 5 }}>

                            <Grid item xs={6}>
                                <Box >
                                    <Typography sx={{ textAlign: "left", mt: 8, mb: 3, fontWeight: "bold" }}>Prepared By: {setEmployee?.name}</Typography>

                                    <Typography sx={{ textAlign: "left" }}>Smart Shop | Dhaka,Bangladesh  <br /> https://smart-shop-pos.web.app </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6} >
                                <Box>
                                    <Typography sx={{ textAlign: "right ", mt: 8, fontWeight: "bold" }}>Product Recived by: Rakib Hasan Babu</Typography>
                                    <Typography sx={{ textAlign: "right", mb: 5 }}>Designation: Superviser</Typography>
                                    <hr style={{ borderTop: "3px dotted gray" }}></hr>
                                </Box>
                            </Grid>
                        </Grid>


                    </Box>
                </Container>
                <Typography sx={{ color: "#e0e0e0", position: "absolute", right: "10px", bottom: "-35px" }}>An exciting place for the whole family to shop</Typography>

            </Box >
        </Container >
    );
};

export default SupplierInvoice;