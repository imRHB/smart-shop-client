import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import { Button, Form } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { employee, authError, loading, loginWithEmailAndPassword } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Login user using email and password
    loginWithEmailAndPassword(data.email, data.password, navigate, location);
    console.log(data);
    reset();
  };

  // //handle user login with email and password

  // const userLoginWithEmailPass = (e) => {
  //   e.preventDefault();

  //   userLogin()
  //     .then((result) => {
  //       setUsers(result.user);
  //       navigate(redirect);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  // };

  return (
    <div className={`${styles.loginPage}`}>
      {/* login form */}
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.userLoginSection} ${"shadow"}`}
      >
        {/* logo and title */}
        <img src={logo} alt="logo" className={`${styles.siteLogo} ${"mb-3"}`} />

        <h4>Welcome Back!</h4>
        <p>Enter your credentials to continue</p>

        {/* input fields */}
        <Form.Group
          className={`${styles.inputFieldGroup} ${"mb-3 mx-auto"}`}
          controlId="formBasicEmail"
        >
          <Form.Label className={`${styles.inputLabels}`}>
            Email address
          </Form.Label>
          <FontAwesomeIcon icon={faUserAlt} className={`${styles.formIcon}`} />
          <Form.Control
            type="email"
            placeholder="Your Email"
            className={`${styles.inputFields}`}
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-warning">This field is required</span>
          )}
        </Form.Group>

        <Form.Group
          className={`${styles.inputFieldGroup} ${"mb-3 mx-auto"}`}
          controlId="formBasicPassword"
        >
          <Form.Label className={`${styles.inputLabels}`}>Password</Form.Label>
          <FontAwesomeIcon icon={faLock} className={`${styles.formIcon}`} />
          <Form.Control
            type="password"
            placeholder="Your Password"
            className={`${styles.inputFields}`}
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-warning">This field is required</span>
          )}
        </Form.Group>

        {/* save password checkbox and forgot password button */}
        <div
          className={`${"d-flex flex-column flex-md-row justify-content-between mb-5"}`}
        >
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="none" className={`${"m-0 p-0"}`}>
            Forgot Password?
          </Button>
        </div>

        {/* submit button */}

        <Button
          variant="primary"
          className={`${styles.submitButton} ${"w-100"}`}
          type="submit"
        >
          Login
        </Button>
        {loading && (
          <div className="text-center mt-2">
            <div className="spinner-border text-primary"></div>
          </div>
        )}

        {authError && (
          <div className="alert alert-danger mt-4" role="alert">
            {authError}
          </div>
        )}
      </Form>
    </div>
  );
};

export default Login;
