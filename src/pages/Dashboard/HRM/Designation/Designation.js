import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Input } from "@mui/material";
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
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Swal from "sweetalert2";
import designations from "../../../../assets/data/designations.json";
import styles from "./Designation.module.css";
import { useForm } from "react-hook-form";

const Designation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let { name, detail } = data;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("detail", detail);

    // fetch("", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire("Good job!", "Employee Created Successfully!", "success");
    //       reset();
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };
  return (
    <>
      <Container sx={{ width: "100%", mb: 5 }}>
        <Box
          className={`${styles.topContainer}`}
          sx={{ display: "flex", my: 3 }}
        >
          <Typography>
            <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
          </Typography>
          <Typography>
            <span style={{ fontSize: "26px", marginLeft: "-22px" }}>HRM</span>{" "}
            <br />
            <span style={{ color: "#969494", paddingLeft: "5px" }}>
              Designation
            </span>
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right", my: 2 }}>
          <Button className={`${styles.addEmployeeBtn}`}>Add Employee</Button>
          <Button className={`${styles.manageEmployeeBtn}`}>
            Manage Employee
          </Button>
        </Box>
        <Box className={`${styles.tableContainer}`}>
          <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
            Add Designation
          </Typography>
          <hr />
          <div className="mt-2">
            <div className="form-container">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row gx-3 mb-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="p-3 border bg-light">
                        <div className="mb-3">
                          <label
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                          >
                            Designation{" "}
                            <sup className="text-danger fw-bold fs-6">*</sup>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Designation"
                            style={{ background: "#E5E5E5" }}
                            {...register("name", { required: true })}
                          />
                          {errors.name && (
                            <span className="text-danger">
                              Please enter designation name.
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="p-3 border bg-light">
                        <div className="mb-3">
                          <label
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                          >
                            Details
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Details"
                            style={{ background: "#E5E5E5" }}
                            {...register("detail", { required: true })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                      <div className="p-3">
                        <div>
                          <Box sx={{ textAlign: "center" }}>
                            <input
                              type="reset"
                              className={`${"btn"} ${styles.resetBtn}`}
                              style={{ background: "#251D58", color: "#fff" }}
                              value="Reset"
                            />
                            <input
                              type="submit"
                              className={`${"btn"} ${styles.saveBtn}`}
                              style={{ background: "#251D58", color: "#fff" }}
                              value="Save"
                            />
                          </Box>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Designation;
