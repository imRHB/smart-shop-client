import { Grid, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import PestControlIcon from "@mui/icons-material/PestControl";
import WidgetsIcon from "@mui/icons-material/Widgets";
const WelcomeReport = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3} sx={{ height: "180px", marginTop: "20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(200, 250, 205)",
                borderRadius: "10px",
                marginLeft: "10px",
                height: "220px",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    borderRadius: "50%",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)",
                    padding: "12px",
                  }}
                >
                  <AndroidIcon
                    sx={{ margin: "10px", color: "rgb(0, 123, 85)" }}
                  ></AndroidIcon>
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "rgb(0, 82, 73)",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                  variant="h5"
                >
                  795K
                </Typography>
                <Typography
                  sx={{ color: "rgb(0, 123, 85)", fontSize: "13px" }}
                  variant="small"
                >
                  Weekly Sales
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid xs={3} sx={{ height: "180px", marginTop: "20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(208, 242, 255)",
                borderRadius: "10px",
                marginLeft: "20px",
                height: "220px",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    borderRadius: "50%",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)",
                    padding: "12px",
                  }}
                >
                  <AppleIcon
                    sx={{ margin: "10px", color: "rgb(4, 41, 122)" }}
                  />
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "rgb(0, 82, 73)",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                  variant="h5"
                >
                  1.35m
                </Typography>
                <Typography
                  sx={{ color: "rgb(4, 41, 122)", fontSize: "13px" }}
                  variant="small"
                >
                  New Users
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid xs={3} sx={{ height: "180px", marginTop: "20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(255, 247, 205)",
                borderRadius: "10px",
                marginLeft: "20px",
                height: "220px",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    borderRadius: "50%",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)",
                    padding: "12px",
                  }}
                >
                  <WidgetsIcon
                    sx={{ margin: "10px", color: "rgb(183, 129, 3)" }}
                  ></WidgetsIcon>
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "rgb(183, 129, 3)",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                  variant="h5"
                >
                  1.72m
                </Typography>
                <Typography
                  sx={{ color: "rgb(183, 129, 3)", fontSize: "13px" }}
                  variant="small"
                >
                  Item Orders
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={3} sx={{ height: "180px", marginTop: "20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(255, 231, 217)",
                borderRadius: "10px",
                marginLeft: "20px",
                height: "220px",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    borderRadius: "50%",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)",
                    padding: "12px",
                  }}
                >
                  <PestControlIcon
                    sx={{ margin: "10px", color: "rgb(122, 12, 46)" }}
                  ></PestControlIcon>
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "rgb(122, 12, 46)",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                  variant="h5"
                >
                  795K
                </Typography>
                <Typography
                  sx={{ color: "rgb(122, 12, 46)", fontSize: "13px" }}
                  variant="small"
                >
                  Bug Reports
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WelcomeReport;
