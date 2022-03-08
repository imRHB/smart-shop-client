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
import Delete from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import invoices from "../../../../assets/data/invoice.json";
import styles from "./ManageInvoice.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

function Row(props) {
  const { invoice } = props;

  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {invoice._id}
        </TableCell>
        <TableCell align="center">{invoice.name}</TableCell>
        <TableCell align="center">{invoice.item}</TableCell>
        <TableCell align="center">{invoice.date}</TableCell>
        <TableCell align="center">BDT {invoice.total}</TableCell>
        <TableCell align="center">
          <EditIcon className={`${styles.editIcon}`} />
          <Delete className={`${styles.deleteIcon}`} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const ManageInvoice = () => {
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
          <span style={{ fontSize: "26px" }}>MANAGE INVOICE</span> <br />{" "}
          <span style={{ color: "#969494" }}>Manage your Invoice</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <NavLink to="/dashboard/add-new-invoice" style={{ textDecoration: "none" }}>
          <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>
            Add New Invoice
          </Button>
        </NavLink>
        <NavLink to="/dashboard/pos" style={{ textDecoration: "none" }}>
          <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>
            POS
          </Button>
        </NavLink>

      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold" }}>Manage Invoice</Typography>
        <hr />
        <TableContainer
          component={Paper}
          sx={{ border: 1, borderColor: "grey.300" }}
        >
          <Table aria-label="simple table">
            <TableHead className={`${styles.tableHeader}`}>
              <TableRow>

                <TableCell align="center" className={`${styles.tableCell}`}>
                  Order ID
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Customer Name
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Customer Phone
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Purchase Date
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Purchase Amount
                </TableCell>

                <TableCell align="center" className={`${styles.tableCell}`}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((invoice) => (
                  <Row key={invoice._id} invoice={invoice} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className="mt-3"
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={invoices.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Container>
  );
};

export default ManageInvoice;
