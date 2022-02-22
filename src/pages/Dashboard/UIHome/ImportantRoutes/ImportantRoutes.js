import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from "./ImportantRoutes.module.css";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SellIcon from '@mui/icons-material/Sell';
import { NavLink } from 'react-router-dom';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StrollerIcon from '@mui/icons-material/Stroller';


const ImportantRoutes = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={12} sx={{ marginTop: 1 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>
                        <Box className={`${styles.reports}`}>
                            <Box>
                                <SellIcon sx={{
                                    fontSize: "60px", color: "#3eb7e0", marginBottom: "10px"
                                }} />
                            </Box>
                            <Box>
                                <NavLink
                                    className={`${styles.routeTitle}`}
                                    to={`/dashboard/pos`}
                                >
                                    Create POS Invoice
                                </NavLink>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>

                        <Box className={`${styles.reports}`}>
                            <Box>

                                <ReceiptIcon sx={{
                                    fontSize: "65px", color: "rgb(120 185 83)", marginBottom: "10px"
                                }} />
                            </Box>
                            <Box>
                                <NavLink
                                    className={`${styles.routeTitle}`}
                                    to={`/dashboard/add-new-invoice`}
                                >
                                    Create New Invoice
                                </NavLink>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>

                        <Box className={`${styles.reports}`}>
                            <Box>

                                <ShoppingBasketIcon sx={{
                                    fontSize: "65px", color: "rgb(255 59 114)", marginBottom: "10px"
                                }} />
                            </Box>
                            <Box>
                                <NavLink
                                    className={`${styles.routeTitle}`}
                                    to={`/dashboard/add-product`}
                                >
                                    Add Product
                                </NavLink>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>

                        <Box className={`${styles.reports}`}>
                            <Box>

                                <StrollerIcon sx={{
                                    fontSize: "65px", color: "rgb(34 0 234)", marginBottom: "10px"
                                }} />
                            </Box>
                            <Box>
                                <NavLink
                                    className={`${styles.routeTitle}`}
                                    to={`/dashboard/add-customer`}
                                >
                                    Add Customer
                                </NavLink>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={12} sx={{ marginTop: 1 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>
                        <Box className={`${styles.reports}`}>
                            <Box>
                                <SellIcon sx={{
                                    fontSize: "65px", color: "#3eb7e0", marginBottom: "10px"
                                }} />
                            </Box>
                            <Box>
                                <NavLink
                                    className={`${styles.routeTitle}`}
                                    to={`/dashboard/sales-report`}
                                >
                                    Sales Report
                                </NavLink>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>

                        <Box className={`${styles.reports}`}>
                            <Box>

                                <PeopleAltIcon sx={{
                                    fontSize: "65px", color: "#2b6989", marginBottom: "10px"
                                }} />
                            </Box>
                            <Box>
                                <NavLink
                                    className={`${styles.routeTitle}`}
                                    to={`/dashboard/purchase-report`}
                                >
                                    Purchase Report
                                </NavLink>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>

                        <Box className={`${styles.reports}`}>
                            <Box>

                                <PeopleAltIcon sx={{
                                    fontSize: "65px", color: "#2b6989", marginBottom: "10px"
                                }} />
                            </Box>
                            <Box>
                                <NavLink
                                    className={`${styles.routeTitle}`}
                                    to={`/dashboard/stock-report`}
                                >
                                    Stock Report
                                </NavLink>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>

                        <Box className={`${styles.reports}`}>
                            <Box>

                                <PeopleAltIcon sx={{
                                    fontSize: "65px", color: "#2b6989", marginBottom: "10px"
                                }} />
                            </Box>
                            <Box>
                                <NavLink
                                    className={`${styles.routeTitle}`}
                                    to={`/dashboard/today-report`}
                                >
                                    Todays Report
                                </NavLink>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
};

export default ImportantRoutes;