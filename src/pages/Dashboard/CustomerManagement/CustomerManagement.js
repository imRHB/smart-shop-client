import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TablePagination from "@mui/material/TablePagination";
import { Button, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from "./CustomerManagement.module.css";
// import users from "../../../assets/data/users.json";
import Swal from "sweetalert2";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomerToDB, loadCustomers } from "../../../store/customer";

const override = css`
  display: block;
  border-color: red;
  margin: 0 auto;
`;

function Row(props) {
  const dispatch = useDispatch();
  const { customer, serial, reload, setReload } = props;
  //   const customerDeleted = useSelector(
  //     (state) => state.entities.customer.customerDeletedSuccess
  //   );

  //delete customer
  const handleDeleteCustomer = (id) => {
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
        dispatch(deleteCustomerToDB(id));
        Swal.fire("Deleted!", "Customer has been deleted.", "success");
        // Set reload
        setReload(!reload);
      }
    });
  };
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {serial + 1}
        </TableCell>
        <TableCell align="center">{customer?.name}</TableCell>
        <TableCell align="center">{customer?.address}</TableCell>
        <TableCell align="center">{customer?.phone}</TableCell>
        <TableCell align="center">{customer?.email}</TableCell>
        <TableCell align="center">
          <EditIcon className={`${styles.editIcon}`} />
          <Delete
            onClick={() => handleDeleteCustomer(customer?._id)}
            className={`${styles.deleteIcon}`}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Customer Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Position</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Salary</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={customer?._id}>
                    <TableCell component="th" scope="row">
                      {customer?.name}
                    </TableCell>
                    <TableCell align="center">{customer?.phone}</TableCell>
                    <TableCell align="center">{customer?.position}</TableCell>
                    <TableCell align="center">{customer?.address}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

const CustomerManagement = () => {
  const dispatch = useDispatch();
  // Getting all customer from store
  const allCustomers = useSelector(
    (state) => state.entities.customer.allCustomer
  );
  const customerLoader = useSelector(
    (state) => state.entities.customer.customerLoading
  );

  const [reload, setReload] = useState(false);

  // Load Customers from Database
  useEffect(() => {
    dispatch(loadCustomers());
  }, [reload]);
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
          <span style={{ fontSize: "26px" }}>Manager</span> <br />{" "}
          <span style={{ color: "#969494" }}>Manage Customer</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <Button className={`${styles.addEmployeeBtn}`}>Add Customer</Button>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold" }}>Manage Customer</Typography>
        <hr />
        <TableContainer
          component={Paper}
          sx={{ border: 1, borderColor: "grey.300" }}
        >
          <Table aria-label="simple table">
            <TableHead className={`${styles.tableHeader}`}>
              <TableRow>
                <TableCell />
                <TableCell className={`${styles.tableCell}`}>SL.</TableCell>
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
                  Email
                </TableCell>

                <TableCell align="center" className={`${styles.tableCell}`}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerLoader && (
                <TableRow>
                  <TableCell align="center" colSpan={8}>
                    <FadeLoader
                      color={"#123abc"}
                      loading={customerLoader}
                      css={override}
                      height={10}
                      width={5}
                      radius={2}
                      margin={2}
                    />
                  </TableCell>
                </TableRow>
              )}
              {allCustomers.length > 0 &&
                allCustomers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((customer, index) => (
                    <Row
                      key={customer._id}
                      customer={customer}
                      serial={index}
                      reload={reload}
                      setReload={setReload}
                    />
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography className="mt-3">
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={allCustomers.length}
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

export default CustomerManagement;
