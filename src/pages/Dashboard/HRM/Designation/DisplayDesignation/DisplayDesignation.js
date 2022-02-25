import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import designations from "../../../../../assets/data/designations.json";
import styles from "./DisplayDesignation.module.css";

function Row(props) {
  const { designation } = props;

  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {designation?._id}
        </TableCell>
        <TableCell align="center">{designation?.name}</TableCell>
        <TableCell align="center">{designation?.detail}</TableCell>
        <TableCell align="center">
          <EditIcon className={`${styles.editIcon}`} />
          <Delete className={`${styles.deleteIcon}`} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  designation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
  }).isRequired,
};

const DisplayDesignation = () => {
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
    <Box sx={{ mt: 3 }} className={`${styles.tableContainer}`}>
      <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
        Manage Designation
      </Typography>
      <hr />
      <TableContainer
        component={Paper}
        sx={{ border: 1, borderColor: "grey.300" }}
      >
        <Table aria-label="simple table">
          <TableHead className={`${styles.tableHeader}`}>
            <TableRow>
              <TableCell className={`${styles.tableCell}`}>SL.</TableCell>
              <TableCell align="center" className={`${styles.tableCell}`}>
                Designation
              </TableCell>
              <TableCell align="center" className={`${styles.tableCell}`}>
                Details
              </TableCell>
              <TableCell align="center" className={`${styles.tableCell}`}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {designations
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((designation) => (
                <Row key={designation._id} designation={designation} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography className="mt-3">
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={designations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Typography>
    </Box>
  );
};

export default DisplayDesignation;
