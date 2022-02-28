import React from 'react';
import Typography from "@mui/material/Typography";
import defaultUser from "../../../../assets/images/user.png";
import { NavDropdown } from "react-bootstrap";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from "./DashboardNavbar.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const DashboardNavbar = () => {
    return (
        <div className='ms-auto'>


            <Typography
                sx={{ color: "#0C0C0C", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}
                component="div"
            >
                <Badge color="error" badgeContent={11} max={10} >
                    <NotificationsNoneIcon sx={{ color: "#0d6efd" }} />
                </Badge>

                <div >
                    <NavDropdown title={<AccountCircleIcon />} className={`${styles.usersProfileDropdown}`}>
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
                                                    border: "1px solid gray"

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
                                                    marginTop: "10px"
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

                            <NavDropdown.Item className={`${styles.usersDropdown}`}>
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
                                <LogoutIcon sx={{ marginRight: "10px" }} />
                                Logout
                            </NavDropdown.Item>
                        </div>

                    </NavDropdown>
                </div>

            </Typography>
        </div>
    );
};

export default DashboardNavbar;