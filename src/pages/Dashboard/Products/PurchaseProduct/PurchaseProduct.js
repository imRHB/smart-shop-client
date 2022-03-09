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
    <div>
      <h2>Purchase Product Invoice</h2>
    </div>
  );
};

export default PurchaseProduct;
