import React, { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import styles from "./SecondaryNav.module.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import defaultUser from "../../../../assets/images/user.png";
import { Button } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import ChatIcon from '@mui/icons-material/Chat';

const SecondaryNav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={`${styles.navContainer}`}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3} md={2}>
                    <Box>
                        {true && (
                            <div className="mx-3 text-center">
                                {false ? (
                                    <img
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "50%",
                                            border: "1px solid rgb(65, 65, 65)"

                                        }}
                                        src={""}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "50%",
                                            border: "1px solid rgb(65, 65, 65)"

                                        }}
                                        src={defaultUser}
                                        alt=""
                                    />
                                )}


                            </div>
                        )}

                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Box sx={{ textAlign: "start" }}>
                        <h4>Welcome Back! Admin</h4>
                        <p>You have 4 new notifications! Check it out!</p>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={3} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button onClick={handleShow} className={`${styles.viewProfile}`} startIcon={<PreviewIcon />}>View Profile</Button>
                    <Button className={`${styles.startChat}`} startIcon={<ChatIcon />}>Start Chat</Button>
                </Grid>
            </Grid>
            {/* order now form */}
            <Modal show={show} centered onHide={handleClose} >
                <Modal.Body style={{ backgroundColor: "rgb(237, 235, 255)" }}>
                    <Row style={{ margin: 0 }}>
                        <Col md={6} sm={12} style={{ padding: "20px" }}>
                            <h4 style={{ textAlign: "center", color: "#003366", fontWeight: "700", marginBottom: "30px" }}>AFSANA MEEM</h4>
                            {true && (
                                <div className="mx-3 text-center border border-1 p-3" >
                                    {false ? (
                                        <img
                                            style={{
                                                width: "150px",
                                                height: "150px"
                                            }}
                                            className="img-fluid"
                                            src={""}
                                            alt=""
                                        />
                                    ) : (
                                        <img
                                            className="img-fluid"

                                            src={defaultUser}
                                            alt=""
                                        />
                                    )}
                                </div>
                            )}
                            <hr />
                            <h6 style={{ marginTop: "30px", textAlign: "center", fontSize: "12px" }}>Todays Login Time:09:15am</h6>

                            <h6 style={{ textAlign: "center", fontSize: "12px" }}>Last Logout Time: 04:45pm</h6>
                        </Col>
                        <Col md={6} sm={12} style={{ backgroundColor: "#003366", padding: "20px", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >

                            <h6 className={`${styles.employeeTitle}`} >Designation<span className={`${styles.employeeInfo}`}><br />Admin</span><hr /></h6>

                            <h6 className={`${styles.employeeTitle}`} >Joined Date<span className={`${styles.employeeInfo}`}><br /> 01/01/2022</span><hr /></h6>

                            <h6 className={`${styles.employeeTitle}`} >Employee ID<span className={`${styles.employeeInfo}`}><br />#26578</span></h6>

                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div >
    );
};

export default SecondaryNav;