import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./AddInvoice.module.css";
import TextField from "@mui/material/TextField";
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import Delete from "@mui/icons-material/Delete";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Swal from "sweetalert2";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import InputLabel from '@mui/material/InputLabel';

const AddInvoice = () => {
  const [open, setOpen] = React.useState(false);
  const [toggle, setToggle] = useState(false);
  const [tableRow, setTableRow] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const buttonToggle = () => {
    setToggle(!toggle);
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://smart-shop-pos.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setFilteredProducts(data))
  }, [filteredProducts]);


  const [unit, setUnit] = React.useState('');

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>ADD NEW INVOICE</span> <br />
          <span style={{ color: "#969494" }}>Add New Invoice</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <NavLink to="/dashboard/manage-invoice" style={{ textDecoration: "none" }}>
          <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>
            Manage Invoice
          </Button>
        </NavLink>
        <NavLink to="/dashboard/pos" style={{ textDecoration: "none" }}>
          <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>
            POS
          </Button>
        </NavLink>
      </Box>

      <Box className={`${styles.invoiceContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "start" }}>
          Add New Invoice
        </Typography>
        <hr />

        <form>
          <Box className={`${styles.tableContainer}`}>
            <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
              <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                Customer Contact No.<span>*</span>
              </Typography>

              <TextField
                id="outlined-basic"
                size="small"
                sx={{ width: "45%", backgroundColor: "white" }}
                label="Customer Contact"
                variant="outlined"
                {...register("contact", { required: true })}
              />
              <Button
                sx={{ borderRadius: 0, marginTop: "2px" }}
                onClick={() => {
                  setOpen(!open);
                  buttonToggle();
                }}
                className={`${styles.paymentBtn}`}
              >
                {toggle ? "Old Customer" : "New Customer"}
              </Button>
            </Box>

            <Collapse in={open} timeout="auto">
              <Box sx={{ width: "45%", display: "flex", flexContent: "between" }}>
                <Box className={`${styles.addSupplierField} ${"pb-4, me-2"}`}>
                  <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                    Customer Name <span>*</span>
                  </Typography>

                  <TextField
                    size="small"
                    id="outlined-basic"
                    sx={{ backgroundColor: "white" }}
                    label="Customer Name"
                    variant="outlined"
                    {...register("name", { required: true })}
                  />
                </Box>
                <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                  <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                    Customer Email
                  </Typography>

                  <TextField
                    size="small"
                    id="outlined-basic"
                    sx={{ backgroundColor: "white" }}
                    label="Customer Email"
                    variant="outlined"
                    {...register("email")}
                  />
                </Box>
              </Box>

              <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                  Address
                </Typography>

                <TextField
                  size="small"
                  id="outlined-basic"
                  sx={{ width: "45%", backgroundColor: "white" }}
                  label="Customer Address"
                  variant="outlined"
                  {...register("address")}
                />
              </Box>
            </Collapse>

            <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
              <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                Date<span>*</span>
              </Typography>

              <input
                type="date"
                {...register("date", { required: true })}
                style={{
                  width: "45%",
                  padding: "10px",
                  backgroundColor: "white",
                  border: "1px solid #aeaeae",
                  borderRadius: "3px",
                }}
              />
            </Box>
            <TableContainer
              component={Paper}
              sx={{ border: 1, borderColor: "grey.300" }}
            >
              <Table aria-label="simple table">
                <TableHead className={`${styles.tableHeader}`}>
                  <TableRow>
                    <TableCell
                      className={`${styles.tableCell}`}
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)", textAlign: "center" }}
                    >
                      Product Information<span>*</span>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)", textAlign: "center" }}
                      className={`${styles.tableCell}`}
                    >
                      Available Quantity
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)", textAlign: "center" }}
                      className={`${styles.tableCell}`}
                    >
                      Quantity
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)", textAlign: "center" }}
                      className={`${styles.tableCell}`}
                    >
                      Unit
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)", textAlign: "center" }}
                      className={`${styles.tableCell}`}
                    >
                      Price<span>*</span>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)", textAlign: "center" }}
                      className={`${styles.tableCell}`}
                    >
                      Total
                    </TableCell>

                    <TableCell align="center" className={`${styles.tableCell}`}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[...Array(tableRow)].map((elementInArray, index) => {
                    return (
                      <TableRow>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <Stack spacing={2} sx={{ width: 300 }}>
                            <Autocomplete
                              {...register("product", { required: true })}
                              style={{
                                backgroundColor: "#f1f3f6",
                              }}
                              freeSolo
                              id="free-solo-demo"
                              size="small"
                              options={filteredProducts.map((product) => product.name)}
                              renderInput={(params) => <TextField {...params} label=" Choose product" />}
                            />
                          </Stack>
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Available Qn."
                            {...register("ctn", { required: true })}
                            style={{
                              width: "100px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                              p: 1,
                              borderRadius: "3px"
                            }}
                          />
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="text"
                            placeholder="0"
                            {...register("quantity", { required: true })}
                            style={{
                              width: "70px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                              borderRadius: "3px"
                            }}
                          />
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1, width: "160px"
                          }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Unit</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              size="small"
                              className={`${styles.inputFields}`}
                              label="Select Unit"
                              sx={{ padding: "4px" }}
                              style={{
                                backgroundColor: "#f1f3f6",
                              }}
                              {...register("unit", { required: true })}
                              value={unit}
                              onChange={handleUnitChange}
                            >
                              <MenuItem value="cash">K.G.</MenuItem>
                              <MenuItem value="cheque">Gram</MenuItem>
                              <MenuItem value="card">Pcs.</MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Price"
                            {...register("price", { required: true })}
                            style={{
                              width: "70px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                              borderRadius: "3px"
                            }}
                          />
                        </TableCell>


                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="text"
                            placeholder="0"
                            {...register("total", { required: true })}
                            style={{
                              width: "70px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                              borderRadius: "3px"
                            }}
                          />
                        </TableCell>
                        <TableCell
                          onClick={() => {
                            if (tableRow <= 1) {
                              Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'There are only one row, you can not delete it!'
                              })
                            } else {
                              setTableRow(tableRow - 1);
                            }
                          }}
                          align="center"
                        >
                          {" "}
                          <Delete
                            color="error"
                            className={`${styles.deleteIcon}`}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        textAlign: "right",
                        fontWeight: "bold",
                      }}
                    >
                      Total Discount:
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        p: 1,
                      }}
                    >
                      <input
                        type="text"
                        placeholder="0.00"
                        {...register("totalDiscount", { required: true })}
                        style={{
                          width: "70px",
                          padding: "8px",
                          backgroundColor: "#f1f3f6",
                          border: "1px solid #aeaeae",
                          borderRadius: "3px"
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        fontWeight: "bold",
                        textAlign: "right",
                      }}
                    >
                      Grand Total:
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        p: 1,
                      }}
                    >
                      <input
                        type="text"
                        placeholder="0"
                        {...register("grandTotal", { required: true })}
                        style={{
                          width: "70px",
                          padding: "8px",
                          backgroundColor: "#f1f3f6",
                          border: "1px solid #aeaeae",
                          borderRadius: "3px"
                        }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    >
                      <Button
                        variant="contained"
                        sx={{ borderRadius: "0" }}
                        onClick={() => setTableRow(tableRow + 1)}
                        className={`${styles.receiptBtn}`}
                        color="success"
                      >
                        Add New Item
                      </Button>
                    </TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        fontWeight: "bold",
                        p: 1,
                      }}
                    >
                      Paid Amount:
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    >
                      <input
                        type="text"
                        placeholder="0.00"
                        {...register("paid", { required: true })}
                        style={{
                          width: "70px",
                          padding: "8px",
                          backgroundColor: "#f1f3f6",
                          border: "1px solid #aeaeae",
                          borderRadius: "3px"
                        }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        p: 1,
                      }}
                    >
                      <Button
                        sx={{ borderRadius: "0" }}
                        className={`${styles.paymentBtn}`}
                        variant="contained"
                        color="success"
                      >
                        Submit
                      </Button>
                      <Button
                        sx={{ borderRadius: "0" }}
                        variant="contained"
                        color="success"
                      >
                        Print Invoice
                      </Button>
                    </TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        fontWeight: "bold",
                        textAlign: "right",
                        p: 1,
                      }}
                    >
                      Change Amount:
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    >
                      <input
                        type="text"
                        placeholder="0"
                        {...register("changeAmount", { required: true })}
                        style={{
                          width: "70px",
                          padding: "8px",
                          backgroundColor: "#f1f3f6",
                          border: "1px solid #aeaeae",
                          borderRadius: "3px"
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </form>
      </Box >
    </Container >
  );
};

export default AddInvoice;
