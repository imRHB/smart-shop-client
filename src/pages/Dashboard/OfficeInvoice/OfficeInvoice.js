import React, { useEffect, useRef } from 'react';
import { Container, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Button, Table } from 'react-bootstrap';
import logo from '../../../assets/images/logo2.png'
import styles from "./OfficeInvoice.module.css";
import { savePDF } from "@progress/kendo-react-pdf";
import { Link, useParams } from 'react-router-dom';

const OfficeInvoice = () => {
    const [transactions, setTransactions] = React.useState([]);
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://smart-shop-pos.herokuapp.com/${id}`)
            .then(res => res.json())
            .then(data => {
                setTransactions(data)
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
                            <Typography sx={{ textAlign: "left" }} >Bill TO: {transactions.name}</Typography>

                            <Typography sx={{ textAlign: "left" }} variant="body1">Phone Number: {transactions.customerPhone}</Typography>

                            <Typography sx={{ textAlign: "left" }} variant="body1">Address: {transactions.address}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box sx={{ ml: "auto" }}>
                            <Typography sx={{ textAlign: "right " }}>Invoice ID:#fss{Math.floor(Math.random() * 1000) + 1} </Typography>
                            <Typography sx={{ textAlign: "right" }}>Invoice Date: {transactions.date}</Typography>
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
                                        <TableCell className={`${styles.tableCell}`} align="center">Transactions Date</TableCell>
                                        <TableCell className={`${styles.tableCell}`} align="center"> Name</TableCell>
                                        <TableCell className={`${styles.tableCell}`} align="center">Transactions Category</TableCell>

                                        <TableCell className={`${styles.tableCell}`} align="right">Paid Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} className={`${styles.tableHover}`}>
                                        <TableCell align="center" component="th" scope="row">
                                            {transactions.date}</TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {transactions.name}</TableCell>

                                        <TableCell align="center">{transactions.category}</TableCell>
                                        <TableCell align="right">BDT {transactions.amount}</TableCell>
                                    </TableRow>
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

export default OfficeInvoice;