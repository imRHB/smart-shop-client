import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AppsIcon from "@mui/icons-material/Apps";
import LogoutIcon from "@mui/icons-material/Logout";
import MessageIcon from "@mui/icons-material/Message";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { makeStyles } from "@material-ui/core";
// import useAuth from "../../../hooks/useAuth";

const useStyles = makeStyles(() => ({
  link: {
    color: "#878787 !important",
    textTransform: "none !important",
    "&:hover": {
      color: "#251D58 !important",
      fontWeight: "600",
    },
  },
}));

const SidebarNavigation = () => {
  //   const { logOut } = useAuth();
  const classes = useStyles();
  const [admin, setAdmin] = React.useState(true);
  //   const [loading, setLoading] = React.useState(false);
  //   const email = sessionStorage.getItem("email");

  //   React.useEffect(() => {
  //     setLoading(true);
  //     fetch(`https://mighty-savannah-90389.herokuapp.com/users/${email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAdmin(data.admin);
  //         sessionStorage.setItem("admin", data.admin);
  //         setLoading(false);
  //       });
  //   }, [email]);

  //   Loading Spinner
  //   if (loading) {
  //     return (
  //       <div className="d-flex justify-content-center align-items-center mt-5">
  //         <div className="spinner-border text-primary"></div>
  //       </div>
  //     );
  //   }
  return (
    <Box>
      {admin ? (
        <>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/add-product`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <AppsIcon sx={{ mr: 2 }} /> Add Product
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/manage-product`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <AddIcon sx={{ mr: 2 }} /> Manage Product
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/manage-customer`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Manage Customer
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/credit-customer`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Credit Customer
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/add-supplier`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Add Supplier
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/manage-supplier`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Manage Supplier
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/stock-report`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Stock Report
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/supplier-stock-report`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Stock Report(Supplier Wise)
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/product-stock-report`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Stock Report(Product Wise)
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/expense-item`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Expense Item
            </Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to={`/dashboard/pos`}
            style={{ textDecoration: "none" }}
            sx={{ mx: "auto" }}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PostAddIcon sx={{ mr: 2 }} /> POS
            </Button>
          </NavLink>
          <br />
          <NavLink
            to={`/dashboard/add-new-invoice`}
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <MessageIcon sx={{ mr: 2 }} />
              Add New Invoice
            </Button>
          </NavLink>
          <br />
          <NavLink
            to={`/dashboard/manage-invoice`}
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <MessageIcon sx={{ mr: 2 }} />
              Manage Invoice
            </Button>
          </NavLink>
        </>
      )}
      <br />
      <NavLink style={{ textDecoration: "none" }} to="/">
        <Button onClick={""} className={classes.link}>
          <LogoutIcon sx={{ mr: 2 }} />
          Logout
        </Button>
      </NavLink>
    </Box>
  );
};

export default SidebarNavigation;
