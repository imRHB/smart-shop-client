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
import { Container } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import loanstatus from "../../../../assets/data/loanstatus.json";
import styles from "./LoanStatus.module.css";
import { Delete } from "@mui/icons-material";

function Row(props) {
  const { employee } = props;

  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{employee.name}</TableCell>
        <TableCell align="center">{employee.date}</TableCell>
        <TableCell align="center">{employee.amount}</TableCell>
        <TableCell align="center">{employee.payyear}</TableCell>
        <TableCell align="center">{employee.paidamount}</TableCell>
        <TableCell align="center">{employee.status}</TableCell>
        <TableCell align="center">
          <Delete className={`${styles.deleteIcon}`} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const LoanStatus = () => {
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
            Loan Status
          </span>{" "}
          <br />{" "}

        </Typography>
      </Box>

      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
          Loan Status
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
                  Date
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Amount
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Pay Year
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Paid Amount
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
              {loanstatus
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
            count={loanstatus.length}
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

export default LoanStatus;
