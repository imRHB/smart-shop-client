import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Swal from "sweetalert2";
import designations from "../../../../assets/data/designations.json";
import cloudImage from "../../../../assets/images/cloud-upload.png";
import styles from "./AddEmployee.module.css";
import useAuth from "../../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { saveEmployeeToDB } from "../../../../store/employee";

const AddEmployee = () => {
  // const { registerEmployee, loading, authError } = useAuth();
  // const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((result) => {
        setCountries(result.data);
      });
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let {
      firstName,
      lastName,
      designation,
      phone,
      email,
      salary,
      bloodGroup,
      country,
      city,
      zip,
      address1,
      address2,
      image,
    } = data;
    const name = `${firstName} ${lastName}`;
    const password = "123456";
    const address = `${address1} ${address2}`;
    const current = new Date().getTime();
    const employeeId = current.toString().slice(9, 12) + phone;

    // Register new user based on data
    // registerEmployee(name, email, password, navigate, location);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("employeeId", employeeId);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("salary", salary);
    formData.append("bloodGroup", bloodGroup);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("zip", zip);
    formData.append("address", address);
    formData.append("image", image[0]);

    // Send form data to Server
    // dispatch(saveEmployeeToDB(formData));

    // Register new user based on data
    // registerEmployee(name, email, password, navigate, location);

    //Alert message
    Swal.fire("Good job!", "Employee Added Successfully!", "success");

    reset();

    fetch("https://smart-shop-pos.herokuapp.com/employees", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "Employee Added Successfully!", "success");
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px", marginLeft: "-46px" }}>HRM</span>{" "}
          <br /> <span style={{ color: "#969494" }}>Add Employee</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <Button className={`${styles.designationBtn}`}>Designation</Button>
        <Button className={`${styles.manageEmployeeBtn}`}>
          Manage Employee
        </Button>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
          Add Employee
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
                          First Name{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          style={{ background: "#E5E5E5" }}
                          {...register("firstName", { required: true })}
                        />
                        {errors.firstName && (
                          <span className="text-danger">
                            Please enter first name.
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
                          Last Name{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          style={{ background: "#E5E5E5" }}
                          {...register("lastName", { required: true })}
                        />
                        {errors.lastName && (
                          <span className="text-danger">
                            Please enter last name.
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
                          Designation{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>

                        <select
                          className="form-select"
                          aria-label="Default select example"
                          style={{ background: "#E5E5E5" }}
                          {...register("designation", { required: true })}
                        >
                          <option>-- select one --</option>
                          {designations.map((designation) => (
                            <option
                              key={designation._id}
                              value={designation?.name}
                            >
                              {designation?.name}
                            </option>
                          ))}
                        </select>
                        {errors.designation && (
                          <span className="text-danger">
                            Please select a designation
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
                          Email{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          style={{ background: "#E5E5E5" }}
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <span className="text-danger">
                            Please enter email.
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
                          Salary
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Salary"
                          style={{ background: "#E5E5E5" }}
                          {...register("salary", { required: false })}
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
                          Blood Group
                        </label>

                        <select
                          className="form-select"
                          aria-label="Default select example"
                          style={{ background: "#E5E5E5" }}
                          {...register("bloodGroup", { required: false })}
                        >
                          <option>-- select one --</option>
                          <option value={"A+"}>{"A+"}</option>
                          <option value={"A-"}>{"A-"}</option>
                          <option value={"B+"}>{"B+"}</option>
                          <option value={"B-"}>{"B-"}</option>
                          <option value={"AB+"}>{"AB+"}</option>
                          <option value={"AB-"}>{"AB-"}</option>
                          <option value={"O+"}>{"O+"}</option>
                          <option value={"O-"}>{"O-"}</option>
                        </select>
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
                          Country
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          style={{ background: "#E5E5E5" }}
                          {...register("country", { required: true })}
                        >
                          <option>-- select country --</option>
                          {countries?.map((countryDetail) => (
                            <option
                              key={countryDetail?.iso2}
                              value={countryDetail?.country}
                            >
                              {countryDetail?.country}
                            </option>
                          ))}
                        </select>
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
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                          style={{ background: "#E5E5E5" }}
                          {...register("city", { required: false })}
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
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Zip"
                          style={{ background: "#E5E5E5" }}
                          {...register("zip", { required: false })}
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
                          Address 1
                        </label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Address 1"
                          style={{ background: "#E5E5E5" }}
                          {...register("address1", { required: false })}
                        ></textarea>
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
                          Address 2
                        </label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Address 2"
                          style={{ background: "#E5E5E5" }}
                          {...register("address2", { required: false })}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <span
                          className="mb-2 d-inline-block"
                          style={{ fontWeight: "bold" }}
                        >
                          Picture
                        </span>
                        <div className="input-group mb-4">
                          <label
                            className="input-group-text"
                            htmlFor="inputGroupFile02"
                          >
                            <img
                              style={{ height: "35px" }}
                              src={cloudImage}
                              alt=""
                            />{" "}
                            <span
                              style={{ color: "#251D58", fontWeight: "bold" }}
                            >
                              Upload image
                            </span>
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            className="form-control"
                            style={{ background: "#E5E5E5" }}
                            id="inputGroupFile02"
                            {...register("image", { required: false })}
                          />
                        </div>
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
              </form>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default AddEmployee;
