import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Swal from "sweetalert2";
import styles from "./EmployeeManagement.module.css";
import { deleteEmployeeToDB, loadEmployees } from "../../../../store/employee";

function Row(props) {
  const dispatch = useDispatch();
  const { employee, serial, reload, setReload } = props;
  const [open, setOpen] = React.useState(false);
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
        dispatch(deleteEmployeeToDB(id));
        Swal.fire("Deleted!", "Employee has been deleted.", "success");
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
        <TableCell align="center">{employee.name}</TableCell>
        <TableCell align="center">{employee.designation}</TableCell>
        <TableCell align="center">{employee.phone}</TableCell>
        <TableCell align="center">{employee.email}</TableCell>
        <TableCell align="center">
          <img
            style={{ width: "70px", height: "70px" }}
            src={`data:image/jpeg;base64,${employee.image}`}
            alt="Product"
            // loading="lazy"
          />
        </TableCell>
        <TableCell align="center">
          <EditIcon className={`${styles.editIcon}`} />
          <Delete
            onClick={() => handleDelete(employee?._id)}
            className={`${styles.deleteIcon}`}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Employee Details
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
                  <TableRow key={employee._id}>
                    <TableCell component="th" scope="row">
                      {employee.name}
                    </TableCell>
                    <TableCell align="center">{employee.phone}</TableCell>
                    <TableCell align="center">{employee.position}</TableCell>
                    <TableCell align="center">{employee.address}</TableCell>
                    <TableCell align="center">BDT {employee.salary}</TableCell>
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
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    employeeId: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
  }).isRequired,
};

const EmployeeManagement = () => {
  const dispatch = useDispatch();
  // Getting employees from store
  const employees = useSelector(
    (state) => state.entities.employee.allEmployees
  );
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load Employees from Database
  useEffect(() => {
    dispatch(loadEmployees());
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
          <span style={{ fontSize: "26px", marginLeft: "-77px" }}>HRM</span>{" "}
          <br /> <span style={{ color: "#969494" }}>Manage Employee</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <Button className={`${styles.designationBtn}`}>Designation</Button>
        <Button className={`${styles.addEmployeeBtn}`}>Add Employee</Button>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
          Manage Employee
        </Typography>
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
                  Designation
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Phone
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Email
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Picture
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((employee, index) => (
                  <Row
                    key={employee._id}
                    employee={employee}
                    serial={index}
                    loading={loading}
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
            count={employees.length}
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

export default EmployeeManagement;
