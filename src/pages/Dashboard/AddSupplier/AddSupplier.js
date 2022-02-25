import React from "react";
import { useForm } from "react-hook-form";
import styles from "./AddSupplier.module.css";
import TextField from "@mui/material/TextField";
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Grid from "@mui/material/Grid";
import axios from 'axios';
import Swal from "sweetalert2";

const AddSupplier = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {

    axios.post('https://smart-shop-pos.herokuapp.com/suppliers', data)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'New Supplier Added',
            showConfirmButton: true,
          })
          reset();
        }
      })
  };


  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>ADD SUPPLIER</span> <br />{" "}
          <span style={{ color: "#969494" }}>Add New Supplier</span>
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

      <Box className={`${styles.paymentContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "start" }}>Add Supplier</Typography>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.paymentForm} ${"shadow"}`}>
          <Grid
            container
            spacing={4}
            columns={16}
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            <Grid item md={8} sx={16}>
              <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                <Typography className={`${styles.addSupplierFieldLabel}`}>
                  Supplier Name <span>*</span>
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  className={`${styles.supplierTextField}`}
                  label="Supplier Name"
                  variant="outlined"
                  {...register("name", { required: true })}
                />
              </Box>

              <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                <Typography className={`${styles.addSupplierFieldLabel}`}>
                  Supplier Contact No. <span>*</span>
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  className={`${styles.supplierTextField}`}
                  label="Supplier Contact No."
                  variant="outlined"
                  {...register("contact", { required: true })}
                />
              </Box>

              <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                <Typography className={`${styles.addSupplierFieldLabel}`}>
                  Supplier Address<span>*</span>
                </Typography>
                <TextField
                  id="outlined-textarea"
                  size="small"
                  label="Supplier Address"
                  className={`${styles.supplierTextField}`}
                  multiline
                  {...register("address", { required: true })}
                />
              </Box>
            </Grid>
            <Grid item md={8} sx={16}>
              <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                <Typography className={`${styles.addSupplierFieldLabel}`}>
                  Supplier Details<span>*</span>
                </Typography>

                <TextField
                  id="outlined-textarea"
                  size="small"
                  label="Supplier Details"
                  multiline
                  className={`${styles.supplierTextField}`}
                  {...register("details", { required: true })}
                />
              </Box>

              <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                <Typography className={`${styles.addSupplierFieldLabel}`}>
                  Previous Balance<span>*</span>
                </Typography>

                <TextField
                  id="outlined-textarea"
                  label="Balance"
                  size="small"
                  multiline
                  className={`${styles.supplierTextField}`}
                  {...register("balance", { required: true })}
                />
              </Box>
              <Box className="d-flex justify-content-around mt-5">
                <Button type="submit" className={`${styles.addSupplierButton}`}>
                  Save Supplier
                </Button>
                <Button type="submit" className={`${styles.addAnotherButton}`}>
                  Save and Add Another
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default AddSupplier;
