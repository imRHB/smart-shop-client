import React, { useEffect } from 'react';
import { Box, Container, Paper, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import Table from "@mui/material/Table";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Delete from "@mui/icons-material/Delete";
import styles from './ExpenseItem.module.css';
import { deleteExpenseItemFromDb, loadExpenseItems, saveExpenseItemToDb, setReload } from '../../../store/expenses';

function Row(props) {
    const { expItem, serial, reload } = props;
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Do you want to delete the item?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        })
            .then(result => {
                if (result.isConfirmed) {
                    dispatch(deleteExpenseItemFromDb(id));
                    Swal.fire('Successfull', 'Expense item deleted!', 'success');
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
                <TableCell component="th" scope="row">
                    {serial + 1}
                </TableCell>
                <TableCell align="center">{expItem.name}</TableCell>
                <TableCell align="center">
                    {/* <EditIcon className={`${styles.editIcon}`} /> */}
                    <Delete
                        onClick={() => handleDelete(expItem?._id)}
                        className={`${styles.deleteIcon}`}
                    />
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const ExpenseItem = () => {
    const dispatch = useDispatch();
    let reload = useSelector((state) => state.entities.expenses.reload);
    const expenseItems = useSelector((state) => state.entities.expenses.expenseItems);

    useEffect(() => {
        dispatch(loadExpenseItems());
    }, [reload, dispatch]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const onSubmit = (data) => {
        dispatch(saveExpenseItemToDb(data));

        dispatch(setReload({ reload: !reload }));
        Swal.fire("Success", "New Expense Item Added", "success");

        reset();
    };

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
                    <span style={{ fontSize: "26px", marginLeft: '-36px' }}>Expense</span>{" "}
                    <br /> <span style={{ color: "#969494" }}>Manage Expenses</span>
                </Typography>
            </Box>

            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Add New Expense
                </Typography>
                <hr />
                <div className="mt-2">
                    <div className="form-container">
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Expense Name{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Expense Name"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("name", { required: true })}
                                                />
                                                {errors.name && (
                                                    <span className="text-danger">
                                                        Please enter expense item name.
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-4 border bg-light">
                                            <div className="mb-3">
                                                <Box sx={{ textAlign: "center", my: 2 }}>
                                                    <input
                                                        type="reset"
                                                        className={`${"btn"} ${styles.resetBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Reset"
                                                    />
                                                    <input
                                                        type="submit"
                                                        className={`${"btn"} ${styles.saveBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Save"
                                                    />
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Box>

            <Box sx={{ marginTop: 5 }} className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Manage Expense
                </Typography>
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
                                    Expense Name
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {expenseItems
                                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((expItem, index) => (
                                    <Row
                                        key={expItem._id}
                                        expItem={expItem}
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
                        count={expenseItems.length}
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

export default ExpenseItem;
