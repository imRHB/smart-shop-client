import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import styles from "./AddDesignation.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  saveDesignationToDB,
  setReload,
} from "../../../../../store/designation";

const AddDesignation = () => {
  const dispatch = useDispatch();
  //get reload value from store
  let reload = useSelector((state) => state.entities.designation.reload);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //Send form data to Server
    dispatch(saveDesignationToDB(data));

    // Set reload
    dispatch(setReload({ reload: !reload }));
    Swal.fire("Good job!", "Designation Added Successfully.", "success");
    reset();
  };
  return (
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
                      <textarea
                        className="form-control"
                        rows="1"
                        placeholder="Details"
                        style={{ background: "#E5E5E5" }}
                        {...register("detail", { required: false })}
                      ></textarea>
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
  );
};

export default AddDesignation;
