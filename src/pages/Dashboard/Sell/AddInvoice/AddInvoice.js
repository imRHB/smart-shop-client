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
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Swal from "sweetalert2";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import { saveInvoiceToDB } from "../../../../store/invoice";
import { loadCustomers } from "../../../../store/customer";
import { loadProducts } from "../../../../store/products";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const AddInvoice = () => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState("");
  const [tableRow, setTableRow] = useState(1);
  const [unit, setUnit] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [value, setValue] = React.useState("Old Customer");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Getting all customer from store
  const allCustomer = useSelector(
    (state) => state.entities.customer.allCustomer
  );

  // Getting all product from store
  const allProducts = useSelector(
    (state) => state.entities.products.allProduct
  );

  // Load customers from Database
  useEffect(() => {
    dispatch(loadCustomers());
  }, [dispatch]);

  // Load products from Database
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const productNames = allProducts.find((productName) => {
    if (productName.name === filteredProducts) {
      return true;
    }
    return false;
  });

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  let total = quantity * productNames?.sellPrice;
  let grandTotal = total - (Number(total) * Number(discount)) / 100;

  const onSubmit = (data) => {
    data.payment = "unpaid";
    data.product = filteredProducts;
    //Send form data to Server
    dispatch(saveInvoiceToDB(data));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product Purchased successfully!!",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/payment-gateway";
      }
    });
    reset();
  };

  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>Sell (Customer)</span> <br />
          <span style={{ color: "#969494", marginLeft: "-58px" }}>
            Add New Invoice
          </span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <NavLink
          to="/dashboard/manage-invoice"
          style={{ textDecoration: "none" }}
        >
          <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>
            Manage Invoice
          </Button>
        </NavLink>
      </Box>

      <Box className={`${styles.invoiceContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "start" }}>
          Add New Invoice
        </Typography>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={`${styles.tableContainer}`}>
            <Box sx={{ width: "100%", bgcolor: "background.paper", mb: 3 }}>
              <TabContext value={value}>
                <Box
                  sx={{
                    borderColor: "divider",
                    backgroundColor: "rgb(221, 222, 241)",
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    sx={{ textAlign: "center", backgroundColor: "#d2d4fc" }}
                    centered
                  >
                    <Tab
                      label="Old Customer"
                      value="Old Customer"
                      sx={{ color: "black", fontWeight: "bold" }}
                    />
                    <Tab
                      label="New Customer"
                      value="New Customer"
                      sx={{ color: "black", fontWeight: "bold" }}
                    />
                  </TabList>
                </Box>

                <Box className={`${styles.addSupplierField} ${"pb-1"}`}>
                  <Typography
                    sx={{
                      textAlign: "start",
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginLeft: 5,
                      mt: 2,
                    }}
                  >
                    Customer Contact No.<span>*</span>
                  </Typography>

                  <Stack spacing={2} sx={{ marginLeft: 5, mb: 1 }}>
                    <Autocomplete
                      sx={{ width: "45%", backgroundColor: "#f1f3f6" }}
                      freeSolo
                      id="free-solo-demo"
                      size="small"
                      options={allCustomer.map((customer) => customer?.phone)}
                      renderInput={(params) => (
                        <TextField
                          {...register("customerPhone", { required: true })}
                          {...params}
                          label=" customer Contact"
                        />
                      )}
                    />
                  </Stack>
                </Box>

                <TabPanel value="New Customer">
                  <Box
                    sx={{
                      width: "47%",
                      display: "flex",
                      flexContent: "between",
                    }}
                  >
                    <Box className={`${styles.addSupplierField} ${"me-2"}`}>
                      <Typography
                        sx={{
                          textAlign: "start",
                          fontWeight: "bold",
                          fontSize: "14px",
                          ml: 2,
                        }}
                      >
                        Customer Name<span>*</span>
                      </Typography>

                      <TextField
                        size="small"
                        id="outlined-basic"
                        sx={{ backgroundColor: "#f1f3f6", ml: 2 }}
                        label="Customer Name"
                        variant="outlined"
                        {...register("name")}
                      />
                    </Box>
                    <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                      <Typography
                        sx={{
                          textAlign: "start",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        Customer Email
                      </Typography>

                      <TextField
                        size="small"
                        id="outlined-basic"
                        sx={{ backgroundColor: "#f1f3f6" }}
                        label="Customer Email"
                        variant="outlined"
                        {...register("email")}
                      />
                    </Box>
                  </Box>

                  <Box className={`${styles.addSupplierField}`}>
                    <Typography
                      sx={{
                        textAlign: "start",
                        fontWeight: "bold",
                        fontSize: "14px",
                        ml: 2,
                      }}
                    >
                      {" "}
                      Address
                    </Typography>

                    <TextField
                      size="small"
                      id="outlined-basic"
                      sx={{ width: "45%", backgroundColor: "#f1f3f6", ml: 2 }}
                      label="Customer Address"
                      variant="outlined"
                      {...register("address")}
                    />
                  </Box>
                </TabPanel>
                <Box className={`${styles.addSupplierField}`}>
                  <Typography
                    sx={{
                      textAlign: "start",
                      fontWeight: "bold",
                      fontSize: "14px",
                      ml: 5,
                    }}
                  >
                    Date<span>*</span>
                  </Typography>

                  <input
                    type="date"
                    {...register("date", { required: true })}
                    style={{
                      width: "43%",
                      padding: "10px",
                      marginLeft: "40px",
                      marginBottom: "20px",
                      backgroundColor: "#f1f3f6",
                      border: "1px solid #aeaeae",
                      borderRadius: "3px",
                    }}
                  />
                </Box>
              </TabContext>
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
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        textAlign: "center",
                      }}
                    >
                      Product Information<span>*</span>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        textAlign: "center",
                      }}
                      className={`${styles.tableCell}`}
                    >
                      Available Quantity
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        textAlign: "center",
                      }}
                      className={`${styles.tableCell}`}
                    >
                      Quantity
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        textAlign: "center",
                      }}
                      className={`${styles.tableCell}`}
                    >
                      Unit
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        textAlign: "center",
                      }}
                      className={`${styles.tableCell}`}
                    >
                      Price<span>*</span>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        textAlign: "center",
                      }}
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
                              // {...register("product", { required: true })}
                              style={{ backgroundColor: "#f1f3f6" }}
                              freeSolo
                              id="free-solo-demo"
                              size="small"
                              options={allProducts.map(
                                (product) => product.name
                              )}
                              renderInput={(params) => (
                                <TextField
                                  onBlur={(e) =>
                                    setFilteredProducts(e.target.value)
                                  }
                                  {...params}
                                  label=" Choose product"
                                />
                              )}
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
                            {...register("availableQuantity", { required: true })}
                            type="number"
                            placeholder="Available Qn."
                            className={`${styles.tableCellInput}`}
                            defaultValue={
                              productNames?.quantity}
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
                            {...register("quantity", { required: true })}
                            onChange={(e) => setQuantity(e.target.value)}
                            type="number"
                            placeholder="0"
                            className={`${styles.tableCellInput}`}
                          />
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                            width: "160px",
                          }}
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Select Unit
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              size="small"
                              className={`${styles.inputFields}`}
                              label="Select Unit"
                              sx={{
                                padding: "4px",
                                backgroundColor: "#f1f3f6",
                              }}
                              {...register("unit", { required: true })}
                              value={unit}
                              onChange={handleUnitChange}
                            >
                              <MenuItem value="kg">K.G.</MenuItem>
                              <MenuItem value="gram">Gram</MenuItem>
                              <MenuItem value="pcs">Pcs.</MenuItem>
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
                            {...register("price", { required: true })}
                            type="number"
                            placeholder="Price"
                            defaultValue={productNames?.sellPrice}
                            className={`${styles.tableCellInput}`}
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
                            type="number"
                            placeholder="0"
                            value={total}
                            className={`${styles.tableCellInput}`}
                          />
                        </TableCell>
                        <TableCell
                          onClick={() => {
                            if (tableRow <= 1) {
                              Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "There are only one row, you can not delete it!",
                              });
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
                        onChange={(e) => setDiscount(e.target.value)}
                        type="number"
                        placeholder="0.00"
                        className={`${styles.tableCellInput}`}
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
                        {...register("grandTotal", { required: true })}
                        type="number"
                        value={grandTotal}
                        placeholder="0"
                        className={`${styles.tableCellInput}`}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    >
                      {/* <Button
                        variant="contained"
                        sx={{ borderRadius: "0" }}
                        onClick={() => setTableRow(tableRow + 1)}
                        className={`${styles.receiptBtn}`}
                        color="success"
                      >
                        Add New Item
                      </Button> */}
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
                        {...register("paidAmount", { required: true })}
                        type="number"
                        onChange={(e) => setPaidAmount(e.target.value)}
                        placeholder="0.00"
                        className={`${styles.tableCellInput}`}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    >
                      <Button
                        type="submit"
                        sx={{ borderRadius: "0" }}
                        className={`${styles.paymentBtn}`}
                        variant="contained"
                        color="success"
                      >
                        Submit Items
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
                        {...register("changeAmount", { required: true })}
                        type="number"
                        placeholder="0"
                        value={paidAmount - grandTotal}
                        className={`${styles.tableCellInput}`}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default AddInvoice;
