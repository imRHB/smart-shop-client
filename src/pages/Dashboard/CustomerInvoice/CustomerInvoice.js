import { Container, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { Button, Table } from 'react-bootstrap';
import logo from '../../../assets/images/logo2.png'
import styles from "./CustomerInvoice.module.css";
import { savePDF } from "@progress/kendo-react-pdf";
function Row(props) {
    const { product } = props;

    return (
        <React.Fragment>

            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} className={`${styles.tableHover}`}>

                <TableCell align="center" component="th" scope="row">
                    {product._id}              </TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">BDT {product.salePrice}</TableCell>
                <TableCell align="center">5</TableCell>
                <TableCell align="right">BDT {product.salePrice * 5}</TableCell>


            </TableRow>
        </React.Fragment>
    );
}

const CustomerInvoice = () => {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        fetch("https://zahidhasan2806.github.io/productData/products.json")
            .then(res => res.json())
            .then(data => {

                setProducts(data.slice(0, 4))
            })
    }, []);
    let total = 0;
    products.forEach(item => {
        total = total + item.salePrice * 5
    });
    const pdfExportComponent = useRef(null);
    const handleExportWithComponent = () => {
        savePDF(pdfExportComponent.current, { paperSize: "A4" })
    }
    return (

        <Container >
            <Button sx={{ mt: 5 }} onClick={handleExportWithComponent} className={`${styles.btn}`} >Download</Button>

            <Box ref={pdfExportComponent} sx={{ mt: 2, bgcolor: "white", position: "relative" }} className={`${styles.containerBorder}`}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 5 }}>
                    <Grid item xs={12} sx={{ textAlign: "left" }}>
                        <Box >
                            <Typography sx={{ textAlign: "left", fontWeight: "bold", mb: 3, fontStyle: 'italic' }} variant="h3">Invoice</Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box >
                            <Typography sx={{ textAlign: "left" }} >Bill TO: MD Zahid Hasan</Typography>

                            <Typography sx={{ textAlign: "left" }} variant="body1">Phone Number: +8801646190607</Typography>

                            <Typography sx={{ textAlign: "left" }} variant="body1">Address: 59 GM Bari Wasa Masjid road</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box sx={{ ml: "auto" }}>
                            <Typography sx={{ textAlign: "right " }}>Invoice ID:#22222FSS </Typography>
                            <Typography sx={{ textAlign: "right" }}>Invoice Date: 12-03-2022</Typography>
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
                                    {products.map((product) => (
                                        <Row key={product._id} product={product} />
                                    ))}
                                    <TableCell colSpan={4} align="right" sx={{ borderRight: 1 }} style={{ fontWeight: "bold" }}>
                                        Total Amount:
                                    </TableCell>
                                    <TableCell align="right" style={{ fontWeight: "bold" }}>BDT {total}</TableCell>

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