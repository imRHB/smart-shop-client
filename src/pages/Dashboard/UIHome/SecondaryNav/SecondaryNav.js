import React from 'react';
import styles from "./SecondaryNav.module.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import defaultUser from "../../../../assets/images/user.png";
import { Button } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';


const SecondaryNav = () => {
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
                    <Button className={`${styles.viewProfile}`} startIcon={<PreviewIcon />}>View Profile</Button>
                    <Button className={`${styles.startChat}`} startIcon={<PreviewIcon />}>Start Chat</Button>

                </Grid>
            </Grid>
        </div>
    );
};

export default SecondaryNav;