import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TablePagination from "@mui/material/TablePagination";
import { Button, Collapse, Container, FormControl, Link, MenuItem, Select, Typography } from "@mui/material";
import products from "../../../assets/data/products.json";
import styles from './Supplier.module.css'
import { Box } from '@mui/system';

function Row(props) {
    const { product } = props;

    return (
        <React.Fragment>
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} className={`${styles.tableHover}`}>

                <TableCell component="th" scope="row">
                    21/02/2018                </TableCell>
                <TableCell align="center"><Link href="#" underline="hover">{product.name}</Link></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">BDT {product.salePrice}</TableCell>
                <TableCell align="center">35</TableCell>
                <TableCell align="center">15</TableCell>
                <TableCell align="center">50</TableCell>
                <TableCell align="center">35</TableCell>
                <TableCell align="center">35</TableCell>
            </TableRow>
        </React.Fragment>
    );
}
const SupplierStock = () => {
    const [page, setPage] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [supplier, setSupplier] = React.useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChange = (event) => {
        setSupplier(event.target.value);
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
                    <span style={{ fontSize: "26px", marginLeft: "-104px" }}>
                        Stock</span> <br />{" "}
                    <span style={{ color: "#969494" }}>Stock Report (Supplier)</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "left", mb: 1 }}>
                <Button className={`${styles.btn}`} onClick={() => setOpen(!open)}>Filter</Button>
                <Collapse in={open} sx={{ mt: 2, mb: 2 }} timeout="auto" unmountOnExit className={`${styles.tableContainer}`}>
                    <FormControl fullWidth>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ textAlign: "left", mr: 2 }} style={{ fontSize: "17px" }} >
                                Select Supplier:
                            </Typography>


                            <Select sx={{ minWidth: 150, mr: 1 }}
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={supplier}
                                label="Select One"
                                onChange={handleChange}
                            >
                                <MenuItem value="Afsana">Afsana</MenuItem>
                                <MenuItem value="Zahid">Zahid</MenuItem>
                                <MenuItem value="Rakib">Rakib</MenuItem>
                                <MenuItem value="Najmul">Najmul</MenuItem>
                                <MenuItem value="Mahfuz">Mahfuz</MenuItem>
                                <MenuItem value="Maria">Maria</MenuItem>
                            </Select>
                            <Button type='submit' className={`${styles.btn}`}>Search</Button>
                        </Box>
                    </FormControl>
                </Collapse>
            </Box>

            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>Stock Report (Supplier Wise)</Typography>
                <hr />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead className={`${styles.tableHeader}`}>
                            <TableRow hover>
                                <TableCell className={`${styles.tableCell}`} align="center">SL.</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Suite</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Supplier</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Sale Price</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Supplier Price</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Quantity per carton</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">In Ctn.</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Out Ctn.</TableCell>
                                <TableCell className={`${styles.tableCell}`} align="center">Stock</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((product) => (
                                    <Row key={product._id} product={product} />
                                ))}
                            <TableRow >
                                <TableCell align='right' colSpan={6}>Grand Total</TableCell>
                                <TableCell align='center'>Total</TableCell>
                                <TableCell align='center'>Total</TableCell>
                                <TableCell align='center'>Total</TableCell>
                            </TableRow>
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

export default SupplierStock;