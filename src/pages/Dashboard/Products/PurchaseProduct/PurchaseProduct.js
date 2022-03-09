import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./PurchaseProduct.module.css";
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
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const PurchaseProduct = () => {
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
    </Container>
  );
};

export default PurchaseProduct;
