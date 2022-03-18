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
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./CustomerManagement.module.css";
// import users from "../../../assets/data/users.json";
import Swal from "sweetalert2";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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

    // formData.append("_id", editEmployee._id);
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
    // dispatch(updateEmployeeToDB(formData));
    setReload(!reload);
  };

  const handleEditCustomer = (id) => {
    // dispatch(setEditCustomer({ _id: id }));
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
        <TableCell align="center">{customer?.name}</TableCell>
        <TableCell align="center">{customer?.address}</TableCell>
        <TableCell align="center">{customer?.phone}</TableCell>
        <TableCell align="center">{customer?.email}</TableCell>
        <TableCell align="center">
          <EditIcon
            onClick={() => {
              return handleEditCustomer(customer._id);
            }}
            className={`${styles.editIcon}`}
          />
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

      {/*Modal for Edit Customer Information  */}

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
              Update Customer
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
                        // defaultValue={editEmployee?.name}
                        style={{ background: "#E5E5E5" }}
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <span className="text-danger">
                          Please enter full name.
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
                        Email <sup className="text-danger fw-bold fs-6">*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        // defaultValue={editEmployee?.phone}
                        style={{ background: "#E5E5E5" }}
                        {...register("email", { required: true })}
                      />
                      {errors.phone && (
                        <span className="text-danger">Please enter email.</span>
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
                        Type <sup className="text-danger fw-bold fs-6">*</sup>
                      </label>

                      <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ background: "#E5E5E5" }}
                        {...register("type", { required: true })}
                      >
                        <option>-- select one --</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Regular">Regular</option>
                      </select>
                      {errors.designation && (
                        <span className="text-danger">
                          Please select a designation
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
                        Fax
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fax"
                        // defaultValue={editEmployee?.salary}
                        style={{ background: "#E5E5E5" }}
                        {...register("fax", { required: false })}
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
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        // defaultValue={editEmployee?.city}
                        style={{ background: "#E5E5E5" }}
                        {...register("city", { required: false })}
                      />
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
                        // defaultValue={editEmployee?.zip}
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
                        // defaultValue={editEmployee?.address}
                        style={{ background: "#E5E5E5" }}
                        {...register("address", { required: false })}
                      ></textarea>
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
          <span style={{ fontSize: "26px", marginLeft: "-25px" }}>
            Customer
          </span>{" "}
          <br /> <span style={{ color: "#969494" }}>Manage Customer</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <NavLink
          to={`/dashboard/add-customer`}
          style={{ textDecoration: "none" }}
        >
          <Button className={`${styles.addEmployeeBtn}`}>Add Customer</Button>
        </NavLink>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
          Manage Customer
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
