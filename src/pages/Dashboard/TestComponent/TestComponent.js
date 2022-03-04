import React from "react";

const TestComponent = () => {
  return (
    <div className="text-center" style={{ marginTop: "50px" }}>
      <h1>This is Test Component</h1>
      <p>Here, You Check Component Design</p>
      <p className="text-danger fw-bold">
        Don't forget remove your component from test route
      </p>
    </div>
  );
};

export default TestComponent;
