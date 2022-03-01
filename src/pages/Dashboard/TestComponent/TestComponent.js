import React from "react";
import DashboardNavbar from "../UIHome/DashboardNavbar/DashboardNavbar"

const TestComponent = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      {/* <h1>This is Test Component</h1>
      <p>Here, You Check Component Design</p>
      <p className="text-danger fw-bold">
        Don't forget remove your component from test route
      </p> */}
      <DashboardNavbar />
    </div>
  );
};

export default TestComponent;
