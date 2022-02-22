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
import { Button, Collapse, Container, TextField } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from "./PurchaseReport.module.css";
const PurchaseReport = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>Purchase Report</span> <br />{" "}
          <span style={{ color: "#969494", marginLeft: "-35px" }}>Total Purchase Report</span>
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
          <form >

            <TextField id="date" label="Start Date" type="date" sx={{ mr: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <TextField id="date" label="End Date" type="date" sx={{ mr: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <Button className={`${styles.searchBtn}`} type='submit'>Search</Button>
          </form>
        </Collapse>
      </Box>
      {/* <Button className={`${styles.filterBtn}`}>Filter</Button> */}
      <Box className={`${styles.tableContainer}`} sx={{ mt: 2 }}>
        <Typography sx={{ fontWeight: "bold" }}>Purchase Report</Typography>
        <hr />
        <TableContainer
          component={Paper}
          sx={{ border: 1, borderColor: "grey.300" }}
        >
          <Table aria-label="simple table">
            <TableHead className={`${styles.tableHeader}`}>
              <TableRow>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Purchase Date
                </TableCell>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Sell No
                </TableCell>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Supplier Name
                </TableCell>
                <TableCell align="right" className={`${styles.tableCell}`}>
                  Total Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={3} align="right" sx={{ borderRight: 1 }}>
                  Total Purchase:
                </TableCell>
                <TableCell align="right">BDT 0.00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default PurchaseReport;
