import React from 'react';
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Button, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import suppliers from "../../../assets/data/supplier.json";
import styles from "./ManageSupplier.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import ReceiptIcon from '@mui/icons-material/Receipt';


function Row(props) {
    const { supplier } = props;

    return (
        <React.Fragment>
            <TableRow
                className={`${styles.tableHover}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >

                <TableCell component="th" scope="row">
                    {supplier._id}
                </TableCell>
                <TableCell align="center">{supplier.name}</TableCell>
                <TableCell align="center">{supplier.address}</TableCell>
                <TableCell align="center">{supplier.contact}</TableCell>
                <TableCell align="center">BDT {supplier.balance}</TableCell>
                <TableCell align="center">
                    <EditIcon className={`${styles.editIcon}`} />
                    <Delete className={`${styles.deleteIcon}`} />
                </TableCell>
            </TableRow>

        </React.Fragment>
    );
}


const ManageSupplier = () => {
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
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Manage Supplier</span> <br />{" "}
                    <span style={{ color: "#969494" }}>Manage your Supplier</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "right", my: 2 }}>
                <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>Add Supplier</Button>
                <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>Supplier Ledger</Button>
                <Button className={`${styles.paymentBtn}`} startIcon={<ReceiptIcon />}>Supplier Payment</Button>
                <Button className={`${styles.receiptBtn}`} startIcon={<ReceiptIcon />}>Supplier Sales Details</Button>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold" }}>Manage Supplier</Typography>
                <hr />
                <TableContainer
                    component={Paper}
                    sx={{ border: 1, borderColor: "grey.300" }}
                >
                    <Table aria-label="simple table">
                        <TableHead className={`${styles.tableHeader}`}>
                            <TableRow>

                                <TableCell className={`${styles.tableCell}`}>SL.</TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Supplier Name
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Address
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Mobile
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Balance
                                </TableCell>

                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {suppliers
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((supplier) => (
                                    <Row key={supplier._id} supplier={supplier} />
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    className="mt-3"
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={suppliers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </Container>


    );
};
export default ManageSupplier;