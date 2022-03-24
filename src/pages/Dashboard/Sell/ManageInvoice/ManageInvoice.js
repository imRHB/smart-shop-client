import React, { useEffect } from "react";
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
import PreviewIcon from '@mui/icons-material/Preview';
import Delete from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FadeLoader from "react-spinners/FadeLoader";
import styles from "./ManageInvoice.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { loadInvoices, deleteInvoice } from "../../../../store/invoice";


const override = css`
  display: block;
  border-color: red;
  margin: 0 auto;
`;

function Row(props) {
  const dispatch = useDispatch();
  const { invoice, reload, setReload } = props;

  //delete invoice 
  const handleDeleteInvoice = (id) => {
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
        dispatch(deleteInvoice(id));
        Swal.fire("Deleted!", "Invoice has been deleted.", "success");
        // Set reload
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
        <TableCell component="th" scope="row">
          {invoice._id}
        </TableCell>
        <TableCell align="center">{invoice.name}</TableCell>
        <TableCell align="center">{invoice.customerPhone}</TableCell>
        <TableCell align="center">{invoice.date}</TableCell>
        <TableCell align="center">BDT {invoice.grandTotal}</TableCell>
        <TableCell align="center">
          <NavLink to={`/customer-invoice/${invoice._id}`}>
            <PreviewIcon
              className={`${styles.editIcon}`} />
          </NavLink>
          <Delete
            className={`${styles.deleteIcon}`}
            onClick={() => handleDeleteInvoice(invoice?._id)}
          />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const ManageInvoice = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  //  get all orders from store
  const invoices = useSelector(
    (state) => state.entities.invoice.allInvoice
  );

  const invoiceLoader = useSelector(
    (state) => state.entities.invoice.invoiceLoading
  );

  // Load orders from Database
  useEffect(() => {
    dispatch(loadInvoices());
  }, [dispatch, reload]);

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
          <span style={{ fontSize: "26px" }}>Sell (Customer)</span> <br />{" "}
          <span style={{ color: "#969494", marginLeft: '-64px' }}>Manage Invoice</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <NavLink to="/dashboard/add-new-invoice" style={{ textDecoration: "none" }}>
          <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>
            Add New Invoice
          </Button>
        </NavLink>
        {/* <NavLink to="/dashboard/pos" style={{ textDecoration: "none" }}>
          <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>
            POS
          </Button>
        </NavLink> */}

      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>Manage Invoice</Typography>
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

              {invoiceLoader && (
                <TableRow>
                  <TableCell align="center" colSpan={8}>
                    <FadeLoader
                      color={"#123abc"}
                      loading={invoiceLoader}
                      css={override}
                      height={10}
                      width={5}
                      radius={2}
                      margin={2}
                    />
                  </TableCell>
                </TableRow>
              )}
              {invoices.length > 0 &&
                invoices
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((invoice, index) => (
                    <Row
                      key={invoice._id}
                      invoice={invoice}
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
