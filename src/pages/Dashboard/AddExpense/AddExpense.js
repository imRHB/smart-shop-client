import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Swal from "sweetalert2";
import { loadExpenseItems, saveExpenseToDb, setReload } from '../../../store/expenses';
import styles from "./AddExpense.module.css";
import { NavLink } from "react-router-dom";

const AddExpense = () => {
  const dispatch = useDispatch();
  let reload = useSelector((state) => state.entities.expenses.reload);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(loadExpenseItems())
  }, [reload, dispatch]);

  const expenseItems = useSelector((state) => state.entities.expenses.expenseItems);

  const onSubmit = (data) => {
    dispatch(saveExpenseToDb(data));

    dispatch(setReload({ reload: !reload }));
    Swal.fire("Successfull!", "New expense added", "success");

    reset();
  };

  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>Expense</span> <br />
          <span style={{ color: "#969494" }}>Add Expense</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <NavLink
          to="/dashboard/expense-item"
          style={{ textDecoration: "none" }}
        >
          <Button className={`${styles.manageEmployeeBtn}`}>Add Expense Item</Button>
        </NavLink>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: 'start', marginLeft: '6px' }}>Add Expense</Typography>
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
                          Choose Expense <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          style={{ background: "#E5E5E5" }}
                          {...register("name", { required: true })}
                        >
                          {expenseItems.map((expItem) => (
                            <option
                              key={expItem._id}
                              value={expItem?.name}
                            >
                              {expItem?.name}
                            </option>
                          ))}
                        </select>
                        {errors.firstName && (
                          <span className="text-danger">
                            Please choose expense.
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
                          Amount{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount"
                          style={{ background: "#E5E5E5" }}
                          {...register("amount", { required: true })}
                        />
                        {errors.phone && (
                          <span className="text-danger">
                            Please enter A Amount.
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
                          Date{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="Date"
                          className="form-control"
                          placeholder="Date"
                          style={{ background: "#E5E5E5" }}
                          {...register("date", { required: true })}
                        />
                        {errors.phone && (
                          <span className="text-danger">
                            Please enter A Date.
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
                          {...register("details", { required: false })}
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
    </Container>
  );
};

export default AddExpense;
