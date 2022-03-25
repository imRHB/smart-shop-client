import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./PurchaseProduct.module.css";
import TextField from "@mui/material/TextField";
import { Box, Button, Container } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
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
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveSupplierToDB } from "../../../../store/supplier";
import { saveProductsToStore } from "../../../../store/products";

const PurchaseProduct = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState(0);
  const [totalCartn, setTotalCartn] = useState(0);
  const [eachCartn, setEachCartn] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState("");
  const [rate, setRate] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);
  const [products, setProducts] = useState([]);

  const handleEachCartn = (num) => {
    setEachCartn(num);
    setQuantity(totalCartn * num);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleRate = (val) => {
    setRate(val);
    const newTotal = quantity * val;
    setTotal(newTotal);
    setGrandTotal(grandTotal + newTotal);
  };

  const handleDiscount = (val) => {
    setDiscount(val);
    const newTotal = quantity * rate - val;
    setTotal(newTotal);
    setTotalDiscount(parseInt(totalDiscount) + parseInt(val));
    setGrandTotal(grandTotal - val);
  };

  const handlePaidAmount = (amount) => {
    setPaidAmount(amount);
    setDueAmount(grandTotal - amount);
  };

  const [open, setOpen] = React.useState(false);
  const [toggle, setToggle] = useState(false);
  const [tableRow, setTableRow] = useState(1);

  const handleNewProduct = (row) => {
    setTableRow(row);
    const newProduct = {
      p_name: productName,
      p_id: productId,
      t_cartn: totalCartn,
      e_cartn: eachCartn,
      qty: quantity,
      unit: unit,
      rate: rate,
      discount: discount,
      total: quantity * rate - discount,
    };
    setProducts([...products, newProduct]);
  };

  const handleLastProduct = () => {
    const newProduct = {
      p_name: productName,
      p_id: productId,
      t_cartn: totalCartn,
      e_cartn: eachCartn,
      qty: quantity,
      unit: unit,
      rate: rate,
      discount: discount,
      total: quantity * rate - discount,
    };
    setProducts([...products, newProduct]);
  };



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      barcode,
      supplierName,
      contactNo,
      company,
      supplierEmail,
      supplierAddress,
      date,
    } = data;

    const supplierInvoice = {
      barcode,
      contactNo,
      date,
      products: products,
      totalDiscount: totalDiscount,
      grandTotal: grandTotal,
      paidAmount: paidAmount,
    };

    if (supplierName) {
      const supplierDetails = {
        name: supplierName,
        email: supplierEmail,
        company: company,
        companyAddress: supplierAddress,
      };
      // Send form data to Server
      dispatch(saveSupplierToDB(supplierDetails));
    }

    // Send form data to Server
    dispatch(saveProductsToStore(supplierInvoice));
    setTableRow(1);
    setQuantity(0);
    setTotal(0);
    setTotalDiscount(0);
    setGrandTotal(0);
    setPaidAmount(0);
    setDueAmount(0);

    //Alert message
    Swal.fire(
      "Good job!",
      "Products Details Added Successfully To Store!",
      "success"
    );
    reset();
  };

  const buttonToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px", marginLeft: "-56px" }}>
            Products
          </span>{" "}
          <br /> <span style={{ color: "#969494" }}>Add Purchase Invoice</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <NavLink
          to="/dashboard/manage-product"
          style={{ textDecoration: "none" }}
        >
          <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>
            Manage Products
          </Button>
        </NavLink>

        <NavLink to="/dashboard/add-product" style={{ textDecoration: "none" }}>
          <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>
            Add New Product
          </Button>
        </NavLink>
      </Box>

      <Box className={`${styles.paymentContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "start" }}>
          New Purchase Invoice (For Supplier)
        </Typography>
        <hr />
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} className={`${"shadow"}`}>
        <Box className={`${styles.tableContainer}`}>
          <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
            <Typography
              sx={{
                textAlign: "start",
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: "12px !important",
              }}
            >
              Barcode<span>*</span>
            </Typography>

            <TextField
              size="small"
              id="outlined-basic"
              sx={{ width: "45%", backgroundColor: "white" }}
              placeholder="Barcode or QR code scan here"
              label="Barcode/QR Code"
              variant="outlined"
              {...register("barcode", { required: true })}
            />
          </Box>

          <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
            <Typography
              sx={{
                textAlign: "start",
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: "12px !important",
              }}
            >
              Supplier Contact no.<span>*</span>
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              sx={{ width: "45%", backgroundColor: "white" }}
              label="Contact no."
              variant="outlined"
              {...register("contactNo", { required: true })}
            />
            <Button
              sx={{ borderRadius: 0, marginTop: "2px" }}
              onClick={() => {
                setOpen(!open);
                buttonToggle();
              }}
              className={`${styles.paymentBtn}`}
            >
              {toggle ? "Old Supplier" : "New Supplier"}
            </Button>
          </Box>

          <Collapse in={open} timeout="auto">
            <Box sx={{ width: "45%", display: "flex", flexContent: "between" }}>
              <Box className={`${styles.addSupplierField} ${"pb-4, me-2"}`}>
                <Typography
                  sx={{
                    textAlign: "start",
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "12px !important",
                  }}
                >
                  Supplier Name
                </Typography>

                <TextField
                  size="small"
                  id="outlined-basic"
                  sx={{ backgroundColor: "white" }}
                  label="Supplier Name"
                  variant="outlined"
                  {...register("supplierName", { required: false })}
                />
              </Box>
              <Box className={`${styles.addSupplierField} ${"pb-4, me-2"}`}>
                <Typography
                  sx={{
                    textAlign: "start",
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "12px !important",
                  }}
                >
                  Supplier Email
                </Typography>

                <TextField
                  size="small"
                  id="outlined-basic"
                  sx={{ backgroundColor: "white" }}
                  label="Supplier Email"
                  variant="outlined"
                  {...register("supplierEmail")}
                />
              </Box>
              <Box className={`${styles.addSupplierField} ${"pb-4, me-2"}`}>
                <Typography
                  sx={{
                    textAlign: "start",
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "12px !important",
                  }}
                >
                  Company Name
                </Typography>

                <TextField
                  size="small"
                  id="outlined-basic"
                  sx={{ backgroundColor: "white" }}
                  label="Company Name"
                  variant="outlined"
                  {...register("company", { required: false })}
                />
              </Box>
            </Box>

            <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
              <Typography
                sx={{
                  textAlign: "start",
                  fontWeight: "bold",
                  fontSize: "14px",
                  marginBottom: "12px !important",
                }}
              >
                Address
              </Typography>

              <TextField
                size="small"
                id="outlined-basic"
                sx={{ width: "45%", backgroundColor: "white" }}
                label="Supplier Address"
                variant="outlined"
                {...register("supplierAddress")}
              />
            </Box>
          </Collapse>

          <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
            <Typography
              sx={{
                textAlign: "start",
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: "10px !important",
              }}
            >
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
                    sx={{
                      borderRight: "1px solid rgba(224, 224, 224, 1)",
                      textAlign: "center",
                    }}
                  >
                    Product Information<span>*</span>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    className={`${styles.tableCell}`}
                  >
                    Prod. ID
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    className={`${styles.tableCell}`}
                  >
                    Total Ctn.<span>*</span>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    className={`${styles.tableCell}`}
                  >
                    Each Ctn.<span>*</span>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    className={`${styles.tableCell}`}
                  >
                    Total Qnty<span>*</span>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    className={`${styles.tableCell}`}
                  >
                    Unit
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    className={`${styles.tableCell}`}
                  >
                    Rate<span>*</span>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    className={`${styles.tableCell}`}
                  >
                    Discount/Pcs.
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
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
                        <input
                          type="text"
                          placeholder="Product Name"
                          onBlur={(e) => setProductName(e.target.value)}
                          style={{
                            padding: "8px",
                            backgroundColor: "#f1f3f6",
                            border: "1px solid #aeaeae",
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
                          placeholder="Prod ID"
                          onBlur={(e) => setProductId(e.target.value)}
                          style={{
                            width: "70px",
                            padding: "8px",
                            backgroundColor: "#f1f3f6",
                            border: "1px solid #aeaeae",
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
                          type="number"
                          placeholder="0"
                          onBlur={(e) =>
                            setTotalCartn(parseInt(e.target.value))
                          }
                          style={{
                            width: "70px",
                            padding: "8px",
                            backgroundColor: "#f1f3f6",
                            border: "1px solid #aeaeae",
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
                          type="number"
                          placeholder="0"
                          onBlur={(e) =>
                            handleEachCartn(parseInt(e.target.value))
                          }
                          style={{
                            width: "70px",
                            padding: "8px",
                            backgroundColor: "#f1f3f6",
                            border: "1px solid #aeaeae",
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
                          type="number"
                          value={quantity}
                          readOnly
                          style={{
                            width: "70px",
                            padding: "8px",
                            backgroundColor: "#f1f3f6",
                            border: "1px solid #aeaeae",
                          }}
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
                          type="number"
                          placeholder="0.00"
                          onBlur={(e) => handleRate(parseInt(e.target.value))}
                          style={{
                            width: "70px",
                            padding: "8px",
                            backgroundColor: "#f1f3f6",
                            border: "1px solid #aeaeae",
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
                          type="number"
                          placeholder="0.00"
                          onBlur={(e) =>
                            handleDiscount(parseInt(e.target.value))
                          }
                          style={{
                            width: "70px",
                            padding: "8px",
                            backgroundColor: "#f1f3f6",
                            border: "1px solid #aeaeae",
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
                          type="number"
                          placeholder="0"
                          value={total}
                          readOnly
                          style={{
                            width: "70px",
                            padding: "8px",
                            backgroundColor: "#f1f3f6",
                            border: "1px solid #aeaeae",
                          }}
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
                      type="number"
                      placeholder="0.00"
                      value={totalDiscount}
                      readOnly
                      style={{
                        width: "70px",
                        padding: "8px",
                        backgroundColor: "#f1f3f6",
                        border: "1px solid #aeaeae",
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell />
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
                      type="number"
                      placeholder="0"
                      value={grandTotal}
                      readOnly
                      style={{
                        width: "70px",
                        padding: "8px",
                        backgroundColor: "#f1f3f6",
                        border: "1px solid #aeaeae",
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
                      onClick={() => handleNewProduct(tableRow + 1)}
                      className={`${styles.receiptBtn}`}
                      color="success"
                    >
                      Add New Product
                    </Button>
                  </TableCell>
                  <TableCell
                    colSpan={3}
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                  >
                    <Button
                      variant="contained"
                      sx={{ borderRadius: "0" }}
                      onClick={() => handleLastProduct()}
                      className={`${styles.addLastBtn}`}
                    >
                      Add Last Product
                    </Button>
                  </TableCell>
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
                      type="number"
                      placeholder="0.00"
                      onBlur={(e) => handlePaidAmount(parseInt(e.target.value))}
                      style={{
                        width: "70px",
                        padding: "8px",
                        backgroundColor: "#f1f3f6",
                        border: "1px solid #aeaeae",
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
                      type="submit"
                      sx={{ borderRadius: "0", mb: 1 }}
                      className={`${styles.paymentBtn}`}
                      variant="contained"
                      color="success"
                    >
                      Submit
                    </Button>
                    <NavLink
                      to="/supplier-invoice"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        sx={{ borderRadius: "0" }}
                        variant="contained"
                        color="success"
                      >
                        Print Invoice
                      </Button>
                      {/* <Button className={`${styles.addProductBtn}`}>Add Product</Button> */}
                    </NavLink>
                  </TableCell>
                  <TableCell />
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
                      p: 1,
                    }}
                  >
                    Due:
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                  >
                    <input
                      type="number"
                      placeholder="0"
                      value={dueAmount}
                      readOnly
                      style={{
                        width: "70px",
                        padding: "8px",
                        backgroundColor: "#f1f3f6",
                        border: "1px solid #aeaeae",
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </form>
    </Container>
  );
};

export default PurchaseProduct;
