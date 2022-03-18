import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import defaultUser from "../../../../assets/images/user.png";
import { NavDropdown } from "react-bootstrap";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./DashboardNavbar.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddIcon from "@mui/icons-material/Add";
import { NavLink } from "react-router-dom";
import { Modal, Row, Col } from "react-bootstrap";
import { Box, Button } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";

const DashboardNavbar = () => {
  const { logOut } = useAuth();
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const locale = "en";
  const [today, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });


  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    fetch("https://smart-shop-pos.herokuapp.com/events")
      .then(res => res.json())
      .then(data => setNotifications(data))

  }, [notifications]);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{ color: "#0d6efd", fontWeight: "bold", fontSize: "15px" }}
      >
        {date}
        {time}
      </Typography>

      <Typography
        sx={{
          color: "#0C0C0C",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
        }}
        component="div"
      >
        <NavLink to="/dashboard/pos">
          {" "}
          <AddIcon sx={{ color: "#0d6efd" }}> </AddIcon>
        </NavLink>

        <Badge color="error" badgeContent={notifications.length} max={5}>
          <NotificationsNoneIcon
            sx={{ color: "#0d6efd" }}
            className={`${styles.usersProfileDropdown}`}
          />
        </Badge>
        {/* <div>
          <NavDropdown
            title={
              <Badge color="error" badgeContent={notifications.length} max={5}>
                <NotificationsNoneIcon
                  sx={{ color: "#0d6efd" }}
                  className={`${styles.usersProfileDropdown}`}
                />
              </Badge>
            }
            className={`${styles.usersProfileDropdown}`}
          >
            <div className={`${styles.alldropdownItems}`}>
              {
                notifications.map(notification =>
                  <NavDropdown.Item className={`${styles.eventsDropdown}`}>
                    <NavLink className={`${styles.eventsNotification}`} to="/dashboard/events">
                      <h6>{notification?.title}</h6>
                      <p style={{ fontSize: "10px" }}>  {notification.start}</p>
                      <hr />
                    </NavLink>
                  </NavDropdown.Item>
                )
              }
              <NavDropdown.Item className={`${styles.eventsNotification}`}>
                see all events
              </NavDropdown.Item>
            </div>
          </NavDropdown>
        </div> */}

        <div>
          <NavDropdown
            title={<AccountCircleIcon />}
            className={`${styles.usersProfileDropdown}`}
          >
            <div className={`${styles.alldropdownItems}`}>
              <NavDropdown.Item className={`${styles.usersDPDropdown}`}>
                {true && (
                  <div className="mx-3 text-center">
                    {false ? (
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          border: "1px solid gray",
                        }}
                        src={""}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          border: "1px solid gray",
                          marginTop: "10px",
                        }}
                        src={defaultUser}
                        alt=""
                      />
                    )}
                  </div>
                )}
              </NavDropdown.Item>
              <hr />
              <NavDropdown.Item className={`${styles.usersDropdown}`}>
                <PersonOutlineIcon sx={{ marginRight: "10px" }} />
                <span className="">
                  {" "}
                  {"Najmul Ovi"} | {true ? "Admin" : "Subscriber"}
                </span>
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={handleShow}
                className={`${styles.usersDropdown}`}
              >
                <ManageAccountsIcon sx={{ marginRight: "10px" }} />
                My Profile
              </NavDropdown.Item>
              <hr />
              <NavDropdown.Item className={`${styles.usersDropdown}`}>
                {/* {user.email ? (
                                <Button onClick={logOut} className="btn_regular">
                                    Log Out
                                </Button>
                            ) : (
                                <Link to="/login">
                                    <Button className="btn_regular" color="inherit">
                                        Login
                                    </Button>
                                </Link>
                            )} */}
                <NavLink
                  style={{ textDecoration: "none", marginTop: "0 !important" }}
                  to="/"
                >
                  <Button
                    onClick={logOut}
                    sx={{
                      color: "#fff !important",
                      textTransform: "capitalize",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    <LogoutIcon sx={{ mr: 2, fontSize: "24px" }} />
                    Logout
                  </Button>
                </NavLink>
              </NavDropdown.Item>
            </div>
          </NavDropdown>
        </div>
      </Typography>

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
                AFSANA MEEM
              </h4>
              {true && (
                <div className="mx-3 text-center border border-1 p-3">
                  {false ? (
                    <img className="img-fluid" src={""} alt="" />
                  ) : (
                    <img className="img-fluid" src={defaultUser} alt="" />
                  )}
                </div>
              )}
              <hr />
              <h6
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
              </h6>
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
                  Admin
                </span>
                <hr />
              </h6>

              <h6 className={`${styles.employeeTitle}`}>
                Joined Date
                <span className={`${styles.employeeInfo}`}>
                  <br /> 01/01/2022
                </span>
                <hr />
              </h6>

              <h6 className={`${styles.employeeTitle}`}>
                Email
                <span className={`${styles.employeeInfo}`}>
                  <br />
                  admin@admin.com
                </span>
                <hr />
              </h6>

              <h6 className={`${styles.employeeTitle}`}>
                Phone
                <span className={`${styles.employeeInfo}`}>
                  <br />
                  01723456789
                </span>
              </h6>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Box>
  );
};

export default DashboardNavbar;
