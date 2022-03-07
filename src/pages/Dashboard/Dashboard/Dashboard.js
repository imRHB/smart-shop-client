import React from "react";
import Charts from "../Charts/Charts";
import ConversionRate from "../ConversionRate/ConversionRate";
import OrderTimeline from "../OrderTimeline/OrderTimeline";
import HeaderTwo from "../UIHome/HeaderTwo/HeaderTwo";
import TotalReports from "../UIHome/TotalReports/TotalReports";
import WelcomeReport from "../WelcomeReport/WelcomeReport";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <HeaderTwo />
      <div className="container px-4 mt-3">
        <WelcomeReport />
      </div>
      <div className="container px-4 mt-3">
        <Charts />
      </div>
      <div className="container px-4 mt-3">
        <TotalReports />
      </div>
      <div className="container px-4 mt-3">
        <OrderTimeline />
      </div>
      <div className="container px-4 mt-3">
        <ConversionRate />
      </div>
    </>
  );
};

export default Dashboard;
