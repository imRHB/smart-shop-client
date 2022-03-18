import React, { useEffect } from 'react';
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
import Delete from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from "./ManageTransaction.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import PreviewIcon from '@mui/icons-material/Preview';
import { NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction, loadPayments } from "../../../../store/paymentTransaction";

const override = css`
  display: block;
  border-color: red;
  margin: 0 auto;
`;

function Row(props) {
    const { transaction, reload, setReload } = props;
    const dispatch = useDispatch();

    //delete transaction
    const handleDeleteTransaction = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteTransaction(id));
                Swal.fire("Deleted!", "Transaction has been deleted.", "success");
                // Set reload
                setReload(!reload);
            }
        });
    };

    return (
        <React.Fragment>
            <TableRow
                className={`${styles.tableHover}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {transaction._id}
                </TableCell>
                <TableCell align="center">{transaction.category}</TableCell>
                <TableCell align="center">{transaction.date}</TableCell>
                <TableCell align="center">BDT {transaction.amount}</TableCell>
                <TableCell align="center">BDT 0.00</TableCell>
                <TableCell align="center">
                    <PreviewIcon className={`${styles.editIcon}`} />
                    <Delete className={`${styles.deleteIcon}`} />
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const ManageTransaction = () => {
    const dispatch = useDispatch();
    const [reload, setReload] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    //  get all transactions from store
    const transactions = useSelector(
        (state) => state.entities.payment.allPayment
    );

    const transactionLoader = useSelector(
        (state) => state.entities.payment.paymentLoading
    );

    // Load transactions from Database
    useEffect(() => {
        dispatch(loadPayments());
    }, [dispatch, reload]);

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
                    <span style={{ fontSize: "26px" }}>ACCOUNTS</span> <br />{" "}
                    <span style={{ color: "#969494" }}>Manage Transaction</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "right", my: 2 }}>
                <NavLink to="/dashboard/payment" style={{ textDecoration: "none" }}>
                    <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>
                        Make Payment
                    </Button>
                </NavLink>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold" }}>Manage Transaction</Typography>
                <hr />
                <TableContainer
                    component={Paper}
                    sx={{ border: 1, borderColor: "grey.300" }}
                >
                    <Table aria-label="simple table">
                        <TableHead className={`${styles.tableHeader}`}>
                            <TableRow>

                                <TableCell className={`${styles.tableCell}`}>Transaction ID</TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Transaction Category
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Transaction Date

                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Paid Amount
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Due Amount
                                </TableCell>

                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {transactions
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((transaction) => (
                                    <Row key={transaction._id} transaction={transaction} />
                                ))} */}



                            {transactionLoader && (
                                <TableRow>
                                    <TableCell align="center" colSpan={8}>
                                        <FadeLoader
                                            color={"#123abc"}
                                            loading={transactionLoader}
                                            css={override}
                                            height={10}
                                            width={5}
                                            radius={2}
                                            margin={2}
                                        />
                                    </TableCell>
                                </TableRow>
                            )}
                            {transactions.length > 0 &&
                                transactions
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((transaction, index) => (
                                        <Row
                                            key={transaction._id}
                                            transaction={transaction}
                                            serial={index}
                                            reload={reload}
                                            setReload={setReload}
                                        />
                                    ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    className="mt-3"
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={transactions.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </Container>
    );
};

export default ManageTransaction;