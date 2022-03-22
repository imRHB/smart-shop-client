import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Swal from "sweetalert2";
import styles from "./AddLoan.module.css";
import { useDispatch, useSelector } from "react-redux";
import { saveloansToDb, setReload } from "../../../../store/loans";

const AddLoan = () => {
  const dispatch = useDispatch();
  let reload = useSelector((state) => state.entities.loans.reload);
  const loanpays = [
    {
      _id: 1,
      name: "1 year",
    },
    {
      _id: 2,
      name: "2 year",
    },
    {
      _id: 3,
      name: "3 year",
    }
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let { loanpay } = data;

    const formData = new FormData();
    formData.append("loanpay", loanpay);
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
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <span
                          className="mb-2 d-inline-block"
                          style={{ fontWeight: "bold" }}
                        >
                          Image
                        </span>
                        <div className="input-group mb-4">
                          <label
                            className="input-group-text"
                            htmlFor="inputGroupFile02"
                          >
                            <img
                              style={{ height: "35px" }}
                              src=""
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
                            {...register("img", { required: false })}
                          />
                        </div>
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
                          Pay within <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>

                        <select
                          className="form-select"
                          aria-label="Default select example"
                          style={{ background: "#E5E5E5" }}
                          {...register("loanpay", { required: true })}
                        >
                          <option>-- select one --</option>
                          {loanpays.map((loanpay) => (
                            <option key={loanpay._id} value={loanpay?.name}>
                              {loanpay?.name}
                            </option>
                          ))}
                        </select>
                        {errors.loanpay && (
                          <span className="text-danger">
                            Please select a year
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
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
