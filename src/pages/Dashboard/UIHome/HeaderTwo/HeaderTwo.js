import React, { useEffect, useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import styles from "./HeaderTwo.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import defaultUser from "../../../../assets/images/user.png";
import { Button } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import ChatIcon from "@mui/icons-material/Chat";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { loadEmployees } from "../../../../store/employee";
import { useDispatch, useSelector } from "react-redux";

const HeaderTwo = () => {
  const dispatch = useDispatch();
  const { employee, admin } = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [notification, setNotification] = useState([]);
  useEffect(() => {
    fetch("https://smart-shop-pos.herokuapp.com/events")
      .then(res => res.json())
      .then(data => setNotification(data))
  }, [notification]);

  const employees = useSelector(
    (state) => state.entities.employee.allEmployees
  );

  // Load all designations from Database
  useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);


  const setEmployee = employees.find(filteredEmployee => filteredEmployee.email === employee.email);
  // console.log(setEmployee)

  return (
    <div className={`${styles.navContainer} ${"shadow"}`}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} md={2}>
          <Box>

            <div className="mx-3 text-center">
              {employee ?
                <img
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "1px solid rgb(65, 65, 65)",
                  }}
                  src={setEmployee.image}
                  alt=""
                />
                :
                <img
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "1px solid rgb(65, 65, 65)",
                  }}
                  src={defaultUser}
                  alt=""
                />
              }
            </div>

          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "start" }}>
            <h4>Welcome Back! {setEmployee?.name}</h4>
            <p>You have <span className="text-white">{notification.length}</span> new notifications! Check it out!</p>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleShow}
            className={`${styles.viewProfile}`}
            startIcon={<PreviewIcon />}
          >
            View Profile
          </Button>
          <NavLink
            style={{ textDecoration: "none", marginTop: "0 !important" }}
            to={`/dashboard/events`}
          >
            <Button className={`${styles.startChat}`} startIcon={<ChatIcon />}>
              Add Event
            </Button>
          </NavLink>
        </Grid>
      </Grid>
      {/* profile show */}
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Body style={{ backgroundColor: "rgb(237, 235, 255)" }}>
          <Row style={{ margin: 0 }}>
            <Col md={6} sm={12} style={{ padding: "20px" }}>
              <h4
                style={{
                  textAlign: "center",
                  color: "#003366",
                  fontWeight: "700",
                  marginBottom: "30px",
                }}
              >
                {/* {filteredEmployee.map(employee => employee.name)} */}
              </h4>

              <div className="mx-3 text-center border border-1 p-3">
                {employee ? (
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                    }}
                    className="img-fluid"
                    // src={`data:image/jpeg;base64,${setEmployee.image}`}
                    src={setEmployee.image}
                    alt=""
                  />
                ) : (
                  <img className="img-fluid" src={defaultUser} alt="" />
                )}
              </div>

              <hr />
              {/* <h6
                style={{
                  marginTop: "30px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                Todays Login Time:09:15am
              </h6>

              <h6 style={{ textAlign: "center", fontSize: "12px" }}>
                Last Logout Time: 04:45pm
              </h6> */}
            </Col>
            <Col
              md={6}
              sm={12}
              style={{
                backgroundColor: "#003366",
                padding: "20px",
                color: "white",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h6 className={`${styles.employeeTitle}`}>
                Designation
                <span className={`${styles.employeeInfo}`}>
                  <br />
                  {setEmployee?.designation}
                </span>
                <hr />
              </h6>

              <h6 className={`${styles.employeeTitle}`}>
                Employee ID
                <span className={`${styles.employeeInfo}`}>
                  <br />   {setEmployee?.employeeId}
                </span>
                <hr />
              </h6>

              <h6 className={`${styles.employeeTitle}`}>
                Email
                <span className={`${styles.employeeInfo}`}>
                  <br />
                  {setEmployee?.email}
                </span>
                <hr />
              </h6>

              <h6 className={`${styles.employeeTitle}`}>
                Phone
                <span className={`${styles.employeeInfo}`}>
                  <br />
                  {setEmployee?.phone}
                </span>
              </h6>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HeaderTwo;
