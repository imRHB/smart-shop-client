import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./TotalReports.module.css";
import Typography from "@mui/material/Typography";
import AnimatedNumber from "animated-number-react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ImportantRoutes from "../ImportantRoutes/ImportantRoutes";

const TotalReports = () => {
  const [num, setNum] = useState("");

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const formatValue = (num) => num.toFixed();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12} sx={{ marginTop: 1 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={`${styles.reportContainer}`}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Total Customer
            </Typography>
            <Box className={`${styles.reports}`}>
              <Box>
                <AnimatedNumber
                  value="570"
                  formatValue={formatValue}
                  onChange={handleChange}
                  className={`${styles.animatedNum}`}
                  duration="7000"
                />
                <ArrowDropUpIcon
                  sx={{
                    fontSize: "30px",
                    color: "#2b6989",
                  }}
                />
              </Box>
              <Box>
                <PeopleAltIcon
                  sx={{
                    fontSize: "55px",
                    color: "#2b6989",
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={`${styles.reportContainer}`}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Total Product
            </Typography>
            <Box className={`${styles.reports}`}>
              <Box>
                <AnimatedNumber
                  value="790"
                  formatValue={formatValue}
                  onChange={handleChange}
                  className={`${styles.animatedNum}`}
                  duration="7000"
                />
                <ArrowDropUpIcon
                  sx={{
                    fontSize: "30px",
                    color: "#2b6989",
                  }}
                />
              </Box>
              <Box>
                <ShopTwoIcon
                  sx={{
                    fontSize: "55px",
                    color: "rgb(255 153 0)",
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={`${styles.reportContainer}`}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Total Supplier
            </Typography>
            <Box className={`${styles.reports}`}>
              <Box>
                <AnimatedNumber
                  value="350"
                  formatValue={formatValue}
                  onChange={handleChange}
                  className={`${styles.animatedNum}`}
                  duration="7000"
                />
                <ArrowDropUpIcon
                  sx={{
                    fontSize: "30px",
                    color: "#2b6989",
                  }}
                />
              </Box>
              <Box>
                <GroupsIcon
                  sx={{
                    fontSize: "55px",
                    color: "#6cb344",
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={`${styles.reportContainer}`}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Total Invoice
            </Typography>
            <Box className={`${styles.reports}`}>
              <Box>
                <AnimatedNumber
                  value="1220"
                  formatValue={formatValue}
                  onChange={handleChange}
                  className={`${styles.animatedNum}`}
                  duration="7000"
                />
                <ArrowDropUpIcon
                  sx={{
                    fontSize: "30px",
                    color: "#2b6989",
                  }}
                />
              </Box>
              <Box>
                <StorefrontIcon
                  sx={{
                    fontSize: "55px",
                    color: "#3c4652",
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <ImportantRoutes />
    </Box>
  );
};

export default TotalReports;
