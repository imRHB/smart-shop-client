import React, { useEffect, useState } from "react";
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
// import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import Swal from "sweetalert2";


import { Link } from "react-router-dom";
function Row(props) {
  const { loan, setLoans, loans } = props;

  let installment = parseFloat(loan.amount / (loan.duration * 12)).toFixed(2);
  console.log(loan);

  const handleDelete = (id) => {
    const url = `https://smart-shop-pos.herokuapp.com/loans/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
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
              const remainingLoans = loans.filter(
                (filteredLoan) => filteredLoan._id !== id
              );
              setLoans(remainingLoans)
            }
          });
        }
      })


  };
  // const handleLoanStatus = (id) => {

  // };
  const address = "Dhaka,Bangladesh"
  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{loan.firstName ? loan.firstName : 'Admin'}</TableCell>
        <TableCell align="center">{loan.address ? loan.address : address}</TableCell>
        <TableCell align="center">{loan.amount}</TableCell>
        <TableCell align="center">{loan.duration} Year/s</TableCell>
        <TableCell align="center">{installment}</TableCell>
        <TableCell align="center"><img style={{ width: "70px", height: "70px" }} className="img-fluid" src={`data:image/jpeg;base64,${loan.img}`} alt="employee" /></TableCell>
        <TableCell align="center">{loan.details}</TableCell>
        <TableCell align="center">{loan.status}</TableCell>
        <TableCell align="center">
          {/* <HowToRegSharpIcon onClick={() => {
            return handleLoanStatus(loan._id);
          }} className={`${styles.approveIcon}`} /> */}
          <Delete
            onClick={() => handleDelete(loan?._id)}
            className={`${styles.deleteIcon}`}
          />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const ManageLoan = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loans, setLoans] = useState([])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    fetch('http://localhost:5000/loans')
      .then(res => res.json())
      .then(data => setLoans(data))
  }, [])

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
                  Name
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Address
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Amount
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Pay (Year)
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Installment (monthly)
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Documents
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Reasons
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Status
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loans
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((loan) => (
                  <Row key={loan._id} loans={loans} loan={loan} setLoans={setLoans} />
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
