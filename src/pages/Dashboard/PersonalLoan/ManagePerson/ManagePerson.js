import React from "react";
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
import AssignmentIcon from "@mui/icons-material/Assignment";
import users from "../../../../assets/data/users.json";
import styles from "./ManagePerson.module.css";



function Row(props) {
    const { employee } = props;

    return (
        <React.Fragment>
            <TableRow
                className={`${styles.tableHover}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell align="center">{employee.name}</TableCell>
                <TableCell align="center">{employee.address}</TableCell>
                <TableCell align="center">{employee.phone}</TableCell>
                <TableCell align="center">
                    <EditIcon className={`${styles.editIcon}`} />
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const ManagePerson = () => {
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
                    <span style={{ fontSize: "26px", marginLeft: "-10px" }}>Manage Person</span>{" "}
                    <br /> <span style={{ color: "#969494", marginLeft: "-77px" }}>Manage Person</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "right", my: 2 }}>
                <Button className={`${styles.addPersonBtn}`}>Add Person</Button>
                <Button className={`${styles.addLoanBtn}`}>Add Loan</Button>
                <Button className={`${styles.manageLoanBtn}`}>Manage Loan</Button>
                <Button className={`${styles.addPaymentBtn}`}>Add Payment</Button>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Manage Person
                </Typography>
                <hr />
                <TableContainer
                    component={Paper}
                    sx={{ border: 1, borderColor: "grey.300" }}
                >
                    <Table aria-label="simple table">
                        <TableHead className={`${styles.tableHeader}`}>
                            <TableRow>

                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Name
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Address
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Phone
                                </TableCell>

                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((employee) => (
                                    <Row key={employee._id} employee={employee} />
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography className="mt-3">
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={users.length}
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

export default ManagePerson;