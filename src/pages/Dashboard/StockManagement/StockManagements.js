import React from 'react';
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TablePagination from "@mui/material/TablePagination";
import { Container } from "@mui/material";
import products from "../../../assets/data/products.json";

function Row(props) {
    const { product } = props;

    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {product._id}
                </TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">
                    {product.category}
                </TableCell>
                <TableCell align="center">10</TableCell>
                <TableCell align="center">50</TableCell>
                <TableCell align="center">35</TableCell>
                <TableCell align="center">15</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">{product.salePrice}</TableCell>
            </TableRow>
            <TableRow hover>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Product Summary
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow hover>
                                        <TableCell align="center">Product Name</TableCell>
                                        <TableCell align="center">Category</TableCell>
                                        <TableCell align="center">Supplier Price</TableCell>
                                        <TableCell align="center">Sale Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow hover key={product._id}>
                                        <TableCell component="th" scope="row">
                                            {product.name}
                                        </TableCell>
                                        <TableCell align="center">{product.category}</TableCell>
                                        <TableCell align="center">BDT {product.price}</TableCell>
                                        <TableCell align="center">BDT {product.salePrice}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const StockManagements = () => {
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
            <Paper>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow hover>
                                <TableCell />
                                <TableCell>SL.</TableCell>
                                <TableCell align="center">Product Name</TableCell>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">Quantity per carton</TableCell>
                                <TableCell align="center">In Ctn.</TableCell>
                                <TableCell align="center">Out Ctn.</TableCell>
                                <TableCell align="center">Stock</TableCell>
                                <TableCell align="center">Supplier Price</TableCell>
                                <TableCell align="center">Supplier Price</TableCell>
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

            </Paper>
        </Container>
    );
};

export default StockManagements;