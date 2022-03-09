import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
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
import styles from "./ManageSupplier.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import Swal from "sweetalert2";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSupplierToDB,
  loadSuppliers,
  setEditSupplier,
  updateSupplierToDB,
} from "../../../store/supplier";

const override = css`
  display: block;
  border-color: red;
  margin: 0 auto;
`;

function Row(props) {
  const dispatch = useDispatch();
  const { supplier, serial, reload, setReload } = props;
  //   const supplierDeleted = useSelector(
  //     (state) => state.entities.supplier.supplierDeletedSuccess
  //   );

  //delete supplier
  const handleDeleteSupplier = (id) => {
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
        dispatch(deleteSupplierToDB(id));
        Swal.fire("Deleted!", "Supplier has been deleted.", "success");
        // Set reload
        setReload(!reload);
      }
    });
  };
  //   const { supplier, setSuppliers, suppliers } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleNoBtn = () => setShow(false);

  // update supplier
  const editSupplier = useSelector(
    (state) => state.entities.supplier.editSupplier
  );

  const onSubmit = (data) => {
    const { name, contact, address, details, balance } = data;

    const newData = {
      id: editSupplier._id,
      name,
      contact,
      address,
      details,
      balance,
    };

    // Send updated data to the server
    dispatch(updateSupplierToDB(newData));
    reset();
  };

  const handleEditSupplier = (id) => {
    dispatch(setEditSupplier({ _id: id }));
    return setShow(true);
  };

  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {serial + 1}
        </TableCell>
        <TableCell align="center">{supplier.name}</TableCell>
        <TableCell align="center">{supplier.address}</TableCell>
        <TableCell align="center">{supplier.contact}</TableCell>
        <TableCell align="center">BDT {supplier.balance}</TableCell>
        <TableCell align="center">
          <EditIcon
            onClick={() => {
              return handleEditSupplier(supplier._id);
            }}
            className={`${styles.editIcon}`}
          />
          <Delete
            onClick={() => handleDeleteSupplier(supplier?._id)}
            className={`${styles.deleteIcon}`}
          />
        </TableCell>
      </TableRow>

      {/* manage supplier */}

      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        style={{ marginTop: "50px" }}
        scrollable="true"
      >
        <div
          className="shadow rounded"
          style={{ background: "linear-gradient(to right, #1e3c72, #2a5298)" }}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "white" }}>
              Update Supplier
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* form */}
            <form className="pt-3 pb-3" onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box className={`${styles.addSupplierField}`}>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    className={`${styles.supplierTextField}`}
                    defaultValue={editSupplier?.name}
                    label="Supplier Name"
                    variant="outlined"
                    {...register("name", { required: true })}
                  />
                </Box>
                <Box className={`${styles.addSupplierField}`}>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    className={`${styles.supplierTextField}`}
                    label="Supplier Contact No."
                    variant="outlined"
                    defaultValue={editSupplier?.contact}
                    {...register("contact", { required: true })}
                  />
                </Box>
                <Box className={`${styles.addSupplierField}`}>
                  <TextField
                    id="outlined-textarea"
                    size="small"
                    label="Supplier Address"
                    className={`${styles.supplierTextField}`}
                    defaultValue={editSupplier?.address}
                    multiline
                    {...register("address", { required: true })}
                  />
                </Box>
                <Box className={`${styles.addSupplierField}`}>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    className={`${styles.supplierTextField}`}
                    label="Details"
                    variant="outlined"
                    defaultValue={editSupplier?.details}
                    {...register("details", { required: true })}
                  />
                </Box>
                <Box className={`${styles.addSupplierField}`}>
                  <TextField
                    id="outlined-textarea"
                    label="Balance"
                    size="small"
                    defaultValue={editSupplier?.balance}
                    className={`${styles.supplierTextField}`}
                    {...register("balance", { required: true })}
                  />
                </Box>
              </Box>

              <Modal.Footer className="mt-4">
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

const ManageSupplier = () => {
  const dispatch = useDispatch();
  // Getting all supplier from store
  const allSuppliers = useSelector(
    (state) => state.entities.supplier.allSupplier
  );
  const supplierLoader = useSelector(
    (state) => state.entities.supplier.supplierLoading
  );

  const [reload, setReload] = useState(false);

  // Load Employees from Database
  useEffect(() => {
    dispatch(loadSuppliers());
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
          <span style={{ fontSize: "26px" }}>Manage Supplier</span> <br />{" "}
          <span style={{ color: "#969494" }}>Manage your Supplier</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>
          Add Supplier
        </Button>
        <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>
          Supplier Ledger
        </Button>
        <Button className={`${styles.paymentBtn}`} startIcon={<ReceiptIcon />}>
          Supplier Payment
        </Button>
        <Button className={`${styles.receiptBtn}`} startIcon={<ReceiptIcon />}>
          Supplier Sales Details
        </Button>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold" }}>Manage Supplier</Typography>
        <hr />
        <TableContainer
          component={Paper}
          sx={{ border: 1, borderColor: "grey.300" }}
        >
          <Table aria-label="simple table">
            <TableHead className={`${styles.tableHeader}`}>
              <TableRow>
                <TableCell className={`${styles.tableCell}`}>SL.</TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Supplier Name
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Address
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Mobile
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Balance
                </TableCell>

                <TableCell align="center" className={`${styles.tableCell}`}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {supplierLoader && (
                <TableRow>
                  <TableCell align="center" colSpan={8}>
                    <FadeLoader
                      color={"#123abc"}
                      loading={supplierLoader}
                      css={override}
                      height={10}
                      width={5}
                      radius={2}
                      margin={2}
                    />
                  </TableCell>
                </TableRow>
              )}
              {allSuppliers.length > 0 &&
                allSuppliers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((supplier, index) => (
                    <Row
                      key={supplier._id}
                      supplier={supplier}
                      serial={index}
                      reload={reload}
                      setReload={setReload}
                    />
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className="mt-3"
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={allSuppliers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Container>
  );
};

export default ManageSupplier;
