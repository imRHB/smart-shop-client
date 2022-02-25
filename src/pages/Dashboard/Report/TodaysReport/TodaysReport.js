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
import styles from "./TodayReport.module.css";

const TodaysReport = () => {
  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px", marginLeft: "-77px" }}>Todays Report</span> <br />{" "}
          <span style={{ color: "#969494" }}>
            Todays sales and purchase report
          </span>
        </Typography>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold" }}>Todays Sales Report</Typography>
        <hr />
        <TableContainer
          component={Paper}
          sx={{ border: 1, borderColor: "grey.300" }}
        >
          <Table aria-label="simple table">
            <TableHead className={`${styles.tableHeader}`}>
              <TableRow>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Sales Date
                </TableCell>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Sell No
                </TableCell>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Customer Name
                </TableCell>
                <TableCell align="right" className={`${styles.tableCell}`}>
                  Total Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={3} align="right" sx={{ borderRight: 1 }}>
                  Total Sales:
                </TableCell>
                <TableCell align="right">BDT 0.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box className={`${styles.tableContainer}`} sx={{ mt: 6 }}>
        <Typography sx={{ fontWeight: "bold" }}>
          Todays Purchase Report
        </Typography>
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
                <TableCell align="right">BDT 0.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default TodaysReport;
