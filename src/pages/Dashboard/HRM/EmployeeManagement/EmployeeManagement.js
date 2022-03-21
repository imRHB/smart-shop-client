import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
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
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Swal from "sweetalert2";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import CloseIcon from "@mui/icons-material/Close";
import cloudImage from "../../../../assets/images/cloud-upload.png";
import styles from "./EmployeeManagement.module.css";
import {
  deleteEmployeeToDB,
  loadEmployees,
  setEditEmployee,
  updateEmployeeToDB,
} from "../../../../store/employee";
import { loadDesignations } from "../../../../store/designation";
import bloodGroups from "../../../../assets/data/bloodGroups.json";

const override = css`
  display: block;
  border-color: red;
  margin: 0 auto;
`;

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

  let sl = 0;
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((result) => {
        setCountries(result.data);
      });
  }, [reload]);

  const employees = useSelector(
    (state) => state.entities.employee.allEmployees
  );
  const editEmployee = useSelector(
    (state) => state.entities.employee.editEmployee
  );

  // Getting all designation from store
  const designations = useSelector(
    (state) => state.entities.designation.allDesignation
  );

  // Load all designations from Database
  useEffect(() => {
    dispatch(loadDesignations());
  }, [reload, dispatch]);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleNoBtn = () => setShow(false);
  const onSubmit = (data) => {
    let {
      name,
      designation,
      phone,
      salary,
      bloodGroup,
      country,
      city,
      zip,
      address,
      image,
    } = data;
    const formData = new FormData();

    formData.append("_id", editEmployee._id);
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("phone", phone);
    formData.append("salary", salary);
    formData.append("bloodGroup", bloodGroup);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("zip", zip);
    formData.append("address", address);
    if (image) {
      formData.append("image", image[0]);
    }

    console.log(formData);
    // Send updated data to the server
    dispatch(updateEmployeeToDB(formData));
    setReload(!reload);
  };

  const handleEditEmployee = (id) => {
    dispatch(setEditEmployee({ _id: id }));
    return setShow(true);
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
          <EditIcon
            onClick={() => {
              return handleEditEmployee(employee._id);
            }}
            className={`${styles.editIcon}`}
          />
          <Delete
            onClick={() => handleDelete(employee?._id)}
            className={`${styles.deleteIcon}`}
          />
        </TableCell>
      </TableRow>
      <TableRow style={{ background: "#D0F2FF" }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                sx={{
                  textAlign: "center",
                  py: 1,
                  color: "#001E3C",
                  fontWeight: "900",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Employee Details
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Name
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Phone
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Position
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Address
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Salary
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={employee._id}>
                    <TableCell align="center">{employee.name}</TableCell>
                    <TableCell align="center">{employee.phone}</TableCell>
                    <TableCell align="center">{employee.designation}</TableCell>
                    <TableCell align="center">{employee.address}</TableCell>
                    <TableCell align="center">BDT {employee.salary}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Divider sx={{ mt: 1 }} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      {/*Modal for Edit Employee  */}

      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        style={{ marginTop: "50px" }}
      >
        <div
          className="shadow rounded"
          style={{ background: "linear-gradient(to right, #1e3c72, #2a5298)" }}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "white" }}>
              Update Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              maxHeight: "calc(100vh - 210px)",
              overflowY: "auto",
            }}
          >
            {/* form */}
            <form className="pt-3 pb-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="row gx-3 mb-3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="p-2 border rounded bg-light">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Full Name{" "}
                        <sup className="text-danger fw-bold fs-6">*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        defaultValue={editEmployee?.name}
                        style={{ background: "#E5E5E5" }}
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <span className="text-danger">
                          Please enter first name.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="p-2 border rounded bg-light">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Designation{" "}
                        <sup className="text-danger fw-bold fs-6">*</sup>
                      </label>

                      <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ background: "#E5E5E5" }}
                        {...register("designation", { required: true })}
                      >
                        <option>-- select one --</option>
                        {designations.map((designation) => (
                          <option
                            key={designation._id}
                            value={designation?.name}
                            selected={
                              editEmployee?.designation === designation?.name
                                ? "selected"
                                : ""
                            }
                          >
                            {designation?.name}
                          </option>
                        ))}
                      </select>
                      {errors.designation && (
                        <span className="text-danger">
                          Please select a designation
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gx-3 mb-3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="p-2 border rounded bg-light">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Phone <sup className="text-danger fw-bold fs-6">*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        defaultValue={editEmployee?.phone}
                        style={{ background: "#E5E5E5" }}
                        {...register("phone", { required: true })}
                      />
                      {errors.phone && (
                        <span className="text-danger">
                          Please enter phone number.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="p-2 border rounded bg-light">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Blood Group
                      </label>

                      <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ background: "#E5E5E5" }}
                        {...register("bloodGroup", { required: false })}
                      >
                        <option>-- select one --</option>
                        {bloodGroups.map((blood) => (
                          <option
                            key={blood._id}
                            value={blood?.name}
                            selected={
                              editEmployee?.bloodGroup === blood?.name
                                ? "selected"
                                : ""
                            }
                          >
                            {blood?.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gx-3 mb-3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="p-2 border rounded bg-light">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Salary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Salary"
                        defaultValue={editEmployee?.salary}
                        style={{ background: "#E5E5E5" }}
                        {...register("salary", { required: false })}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="p-2 border bg-light">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        defaultValue={editEmployee?.city}
                        style={{ background: "#E5E5E5" }}
                        {...register("city", { required: false })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gx-3 mb-3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="p-2 border bg-light">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Country
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ background: "#E5E5E5" }}
                        {...register("country", { required: true })}
                      >
                        <option>-- select country --</option>
                        {countries?.map((countryDetail) => (
                          <option
                            key={sl++}
                            value={countryDetail?.country}
                            selected={
                              editEmployee?.country === countryDetail?.country
                                ? "selected"
                                : ""
                            }
                          >
                            {countryDetail?.country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="p-2 border rounded bg-light">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                        defaultValue={editEmployee?.zip}
                        style={{ background: "#E5E5E5" }}
                        {...register("zip", { required: false })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gx-3 mb-3">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="p-2 border rounded bg-light">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        style={{ fontWeight: "bold" }}
                      >
                        Address
                      </label>
                      <textarea
                        className="form-control"
                        rows="2"
                        placeholder="Address"
                        defaultValue={editEmployee?.address}
                        style={{ background: "#E5E5E5" }}
                        {...register("address", { required: false })}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gx-3 mb-3">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="p-2 border rounded bg-light">
                    <div className="mb-2">
                      <span
                        className="mb-2 d-inline-block"
                        style={{ fontWeight: "bold" }}
                      >
                        Picture
                      </span>
                      <div className="input-group mb-4">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupFile02"
                        >
                          <img
                            style={{ height: "35px" }}
                            src={cloudImage}
                            alt=""
                          />{" "}
                          <span
                            style={{ color: "#251D58", fontWeight: "bold" }}
                          >
                            Upload image
                          </span>
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          className="form-control"
                          style={{ background: "#E5E5E5" }}
                          id="inputGroupFile02"
                          {...register("image", { required: false })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Modal.Footer className="mt-4 pe-0">
                {/* confirmation button */}
                <Button
                  type="submit"
                  variant="outlined"
                  className={`${styles.updateBtn}`}
                  endIcon={<UpgradeIcon />}
                >
                  Update
                </Button>
                <Button
                  className={`${styles.receiptBtn}`}
                  endIcon={<CloseIcon />}
                  onClick={handleNoBtn}
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </div>
      </Modal>
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
  const employeesLoader = useSelector(
    (state) => state.entities.employee.employeesLoading
  );
  const [reload, setReload] = useState(false);

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
        <NavLink
          to={`/dashboard/designation`}
          style={{ textDecoration: "none" }}
        >
          <Button className={`${styles.designationBtn}`}>Designation</Button>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          to={`/dashboard/add-employee`}
        >
          <Button className={`${styles.addEmployeeBtn}`}>Add Employee</Button>
        </NavLink>
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
              {employeesLoader && (
                <TableRow>
                  <TableCell align="center" colSpan={8}>
                    <FadeLoader
                      color={"#123abc"}
                      loading={employeesLoader}
                      css={override}
                      height={10}
                      width={5}
                      radius={2}
                      margin={2}
                    />
                  </TableCell>
                </TableRow>
              )}
              {employees.length > 0 &&
                employees
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((employee, index) => (
                    <Row
                      key={employee._id}
                      employee={employee}
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
