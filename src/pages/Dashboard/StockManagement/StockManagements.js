import React, { useEffect } from "react";
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
import { Button, Container, TextField } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from "./StockManagements.module.css";

function Row(props) {
    const { product } = props;
    const [open, setOpen] = React.useState(false);

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
                    {product._id}
                </TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{50}</TableCell>
                <TableCell align="center">{product.salePrice}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                product Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Product Name</TableCell>
                                        <TableCell align="center">Category</TableCell>
                                        <TableCell align="center">Product Image</TableCell>
                                        <TableCell align="center">Product Details</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={product._id}>
                                        <TableCell component="th" scope="row">
                                            {product.name}
                                        </TableCell>
                                        <TableCell align="center">{product.category}</TableCell>
                                        <TableCell align="center"><img
                                            style={{ width: "70px", height: "70px" }}
                                            src={product.img}
                                            alt="Product" /></TableCell>
                                        <TableCell align="left">{product.description}</TableCell>
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
    const [inputValue, setInputValue] = React.useState("");
    const [productDisplayed, setProductDisplayed] = React.useState([]);
    const [allProducts, setAllProducts] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(() => {
        fetch("https://zahidhasan2806.github.io/productData/products.json")
            .then(res => res.json())
            .then(data => {

                setAllProducts(data)
                setProductDisplayed(data)
            })
    }, [])
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleProductSearch = (event) => {
        event.preventDefault()
        const matchedProduct = allProducts.filter(product => product.name.toLowerCase().includes(inputValue.toLowerCase()));
        setProductDisplayed(matchedProduct);

    }
    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 1 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>
                        Stock Report</span> <br />{" "}
                    <span style={{ color: "#969494", marginRight: "31px" }}>All Stock Report</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "left", mb: 1 }}>
                <Button className={`${styles.btn}`} onClick={() => setOpen(!open)}>Filter</Button>
                <Collapse in={open} sx={{ mt: 2, mb: 2 }} timeout="auto" unmountOnExit className={`${styles.tableContainer}`}>
                    <form onSubmit={handleProductSearch}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ textAlign: "left", mr: 2 }} style={{ fontSize: "17px" }} >
                                Search By Product:
                            </Typography>
                            <TextField onChange={(event) => setInputValue(event.target.value)} size="small" id="outlined-basic" label="Product Name" sx={{ mr: 1 }} variant="outlined" />
                            <Button type="submit" className={`${styles.btn}`}>Search</Button>
                        </Box>
                    </form>
                </Collapse>
            </Box>

            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>Stock Report</Typography>
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
                                    Products    Name
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Category
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Available Quantity
                                </TableCell>

                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Supplier Price
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Sale Price
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productDisplayed.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((product) => (
                                    <Row key={product._id} product={product} />
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    sx={{ mt: 3 }}
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={allProducts.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </Container>
    );
};

export default StockManagements;