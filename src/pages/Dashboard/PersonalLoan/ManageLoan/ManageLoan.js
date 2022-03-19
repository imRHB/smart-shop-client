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
import AssignmentIcon from "@mui/icons-material/Assignment";
import users from "../../../../assets/data/users.json";
import styles from "./ManageLoan.module.css";
import { Delete } from "@mui/icons-material";
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteLoan, setEditLoan, updateLoanToDB } from "../../../../store/loans";
import { Link } from "react-router-dom";
function Row(props) {
  const { employee, reload, setReload } = props;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
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
        dispatch(deleteLoan(id));
        Swal.fire("Deleted!", "Employee has been deleted.", "success");
        setReload(!reload);
      }
    });
  };
  const handleLoanStatus = (id) => {
    dispatch(setEditLoan({ _id: id }));
    const updateStatus = { status: "approved" };
    dispatch(updateLoanToDB(updateStatus));
    setReload(!reload)
  };
  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">15 - 2 - 2022</TableCell>
        <TableCell align="center">{employee.name}</TableCell>
        <TableCell align="center">{employee.phone}</TableCell>
        <TableCell align="center">{employee.address}</TableCell>
        <TableCell align="center">{500000}</TableCell>
        <TableCell align="center">{100000}</TableCell>
        <TableCell align="center"><img style={{ width: "70px", height: "70px" }} className="img-fluid" src={employee.img} alt="employee" /></TableCell>
        <TableCell align="center">Home Loan</TableCell>
        <TableCell align="center">
          <HowToRegSharpIcon onClick={() => {
            return handleLoanStatus(employee._id);
          }} className={`${styles.approveIcon}`} />
          <Delete
            onClick={() => handleDelete(employee?._id)}
            className={`${styles.deleteIcon}`}
          />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const ManageLoan = () => {
  const [reload, setReload] = React.useState(false);
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
          <span style={{ fontSize: "26px", marginLeft: "-10px" }}>
            Manage Loan
          </span>{" "}
          <br />{" "}
          <span style={{ color: "#969494", marginLeft: "-65px" }}>
            Manage Loan
          </span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <Link to='/dashboard/add-personal-loan' style={{ textDecoration: "none" }}>
          <Button className={`${styles.addLoanBtn}`}>Add Loan</Button>
        </Link>

        <Button className={`${styles.addPaymentBtn}`}>Add Payment</Button>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
          Manage Loan
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
                  Date
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Name
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Phone
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Address
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Amount
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Installment/Year
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Documents
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Reasons
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
                  <Row key={employee._id} employee={employee} setReload={setReload} reload={reload} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </Box>
    </Container>
  );
};

export default ManageLoan;
