import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TablePagination from "@mui/material/TablePagination";
import { Container, Link } from "@mui/material";
import products from "../../../assets/data/products.json";

function Row(props) {
    const { product } = props;

    return (
        <React.Fragment>
            <TableRow hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>

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
                                <TableCell align="center">SL.</TableCell>
                                <TableCell align="center">Suite</TableCell>
                                <TableCell align="center">Supplier</TableCell>
                                <TableCell align="center">Sale Price</TableCell>
                                <TableCell align="center">Supplier Price</TableCell>
                                <TableCell align="center">Quantity per carton</TableCell>
                                <TableCell align="center">In Ctn.</TableCell>
                                <TableCell align="center">Out Ctn.</TableCell>
                                <TableCell align="center">Stock</TableCell>
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

export default SupplierStock;