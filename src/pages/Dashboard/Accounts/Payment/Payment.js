import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import styles from "./Payment.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import StripePayment from "../../PaymentGateway/Stripe/StripePayment/StripePayment";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentToDB } from "../../../../store/paymentTransaction";
import Swal from "sweetalert2";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { loadCustomers } from "../../../../store/customer";
import { loadEmployees } from "../../../../store/employee";


const Payment = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [mode, setMode] = React.useState('');
  const [category, setCategory] = React.useState('');
  // const [bank, setBank] = React.useState('');
  const dispatch = useDispatch();


  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  // const handleBankChange = (event) => {
  //   setBank(event.target.value);
  // };

  // Load customers from Database
  useEffect(() => {
    dispatch(loadCustomers());
  }, [dispatch]);

  // Getting all customer from store
  const allCustomer = useSelector(
    (state) => state.entities.customer.allCustomer
  );

  // Getting employees from store
  const employees = useSelector(
    (state) => state.entities.employee.allEmployees
  );

  // Load Employees from Database
  useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);


  const onSubmit = (data) => {
    //Send payment to Server
    dispatch(savePaymentToDB(data));

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Payment Successful!!",
      showConfirmButton: true,
    })
      .then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/payment-invoice";
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
          <span style={{ fontSize: "26px" }}>ADD PAYMENT</span> <br />{" "}
          <span style={{ color: "#969494" }}>Add New Payment</span>
        </Typography>
      </Box>

      <Box sx={{ textAlign: "right", my: 2 }}>
        <NavLink to="/dashboard/manage-transition" style={{ textDecoration: "none" }}>
          <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>
            Manage Transaction
          </Button>
        </NavLink>
      </Box>

      <Box className={`${styles.paymentContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "start" }}>Add Payment</Typography>
        <hr />
        <Box>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles.paymentForm} ${"shadow"}`}>
            <Grid
              container
              spacing={4}
              columns={16}
              sx={{ marginTop: 2, marginBottom: 2 }}
            >
              <Grid item md={8} sm={16} sx={16}>
                <Box className={`${styles.inputContainer}`}>
                  <Typography className={`${styles.inputTitle}`} variant="f6">
                    Date<span style={{ color: "#f44336" }}>*</span>
                  </Typography>

                  <input
                    type="date"
                    {...register("date", { required: true })}
                    className={`${styles.inputFields}`}
                    style={{
                      padding: "8px",
                      border: "1px solid #aeaeae",
                      borderRadius: "3px",
                    }}
                  />
                </Box>

                <Box className={`${styles.inputContainer}`}>
                  <Typography className={`${styles.inputTitle}`} variant="f6">
                    Transaction Category
                    <span style={{ color: "#f44336" }}>*</span>
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      size="small"
                      className={`${styles.inputFields}`}
                      label="Select Category"
                      sx={{ padding: "4px" }}
                      {...register("category", { required: true })}
                      value={category}
                      onChange={handleCategoryChange}
                    >
                      <MenuItem value="customer">Customer</MenuItem>
                      <MenuItem value="employee">Employee</MenuItem>
                    </Select>
                  </FormControl>
                </Box>


                <Box className={`${styles.inputContainer}`}>
                  <Typography className={`${styles.inputTitle}`} variant="f6">
                    Transaction Mode
                    <span style={{ color: "#f44336" }}>*</span>
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Mode</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      size="small"
                      className={`${styles.inputFields}`}
                      label="Select Mode"
                      sx={{ padding: "4px" }}
                      {...register("mode", { required: true })}
                      value={mode}
                      onChange={handleModeChange}
                    >
                      <MenuItem value="cash">Cash</MenuItem>
                      <MenuItem value="card">Card</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {
                  mode === "card" &&
                  <Box className={`${styles.cardPay}`} >
                    <StripePayment />
                  </Box>
                }

                {/* {
                  (mode === "cheque" || mode === "payOrder") &&

                  <Box>
                    <Box className={`${styles.inputContainer}`}>
                      <Typography className={`${styles.inputTitle}`} variant="f6">
                        Cheque/Pay Order No
                        <span style={{ color: "#f44336" }}>*</span>
                      </Typography>

                      <TextField
                        id="outlined-basic"
                        size="small"
                        className={`${styles.inputFields}`}
                        label="Pay Mode"
                        variant="outlined"
                        {...register("payMode", { required: true })}
                      />
                    </Box>

                    <Box className={`${styles.inputContainer}`}>
                      <Typography className={`${styles.inputTitle}`} variant="f6">
                        Bank Name<span style={{ color: "#f44336" }}>*</span>
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Bank</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="outlined-basic"
                          size="small"
                          className={`${styles.inputFields}`}
                          label="Bank Name"
                          variant="outlined"
                          {...register("bank", { required: true })}
                          value={bank}
                          sx={{ padding: "4px" }}
                          onChange={handleBankChange}
                        >
                          <MenuItem value={1}>Sonali Bank</MenuItem>
                          <MenuItem value={2}>AB Bank</MenuItem>
                          <MenuItem value={2}>IBBL</MenuItem>
                          <MenuItem value={2}>NBL</MenuItem>
                          <MenuItem value={2}>NCBL</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                } */}

              </Grid>
              <Grid item md={8} sm={16} sx={16}>
                <Box className={`${styles.inputContainer}`}>
                  <Typography className={`${styles.inputTitle}`} variant="f6">
                    Details
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    size="small"
                    className={`${styles.inputFields}`}
                    label="Details"
                    variant="outlined"
                    {...register("detail")}
                  />
                </Box>

                {/* <Box className={`${styles.inputContainer}`}>
                  <Typography className={`${styles.inputTitle}`} variant="f6">
                    Select Name
                    <span style={{ color: "#f44336" }}>*</span>
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    size="small"
                    sx={{ pb: 1 }}
                    className={`${styles.inputFields}`}
                    label="Name"
                    variant="outlined"
                    {...register("name", { required: true })}
                  />
                </Box> */}

                <Box className={`${styles.inputContainer} ${"pb-4"}`}>
                  <Typography className={`${styles.inputTitle}`} variant="f6">
                    Select Name
                    <span style={{ color: "#f44336" }}>*</span>
                  </Typography>

                  <Stack spacing={2}>
                    <Autocomplete
                      {...register("name", { required: true })}

                      freeSolo
                      id="free-solo-demo"
                      size="small"
                      className={`${styles.inputFields}`}
                      options={
                        category === "customer" ?
                          allCustomer.map((customer) => customer?.name)
                          :
                          employees.map((employee) => employee?.name)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...register("name", { required: true })}
                          {...params}
                          label="Name"
                        />
                      )}
                    />
                  </Stack>
                </Box>


                <Box className={`${styles.inputContainer}`}>
                  <Typography className={`${styles.inputTitle}`} variant="f6">
                    Payment Amount
                    <span style={{ color: "#f44336" }}>*</span>
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    size="small"
                    className={`${styles.inputFields}`}
                    sx={{ pb: 1 }}
                    label="Payment Amount"
                    variant="outlined"
                    {...register("amount", { required: true })}
                  />
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    type="submit"
                    className={`${styles.paymentBtn}`}
                    sx={{ my: 2, width: "100%", fontWeight: "bold" }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container >
  );
};

export default Payment;
