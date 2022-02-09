import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Container } from "@mui/material";
import suppliers from "../../../assets/data/supplier.json";

function Row(props) {
    const { supplier } = props;

    return (
        <React.Fragment>
            <TableRow hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                    {supplier._id}
                </TableCell>
                <TableCell align="center">{supplier.name}</TableCell>
                <TableCell align="center">{supplier.address}</TableCell>
                <TableCell align="center">{supplier.contact}</TableCell>
                <TableCell align="center">BDT {supplier.balance}</TableCell>
                <TableCell align="center">{"Edit | Delete"}</TableCell>
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
        <Container sx={{ width: "100%" }}>
            <Paper elevation={3}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell>SL.</TableCell>
                                <TableCell align="center">Supplier Name</TableCell>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">Mobile</TableCell>
                                <TableCell align="center">Balance</TableCell>
                                <TableCell align="center">Action</TableCell>
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
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={suppliers.length}
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
export default ManageSupplier;