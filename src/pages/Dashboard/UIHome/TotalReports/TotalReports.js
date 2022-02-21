import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from "./TotalReports.module.css";
import Typography from '@mui/material/Typography';
import AnimatedNumber from "animated-number-react";


const TotalReports = () => {
    // num = {
    //     value: 150,
    // };
    const [num, setNum] = useState('')

    const handleChange = (e) => {
        setNum(e.target.value);
    };
    // const formatValue = (value) => value.toFixed(2);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={12} sx={{ marginTop: 1 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>
                        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Total Customer
                        </Typography>
                        <Box className={`${styles.reports}`}>
                            <Box>
                                <h2>{num}</h2>
                                <AnimatedNumber
                                    value="120"
                                    onChange={handleChange}
                                // formatValue={this.formatValue}
                                />
                            </Box>
                            <Box>
                                <h2>m</h2>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={`${styles.reportContainer}`}>

                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
};

export default TotalReports;
