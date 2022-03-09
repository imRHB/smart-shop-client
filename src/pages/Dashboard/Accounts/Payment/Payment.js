import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import styles from "./Payment.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import StripePayment from "../../PaymentGateway/Stripe/StripePayment/StripePayment";
import { NavLink } from "react-router-dom";

const Payment = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [category, setCategory] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const [mode, setMode] = React.useState('');

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const [bank, setBank] = React.useState('');

  const handleBankChange = (event) => {
    setBank(event.target.value);
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

          <form className={`${styles.paymentForm} ${"shadow"}`}>
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
                      <MenuItem value="cheque">Cheque</MenuItem>
                      <MenuItem value="card">Card</MenuItem>
                      <MenuItem value="payOrder">Pay Order</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {
                  mode === "card" &&
                  <StripePayment />
                }


                {
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
                }

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

                <Box className={`${styles.inputContainer}`}>
                  <Typography className={`${styles.inputTitle}`} variant="f6">
                    Select Option Name
                    <span style={{ color: "#f44336" }}>*</span>
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    size="small"
                    className={`${styles.inputFields}`}
                    label="Supplier Contact No."
                    variant="outlined"
                    {...register("contact", { required: true })}
                  />
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
                    label="Payment Amount"
                    variant="outlined"
                    {...register("amount", { required: true })}
                  />
                </Box>
                {/*                 

                  <TabPanel value="2" sx={{ m: 0, p: 0 }}>
                    <Box className={`${styles.inputContainer}`}>
                      <Typography className={`${styles.inputTitle}`} variant="f6">
                        Receipt Amount
                        <span style={{ color: "#f44336" }}>*</span>
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        className={`${styles.inputFields}`}
                        label="Receipt Amount"
                        variant="outlined"
                        {...register("amount", { required: true })}
                      />
                    </Box>
                  </TabPanel> */}

                <Box sx={{ textAlign: "right" }}>
                  <Button
                    className={`${styles.paymentBtn}`}
                    sx={{ my: 2, width: "100%", fontWeight: "bold" }}
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
          {/* </TabContext> */}
        </Box>
      </Box>
    </Container >
  );
};

export default Payment;
