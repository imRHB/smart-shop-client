import React from "react";
import PropTypes from "prop-types";
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
import { Button, Container, Grid, TextField } from "@mui/material";
import products from "../../../assets/data/products.json";
import './ManageProducts.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function Row(props) {
    const { product } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow className="colunm" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell width="8%">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell width="15%" align="start" component="th" scope="row">
                    {product._id}
                </TableCell>
                <TableCell align="center">{product.name}</TableCell>

                <TableCell align="center"> 
               <EditIcon /> 
            <DeleteForeverIcon sx={{marginLeft:'15px'}}/>
                    </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Products Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="start">SL.</TableCell>
                                        <TableCell width="50%" align="center">Description</TableCell>
                                        <TableCell align="center">Unit</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center">SellPrice</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow  key={product._id}>
                                        <TableCell  component="th" scope="row">
                                            {product._id}
                                        </TableCell>
                                        <TableCell align="start">{product.description}</TableCell>
                                        <TableCell align="center">{product.unit}</TableCell>
                                        <TableCell align="center">{product.price}</TableCell>
                                        <TableCell align="center">{product.salePrice}</TableCell>

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

Row.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        productId: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
    }).isRequired,
};

const ManageProducts = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box >
            <Box sx={{marginBottom:'30px'}}>
           <div className='d-flex justify-content-between  border'>
                <div className='text-start ms-2 p-2 '>
                    <h5>SUITE</h5>
                    <small className=''>New Products</small>
                </div>
                <div>
                    <p className='text-primary fw-bold border p-1'>PRODUCTS/SUITE</p>
                </div>

            </div>
           </Box>
            <Container sx={{ width: "100%" }}>
           

            <Box sx={{ boxShadow: '0px 0px 01px 2px whiteSmoke', }}>
                <Typography variant="h6" sx={{ borderBottom: '1px solid lightGray', color: 'gray' }}>
                    Category toevoegen
                </Typography>
                <Grid sx={{ padding: '20px' }} container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="small" sx={{ fontWeight: 'bold', color: 'gray' }}>
                            Category Name *
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{ marginBottom: '50px' }}>
                        <TextField sx={{ width: '50%' }} id="outlined-basic" label="Category Name" variant="outlined" />
                        <Button variant="contained" sx={{ marginLeft: '20px', marginBottom: '10px' }}>Save</Button>
                    </Grid>
                </Grid>



            </Box>

            <Paper sx={{ marginTop: '50px', paddingBottom: '20px', }}>
                <Box sx={{ borderBottom: '1px solid lightGray' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'gray', fontSize: '3vh', margin: '10px', }}>
                        Manage Category
                    </Typography>
                </Box>
                <TableContainer component={Paper} sx={{ width: '97%', margin: '15px', border: '1px solid lightGray' }}>

                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow className="colunm">
                                <TableCell />
                                <TableCell  >SL.</TableCell>
                                <TableCell align="center">Category Name</TableCell>
                                <TableCell align="center">Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {products
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((product) => (
                                    <Row key={product._id} product={product} />
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
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
        </Container>
        </Box>
    );
};

export default ManageProducts;