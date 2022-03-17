import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Designation.module.css";
import AddDesignation from "./AddDesignation/AddDesignation";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DisplayDesignation from "./DisplayDesignation/DisplayDesignation";

const Designation = () => {
  const [reload, setReload] = useState(false);
  // const updateReload = (val) => {
  //   setReload(val);
  // };
  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px", marginLeft: "-22px" }}>HRM</span>{" "}
          <br />
          <span style={{ color: "#969494", paddingLeft: "5px" }}>
            Designation
          </span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <Button className={`${styles.addEmployeeBtn}`}>Add Employee</Button>
        <Button className={`${styles.manageEmployeeBtn}`}>
          Manage Employee
        </Button>
      </Box>
      <AddDesignation updateReload={setReload} newReload={reload} />
      <DisplayDesignation newReload={reload} />
    </Container>
  );
};

export default Designation;
