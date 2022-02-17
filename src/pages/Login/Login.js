import React from "react";
import styles from "./Login.module.css";
import { Button, Form } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { user, setUser, userLogin, setError, getUserEmail, getUserPassword } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location?.state?.from || '/dashboard';

  //handle user login with email and password

  const userLoginWithEmailPass = (e) => {
    e.preventDefault();
    userLogin()
      .then((result) => {
        setUser(result.user)
        console.log(user);
        navigate(redirect);
        alert("user login successfully")
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (

    <div className={`${styles.loginPage}`}>

      {/* login form */}
      <Form onSubmit={userLoginWithEmailPass} className={`${styles.userLoginSection} ${"shadow"}`}>
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
            placeholder="Your Username"
            className={`${styles.inputFields}`}
            name='email'
            onBlur={getUserEmail}
          />
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
            name='password'
            onBlur={getUserPassword}
          />
        </Form.Group>

        {/* save password checkbox and forgot password button */}
        <div
          className={`${"d-flex flex-xxl-column justify-content-between mb-5"}`}
        >
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label=" Remember me" />
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
      </Form>
    </div>
  );
};

export default Login;
