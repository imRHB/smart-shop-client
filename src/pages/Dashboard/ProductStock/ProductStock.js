import React from 'react';
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TablePagination from "@mui/material/TablePagination";
import { Container, Link, Typography } from "@mui/material";
import products from "../../../assets/data/products.json";
import styles from "./ProductStock.module.css"

function Row(props) {
    const { product } = props;

    return (
        <React.Fragment>
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} className={`${styles.tableHover}`}>

                <TableCell component="th" scope="row">
                    21/02/2018                </TableCell>
                <TableCell align="center"><Link href="#" underline="hover">{product.name}</Link></TableCell>
                <TableCell align="center">BDT {product.salePrice}</TableCell>
                <TableCell align="center">10</TableCell>
                <TableCell align="center">50</TableCell>
                <TableCell align="center">35</TableCell>
                <TableCell align="center">15</TableCell>
                <TableCell align="center">50</TableCell>
                <TableCell align="center">35</TableCell>
                <TableCell align="center">35</TableCell>
                <TableCell align="center">15</TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const ProductStock = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Container sx={{ width: "100%" }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Stock Report (Product Wise)</span> <br />{" "}
                    <span style={{ color: "#969494" }}>Stock Report (Product Wise)</span>
                </Typography>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: 'left' }}>Stock Report (Product Wise)</Typography>
                <hr />
                <TableContainer component={Paper} sx={{ border: 1, borderColor: "grey.300" }}>
                    <Table aria-label="simple table">
                        <TableHead className={`${styles.tableHeader}`}>
                            <TableRow hover>
                                <TableCell className={`${styles.tableCell}`} align="center">Date</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Suite</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Price</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Quantity per carton</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">In Ctn.</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Out Ctn.</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">In Qnty.</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Out Qnty.</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Total Price</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Total Sales</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Stock</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((product) => (
                                    <Row key={product._id} product={product} />
                                ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={products.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>

            </Box>
        </Container>
    );
};

export default ProductStock;