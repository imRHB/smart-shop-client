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
import { Button, Collapse, Container, TextField } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
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
          {product.salesDate}
        </TableCell>
        <TableCell align="left">{product.name}</TableCell>
        <TableCell align="left">{product.category}</TableCell>
        <TableCell align="left">{100}</TableCell>
        <TableCell align="right">{product.salePrice}</TableCell>
        <TableCell align="right">{100}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const ProductSalesReport = () => {
  const [open, setOpen] = React.useState(false);
  const [allProducts, setAllProducts] = React.useState([]);
  const [productDisplayed, setProductDisplayed] = React.useState([]);
  const [startDate, setStartDate] = React.useState("")
  const [endDate, setEndDate] = React.useState("")
  useEffect(() => {
    fetch("https://zahidhasan2806.github.io/productData/products.json")
      .then(res => res.json())
      .then(data => {

        setAllProducts(data)
        setProductDisplayed(data)
      })
  }, []);
  const handleProductSearch = (event) => {
    event.preventDefault()
    const matchedProduct = allProducts.filter(product => (product.salesDate >= startDate && product.salesDate <= endDate)
    );
    setProductDisplayed(matchedProduct);
  };
  let total = 0;
  productDisplayed.forEach(item => {
    total = total + item.salePrice
  })
  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>Sales Report (Product Wise)</span>{" "}
          <br />{" "}
          <span style={{ color: "#969494", marginLeft: "-120px" }}>Sales Report (Product Wise)</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "left", mb: 1 }}>
        <Button className={`${styles.filterBtn}`} onClick={() => setOpen(!open)}>
          Filter
        </Button>
        <Collapse
          in={open}
          sx={{ mt: 2, mb: 2 }}
          timeout="auto"
          unmountOnExit
          className={`${styles.tableContainer}`}
        >
          <form onSubmit={handleProductSearch}>

            <TextField onChange={(e) => setStartDate(e.target.value)} size="small" id="date" label="Start Date" type="date" sx={{ mr: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <TextField onChange={(e) => setEndDate(e.target.value)} size="small" id="date" label="End Date" type="date" sx={{ mr: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <Button className={`${styles.searchBtn}`} type='submit'>Search</Button>
          </form>
        </Collapse>
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
                  Unit
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
              {productDisplayed.map((employee) => (
                <Row key={employee._id} employee={employee} />
              ))}
              <TableRow>
                <TableCell colSpan={5} align="right" sx={{ borderRight: 1 }}>
                  Total Purchase:
                </TableCell>
                <TableCell align="right">BDT {total} </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ProductSalesReport;
