import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import defaultUser from "../../../assets/images/user.png";
import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";
import NestedRoutes from "../NestedRoutes/NestedRoutes";

const drawerWidth = 200;

const DashboardHome = (props) => {
  //   const { user } = useAuth();
  //   const [admin, setAdmin] = React.useState(false);
  //   const [loading, setLoading] = React.useState(false);
  //   const email = sessionStorage.getItem("email");

  // React.useEffect(() => {
  //     setLoading(true);
  //     fetch(`https://mighty-savannah-90389.herokuapp.com/users/${email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAdmin(data.admin);
  //         sessionStorage.setItem("admin", data.admin);
  //         setLoading(false);
  //       });
  //   }, [email]);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //   Loading Spinner
  //   if (loading) {
  //     return (
  //       <div className="d-flex justify-content-center align-items-center mt-5">
  //         <div className="spinner-border text-primary"></div>
  //       </div>
  //     );
  //   }

  const drawer = (
    <div>
      <NavLink to="/" style={{ cursor: "pointer", textDecoration: "none" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, mt: 2, ml: 2 }}
        >
          <span
            style={{
              color: "#622A87",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Smart<span style={{ color: "red" }}>Shop</span>
          </span>
        </Typography>
      </NavLink>
      <Toolbar />
      <SidebarNavigation />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#ffffff !important",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000 !important" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ color: "#0C0C0C", fontWeight: "600" }}
            component="div"
          >
            {true && (
              <div className="mx-3 text-center">
                {false ? (
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={""}
                    alt=""
                  />
                ) : (
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={defaultUser}
                    alt=""
                  />
                )}

                <span className="">
                  {" "}
                  {"Najmul Ovi"} | {true ? "Admin" : "Subscriber"}
                </span>
              </div>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pl: 3,
          pr: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: "#E5E5E5",
          height: "230vh",
        }}
      >
        <Toolbar />
        {/* Nested Routes */}
        <NestedRoutes />
      </Box>
    </Box>
  );
};

DashboardHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardHome;
