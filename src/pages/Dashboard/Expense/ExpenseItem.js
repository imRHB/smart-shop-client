import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TablePagination from "@mui/material/TablePagination";
import { Button, Container, Grid, TextField } from "@mui/material";
import expenses from "../../../assets/data/expenses.json";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

function Row(props) {
  const { expense } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        className="colunm"
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell width="15%" align="center" component="th" scope="row">
          {expense._id}
        </TableCell>
        <TableCell align="center">{expense.item}</TableCell>

        <TableCell align="center">
          <Button>
            <EditIcon
              sx={{
                marginLeft: "25px",
                backgroundColor: "green",
                borderRadius: "5px",
                color: "yellow",
              }}
            />
          </Button>

          <Button>
            <DeleteForeverIcon
              sx={{
                backgroundColor: "red",
                borderRadius: "5px",
                color: "white",
              }}
            />
          </Button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const ExpenseItem = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Box sx={{ marginBottom: "30px" }}>
        <div className="d-flex justify-content-between  border">
          <div className="text-start ms-2 p-2 ">
            <h5>Add Expense Item</h5>
            <small className="">Expense</small>
          </div>
          <div>
            <small className="text-primary fw-bold border p-1">
              Add Expense Item
            </small>
          </div>
        </div>
      </Box>
      <Container sx={{ width: "100%" }}>
        <Box sx={{ boxShadow: "0px 0px 01px 2px whiteSmoke" }}>
          <Typography
            variant="h6"
            sx={{ borderBottom: "1px solid lightGray", color: "gray" }}
          >
            Add Expense Item
          </Typography>
          <Grid sx={{ padding: "20px" }} container spacing={2}>
            <Grid item xs={4}>
              <Typography
                variant="small"
                sx={{ fontWeight: "bold", color: "gray" }}
              >
                Expence Name *
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ marginBottom: "50px" }}>
              <TextField
                sx={{ width: "50%" }}
                id="outlined-basic"
                label="Category Name"
                variant="outlined"
              />
              <Button
                variant="contained"
                sx={{ marginLeft: "20px", marginBottom: "10px" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Paper sx={{ marginTop: "50px", paddingBottom: "20px" }}>
          <Box sx={{ borderBottom: "1px solid lightGray" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "gray",
                fontSize: "3vh",
                margin: "10px",
              }}
            >
              Expense Item
            </Typography>
            <Box sx={{ display: "flex", padding: "5px" }}>
              <Typography
                variant="small"
                sx={{ margin: "10px", fontWeight: "bold", color: "gray" }}
              >
                Search
              </Typography>
              <input
                className="p-2 mb-3"
                type="search"
                placeholder="Seacrh Here"
                name=""
                id=""
              />
            </Box>
          </Box>
          <TableContainer
            component={Paper}
            sx={{ width: "97%", margin: "15px", border: "1px solid lightGray" }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className="colunm">
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    SL.
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Expense Item
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {expenses
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((expense) => (
                    <Row key={expense._id} expense={expense} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Typography className="mt-3">
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={expenses.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Typography>
      </Container>
    </Box>
  );
};

export default ExpenseItem;
