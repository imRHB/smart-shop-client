import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Swal from "sweetalert2";
import styles from "./AddLoan.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveloansToDb, setReload } from "../../../../store/loans";

const AddLoan = () => {
  const dispatch = useDispatch();
  let reload = useSelector((state) => state.entities.loans.reload);
  const categories = [
    {
      _id: 1,
      name: "Gold",
    },
    {
      _id: 2,
      name: "Silver",
    },
    {
      _id: 3,
      name: "Platinum",
    },
    {
      _id: 4,
      name: "Regular",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    /*  let { firstName, category, phone, date, amount, details, address } = data;
     const name = `${firstName}`;
 
     const formData = new FormData();
     formData.append("name", name);
     formData.append("category", category);
     formData.append("phone", phone);
     formData.append("date", date);
     formData.append("amount", amount);
     formData.append("details", details);
     formData.append("address", address); */

    dispatch(saveloansToDb(data));
    dispatch(setReload({ reload: !reload }));
    Swal.fire("Success", "New loans Added", "success");

    reset();
  };
  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>Personal Loan</span> <br />{" "}
          <span style={{ color: "#969494" }}>Add Loan</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        {/* <NavLink
          to="/dashboard/manage-personal-loan"
          style={{ textDecoration: "none" }}
        >
          <Button className={`${styles.designationBtn}`}>Manage Loan</Button>
        </NavLink>
        <NavLink
          to="/dashboard/add-payment"
          style={{ textDecoration: "none" }}
        >
          <Button className={`${styles.manageEmployeeBtn}`}>Add Payment</Button>
        </NavLink> */}
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold" }}>Add Loan</Typography>
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
                          Name <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          style={{ background: "#E5E5E5" }}
                          {...register("firstName", { required: true })}
                        />
                        {errors.firstName && (
                          <span className="text-danger">
                            Please enter your name.
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
                          Phone{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                          style={{ background: "#E5E5E5" }}
                          {...register("phone", { required: true })}
                        />
                        {errors.phone && (
                          <span className="text-danger">
                            Please enter phone number.
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Amount
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Amount"
                          style={{ background: "#E5E5E5" }}
                          {...register("amount", { required: false })}
                        />
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
                          Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Date"
                          style={{ background: "#E5E5E5" }}
                          {...register("date", { required: false })}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
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
                          rows="3"
                          placeholder="Details"
                          style={{ background: "#E5E5E5" }}
                          {...register("details", { required: false })}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <Box sx={{ textAlign: "center", my: 2 }}>
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

                <div className="row gx-3 mb-3"></div>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default AddLoan;
