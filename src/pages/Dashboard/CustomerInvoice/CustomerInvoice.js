import { Container, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import logo from '../../../assets/images/logo2.png'
import styles from "./CustomerInvoice.module.css";

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
                <TableCell align="center">{product.salePrice * 10}</TableCell>


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
    return (
        <Container >
            <Box sx={{ mt: 5, bgcolor: "white" }} className={`${styles.containerBorder}`}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 5 }}>
                    <Grid item xs={12} sx={{ textAlign: "left" }}>
                        <Box >
                            <Typography sx={{ textAlign: "left" }} variant="h3">Invoice</Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box >
                            <Typography sx={{ textAlign: "left" }} >Bill TO: MD Zahid Hasan</Typography>

                            <Typography sx={{ textAlign: "left" }} variant="body1">Phone Number: +8801646190607</Typography>

                            <Typography sx={{ textAlign: "left" }} variant="body1">Address: 59 GM Bari Wasa Masjid road</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box >
                            <Typography sx={{ textAlign: "left" }}>Invoice ID:#22222FSS </Typography>
                            <Typography sx={{ textAlign: "left" }}>Invoice Date: 12-03-2022</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ width: 200, mx: "auto" }}>
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

                                        <TableCell className={`${styles.tableCell}`} align="center">Amount</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.map((product) => (
                                        <Row key={product._id} product={product} />
                                    ))}
                                </TableBody>
                            </Table>

                        </TableContainer>

                    </Box>
                </Container>
            </Box>
        </Container>
    );
};

export default CustomerInvoice;