import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import { Box, Button, Collapse, IconButton, Paper, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import AssignmentIcon from "@mui/icons-material/Assignment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Delete from "@mui/icons-material/Delete";
import styles from './ManageProducts.module.css';
import { loadProducts, deleteProductFromDb, setReload } from '../../../store/products';

function Row(props) {
    const { product, serial, reload } = props;
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Do you want to delete the product?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        })
            .then(result => {
                if (result.isConfirmed) {
                    dispatch(deleteProductFromDb(id));
                    Swal.fire('Successfull', 'Category deleted!', 'success');
                    setReload(!reload)
                }
            })
    };

    return (
        <React.Fragment>
            <TableRow
                className={`${styles.tableHover}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
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
                    {serial + 1}
                </TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">{product.salePrice}</TableCell>
                <TableCell align="center">
                    <img
                        style={{ width: "70px", height: "70px" }}
                        src={product.img}
                        alt="Product"
                    // loading="lazy"
                    />
                    {/* <img
                        style={{ width: "70px", height: "70px" }}
                        src={`data:image/jpeg;base64,${product.img}`}
                        alt="Product"
                    // loading="lazy"
                    /> */}
                </TableCell>
                <TableCell align="center">
                    <Delete
                        onClick={() => handleDelete(product?._id)}
                        className={`${styles.deleteIcon}`}
                    />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Product Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Product ID</TableCell>
                                        <TableCell align="center">Name</TableCell>
                                        <TableCell align="center">Category</TableCell>
                                        <TableCell align="center">Unit</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center">Sale Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={product._id}>
                                        <TableCell component="th" scope="row">
                                            {product.productId}
                                        </TableCell>
                                        <TableCell align="center">{product.name}</TableCell>
                                        <TableCell align="center">{product.category}</TableCell>
                                        <TableCell align="center">{product.unit}</TableCell>
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


const ManageProducts = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    let reload = useSelector((state) => state.entities.products.reload);
    const products = useSelector((state) => state.entities.products.allProduct);

    useEffect(() => {
        dispatch(loadProducts());
    }, [reload, dispatch]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleProductSearch = (event) => {
        event.preventDefault();
    };


    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px", marginLeft: "-30px" }}>Product</span>{" "}
                    <br /> <span style={{ color: "#969494" }}>Manage Product</span>
                </Typography>
            </Box>

            {/* <Box sx={{ textAlign: "left", mb: 1 }}>
                <Button className={`${styles.filterBtn}`} onClick={() => setOpen(!open)}>Filter</Button>
                <Collapse in={open} sx={{ mt: 2, mb: 2 }} timeout="auto" unmountOnExit className={`${styles.tableContainer}`}>
                    <form onSubmit={handleProductSearch}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ textAlign: "left", mr: 2 }} style={{ fontSize: "17px" }} >
                                Search By Product:
                            </Typography>
                            <TextField onChange={(event) => setInputValue(event.target.value)} size="small" id="outlined-basic" label="Product Name" sx={{ mr: 1 }} variant="outlined" />
                            <Button type="submit" className={`${styles.searchBtn}`}>Search</Button>
                        </Box>
                    </form>
                </Collapse>
            </Box> */}

            <Box sx={{ textAlign: "left", mb: 1 }}>
                <Box className={`${styles.tableContainer}`}>
                    <form onSubmit={handleProductSearch}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ textAlign: "left", mr: 2 }} style={{ fontSize: "17px" }} >
                                Search By Product:
                            </Typography>
                            <TextField onChange={(event) => setInputValue(event.target.value)} size="small" id="outlined-basic" label="Product Name" sx={{ mr: 1 }} variant="outlined" />
                            <Button type="submit" className={`${styles.searchBtn}`}>Search</Button>
                        </Box>
                    </form>
                </Box>
            </Box>

            <Box sx={{ textAlign: "right", my: 2 }}>
                <Button className={`${styles.addProductBtn}`}>Add Product</Button>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Manage Product
                </Typography>
                <hr />
                <TableContainer
                    component={Paper}
                    sx={{ border: 1, borderColor: "grey.300" }}
                >
                    <Table aria-label="simple table">
                        <TableHead className={`${styles.tableHeader}`}>
                            <TableRow>
                                <TableCell />
                                <TableCell className={`${styles.tableCell}`}>SL.</TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Name
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Category
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Price
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Sale Price
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Image
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products
                                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((product, index) => (
                                    <Row
                                        key={product._id}
                                        product={product}
                                        serial={index}
                                    // loading={loading}
                                    // reload={reload}
                                    // setReload={setReload}
                                    />
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography className="mt-3">
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={products.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Typography>
            </Box>
        </Container>
    );
};

export default ManageProducts;
