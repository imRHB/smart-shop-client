import React, { useEffect } from "react";
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
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import Swal from "sweetalert2";
import designations from "../../../../../assets/data/designations.json";
import styles from "./DisplayDesignation.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDesignationToDB,
  loadDesignations,
  setReload,
} from "../../../../../store/designation";

const override = css`
  display: block;
  border-color: red;
  margin: 0 auto;
`;

function Row(props) {
  const dispatch = useDispatch();
  const { designation, serial } = props;
  const designationDeleted = useSelector(
    (state) => state.entities.designation.designationDeleted
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteDesignationToDB(id));
        if (designationDeleted) {
          Swal.fire("Deleted!", "Designation has been deleted.", "success");
          // Set reload
          dispatch(setReload());
          // setReload(!reload);
        }
      }
    });
  };

  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {serial + 1}
        </TableCell>
        <TableCell align="center">{designation?.name}</TableCell>
        <TableCell align="center">{designation?.detail}</TableCell>
        <TableCell align="center">
          <EditIcon className={`${styles.editIcon}`} />
          <Delete
            onClick={() => handleDelete(designation?._id)}
            className={`${styles.deleteIcon}`}
          />
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
  const dispatch = useDispatch();
  // Getting all designation from store
  const allDesignations = useSelector(
    (state) => state.entities.designation.allDesignation
  );
  const designationLoader = useSelector(
    (state) => state.entities.designation.designationLoading
  );
  //get reload value from store
  const reload = useSelector((state) => state.entities.designation.reload);

  // Load all designations from Database
  useEffect(() => {
    dispatch(loadDesignations());
  }, [reload, dispatch]);

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
            {designationLoader && (
              <TableRow>
                <TableCell align="center" colSpan={8}>
                  <FadeLoader
                    color={"#123abc"}
                    loading={designationLoader}
                    css={override}
                    height={10}
                    width={5}
                    radius={2}
                    margin={2}
                  />
                </TableCell>
              </TableRow>
            )}
            {allDesignations.length > 0 &&
              allDesignations
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((designation, index) => (
                  <Row
                    key={designation._id}
                    designation={designation}
                    serial={index}
                    reload={reload}
                  />
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
