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
            <Modal show={show} centered onHide={handleClose}>
                <div className='shadow rounded' >
                    <Modal.Header closeButton style={{ 'backgroundColor': 'white' }}>
                        <Modal.Title style={{ "fontWeight": "700", "color": "#004a94" }}>AFSANA MEEM</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ 'backgroundColor': '#004a94' }}>
                        <Row>
                            <Col md={4}>
                                {true && (
                                    <div className="mx-3 text-center">
                                        {false ? (
                                            <img
                                                style={{
                                                    width: "150px",
                                                    height: "150px"
                                                }}
                                                src={""}
                                                alt=""
                                            />
                                        ) : (
                                            <img
                                                style={{
                                                    width: "150px",
                                                    height: "150px"
                                                }}
                                                src={defaultUser}
                                                alt=""
                                            />
                                        )}


                                    </div>
                                )}
                            </Col>
                            <Col>
                                <div style={{ "color": "white", marginLeft: "30px" }}>
                                    <h6>Designation: Admin</h6>
                                    <h5>Designation: Admin</h5>
                                    <h5>Designation: Admin</h5>
                                    <h5>Designation: Admin</h5>
                                </div>
                            </Col>
                        </Row>

                    </Modal.Body>
                </div>
            </Modal>
        </div>
    );
};

export default SecondaryNav;