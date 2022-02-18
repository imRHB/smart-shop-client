import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import products from "../../../../assets/data/products.json";
import styles from "./ProductSalesReport.module.css";

function Row(props) {
  const { employee: product } = props;
  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          10th Feb 2022{" "}
        </TableCell>
        <TableCell align="left">{product.name}</TableCell>
        <TableCell align="left">{product.category}</TableCell>
        <TableCell align="left">{product.category}</TableCell>
        <TableCell align="right">{product.salePrice}</TableCell>
        <TableCell align="right">{100}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const ProductSalesReport = () => {
  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>Sales Report (Product Wise)</span>{" "}
          <br />{" "}
          <span style={{ color: "#969494" }}>Sales Report (Product Wise)</span>
        </Typography>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold" }}>
          Sales Report (Product Wise)
        </Typography>
        <hr />
        <TableContainer
          component={Paper}
          sx={{ border: 1, borderColor: "grey.300" }}
        >
          <Table aria-label="simple table">
            <TableHead className={`${styles.tableHeader}`}>
              <TableRow>
                <TableCell className={`${styles.tableCell}`}>
                  Sales Date{" "}
                </TableCell>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Product Name
                </TableCell>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Category
                </TableCell>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Customer Name
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Rate
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Total Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((employee) => (
                <Row key={employee._id} employee={employee} />
              ))}
              <TableRow>
                <TableCell colSpan={5} align="right" sx={{ borderRight: 1 }}>
                  Total Purchase:
                </TableCell>
                <TableCell align="right">Dynamic total </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ProductSalesReport;
