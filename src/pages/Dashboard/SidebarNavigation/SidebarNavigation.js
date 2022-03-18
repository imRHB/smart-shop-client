import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShopIcon from "@mui/icons-material/Shop";
import PaidIcon from "@mui/icons-material/Paid";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import LogoutIcon from "@mui/icons-material/Logout";
import QuizIcon from "@mui/icons-material/Quiz";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import styles from "./SidebarNavigation.module.css";
import useAuth from "../../../hooks/useAuth";
// import { makeStyles } from "@material-ui/core";

const SidebarNavigation = () => {
  const { logOut } = useAuth();
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
    <Box
      sx={{
        background: "#003366 !important",
        color: "#fff !important",
      }}
    >
      {admin ? (
        <>
          {/*======= Dashboard Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "300",
                    fontSize: "16px",
                  }}
                >
                  <SpeedIcon sx={{ mr: 2, fontSize: "24px" }} />
                  Dashboard
                </Button>
              </NavLink>
            </AccordionSummary>
          </Accordion>
          {/*======= Dashboard Nav Menu End ======*/}

          {/*======= Sell Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <PointOfSaleIcon sx={{ mr: 2, fontSize: "24px" }} />
                Sell
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-new-invoice`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> POS
                </Button>
              </NavLink>
              <br />
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-invoice`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Invoice
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Sell Nav Menu End ======*/}

          {/*======= Product Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <ShoppingCartIcon sx={{ mr: 2, fontSize: "24px" }} />
                Product
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/product-category`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Category
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-unit`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Unit
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/purchase-product`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Purchase Product
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-product`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Product
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-product`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter5Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Product
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Product Nav Menu End ======*/}

          {/*======= Customer Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <PeopleAltIcon sx={{ mr: 2, fontSize: "24px" }} />
                Customer
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-customer`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Customer
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-customer`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Customer
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/credit-customer`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Customer Status
                </Button>
              </NavLink>
              {/* <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/paid-customer`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Paid
                  Customer
                </Button>
              </NavLink> */}
            </AccordionDetails>
          </Accordion>
          {/*======= Customer Nav Menu End ======*/}

          {/*======= Supplier Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <PersonIcon sx={{ mr: 2, fontSize: "24px" }} />
                Supplier
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-supplier`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Supplier
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-supplier`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Supplier
                </Button>
              </NavLink>
              {/* <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/supplier-ledger`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Supplier Ledger
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/supplier-payment`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Supplier Payment
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/supplier-sales-details`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter5Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Supplier Sales Details
                </Button>
              </NavLink> */}
            </AccordionDetails>
          </Accordion>
          {/*======= Supplier Nav Menu End ======*/}

          {/*======= Purchase Nav Menu Start ======*/}
          {/* <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <ShopIcon sx={{ mr: 2, fontSize: "24px" }} />
                Purchase
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-purchase`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Purchase
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-purchase`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Purchase
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion> */}
          {/*======= Purchase Nav Menu End ======*/}

          {/*======= Accounts Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <PaidIcon sx={{ mr: 2, fontSize: "24px" }} />
                Accounts
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              {/* <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/create-account`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Create
                  Account
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-account`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Account
                </Button>
              </NavLink> */}
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/payment`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Payment
                </Button>
              </NavLink>
              <br />
              {/* <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/receipt`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Receipt
                </Button>
              </NavLink> */}
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-transaction`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Transaction
                </Button>
              </NavLink>
              {/* <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/account-closing`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter6Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Closing
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/account-report`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter7Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Account
                  Report
                </Button>
              </NavLink> */}
            </AccordionDetails>
          </Accordion>
          {/*======= Accounts Nav Menu End ======*/}

          {/*======= Stock Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <SignalCellularAltIcon sx={{ mr: 2, fontSize: "24px" }} />
                Stock
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/stock-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Stock
                  Report
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/supplier-stock-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Stock
                  Report (Supplier)
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/product-stock-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Stock
                  Report (Product)
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Stock Nav Menu End ======*/}

          {/*======= Report Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <MenuBookIcon sx={{ mr: 2, fontSize: "24px" }} />
                Report
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/purchase-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Purchase Report
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/sales-report-product`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Sales
                  Report (Product)
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/profit-report-invoice`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Profit
                  Report (Invoice)
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/today-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Todays
                  Report
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/sales-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter5Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Sales
                  Report
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Report Nav Menu End ======*/}

          {/*======= Bank Nav Menu Start ======*/}
          {/* <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <AccountBalanceIcon sx={{ mr: 2, fontSize: "24px" }} />
                Bank
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-new-bank`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add New
                  Bank
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/bank-transaction`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Bank
                  Transaction
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-bank`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Bank
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion> */}
          {/*======= Bank Nav Menu End ======*/}

          {/*======= HRM Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <AccountCircleIcon sx={{ mr: 2, fontSize: "24px" }} />
                HRM
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/designation`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Designation
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-employee`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Employee
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-employee`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Employee
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= HRM Nav Menu End ======*/}

          {/*======= Expense Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <CurrencyExchangeIcon sx={{ mr: 2, fontSize: "24px" }} />
                Expense
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/expense-item`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Expense
                  Item
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-expense`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Expense
                </Button>
              </NavLink>
              {/* <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-expense`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Expense
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/expense-statement`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Expense
                  Statement
                </Button>
              </NavLink> */}
            </AccordionDetails>
          </Accordion>
          {/*======= Expense Nav Menu End ======*/}

          {/*======= Office Loan Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <AccountBalanceWalletIcon sx={{ mr: 2, fontSize: "24px" }} />
                Office Loan
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-office-person`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Office Person
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-office-loan`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Office Loan
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Office Loan Nav Menu End ======*/}

          {/*======= Personal Loan Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <AccountBoxIcon sx={{ mr: 2, fontSize: "24px" }} />
                Personal Loan
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-person`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Person
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-person`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Person
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-personal-loan`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Loan
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-personal-loan`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Loan
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-payment`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter5Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Payment
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Personal Loan Nav Menu End ======*/}

          {/*======= Role Permission Nav Menu Start ======*/}
          {/* <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <SettingsIcon sx={{ mr: 2, fontSize: "24px" }} />
                Role Permission
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-menu`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Menu
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-role`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Role
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/role-list`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Role
                  List
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/user-assign-role`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> User
                  Assign Role
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/assigned-role`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter5Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Assigned Role
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion> */}
          {/*======= Role Permission Nav Menu End ======*/}

          {/*======= Software Setting Nav Menu Start ======*/}
          {/* <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <BuildIcon sx={{ mr: 2, fontSize: "24px" }} />
                Software Setting
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/sms-configuration`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> SMS
                  Configuration
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/mail-configuration`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Mail
                  Configuration
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-company`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Company
                </Button>
              </NavLink>
              <br />
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-user`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  User
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-user`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter5Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  User
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/language`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter6Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Language
                </Button>
              </NavLink>
              <br />
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/setting`}
                
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter7Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Setting
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion> */}
          {/*======= Software Setting Nav Menu End ======*/}

          {/*======= Test Component Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
              marginTop: "0 !important",
            }}
          >
            <AccordionSummary>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/test-component`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "300",
                    fontSize: "16px",
                  }}
                >
                  <QuizIcon sx={{ mr: 2, fontSize: "24px" }} />
                  Test Component
                </Button>
              </NavLink>
            </AccordionSummary>
          </Accordion>
          {/*======= Test Component Nav Menu End ======*/}
        </>
      ) : (
        <>
          {/*======= Sell Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <PointOfSaleIcon sx={{ mr: 2, fontSize: "24px" }} />
                Sell
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-new-invoice`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add New
                  Invoice
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-invoice`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Invoice
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/pos`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> POS
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Sell Nav Menu End ======*/}
        </>
      )}
    </Box>
  );
};

export default SidebarNavigation;
