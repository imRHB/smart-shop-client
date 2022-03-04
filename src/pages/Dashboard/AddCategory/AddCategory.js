import React from 'react';
import { Container } from "react-bootstrap";
import { Box, Paper, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import category from '../../../assets/data/category.json';
import styles from './AddCategory.module.css';
import { useForm } from "react-hook-form";

function Row(props) {
    const { ctgry, serial } = props;

    const handleDelete = () => {

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
                <TableCell align="center">{ctgry.name}</TableCell>
                <TableCell align="center">
                    <EditIcon className={`${styles.editIcon}`} />
                    <Delete
                        onClick={() => handleDelete(ctgry?._id)}
                        className={`${styles.deleteIcon}`}
                    />
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const AddCategory = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const onSubmit = (data) => {
        console.log(data);
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
                    <span style={{ fontSize: "26px", marginLeft: '-36px' }}>Product</span>{" "}
                    <br /> <span style={{ color: "#969494" }}>Product Category</span>
                </Typography>
            </Box>

            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Add New Category
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
                                                    Name{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Category Name"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("name", { required: true })}
                                                />
                                                {errors.name && (
                                                    <span className="text-danger">
                                                        Please enter category name.
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Details
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    placeholder="Product Details"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("description", { required: false })}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                                        {/* some space */}
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                                        <div className="p-3 border bg-light">
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
                    Manage Category
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
                                    Category Name
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {category
                                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((ctgry, index) => (
                                    <Row
                                        key={ctgry._id}
                                        ctgry={ctgry}
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
                        count={category.length}
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

export default AddCategory;