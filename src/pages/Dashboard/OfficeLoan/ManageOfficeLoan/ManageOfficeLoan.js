import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TablePagination from "@mui/material/TablePagination";
import { Button, Container, Grid, TextField } from "@mui/material";
import users from "../../../../assets/data/users.json";
// import "./Manageusers.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from "react-router-dom";

function Row(props) {
  const { user } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        className="colunm"
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell width="15%" align="center" component="th" scope="row">
          {user.name}
        </TableCell>
        <TableCell align="center">{user.address}</TableCell>
        <TableCell align="center">{user.phone}</TableCell>

                <TableCell align="center">
                    <Button>
                        <EditIcon
                            sx={{
                                marginLeft: "25px",
                                backgroundColor: "#002447",
                                borderRadius: "5px",
                                color: "white",
                                padding:'2px'
                            }}
                        />
                    </Button>

                    <Button>
                        <DeleteForeverIcon
                            sx={{
                                backgroundColor: "red",
                                borderRadius: "5px",
                                color: "white",
                                padding:'2px'

                            }}
                        />
                    </Button>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const ManageOfficeLoan = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    return (
        <Box sx={{marginTop:'10px'}}>
            <Box sx={{ marginBottom: "30px", backgroundColor:'#f1f3f6' }}>
                <div className="d-flex justify-content-between border ">
                    <div className="text-start d-flex ms-2 p-2 ">
                        <h1>
                        <AssignmentIcon style={{fontSize:'60px', backgroundColor:'#002447', color:'white'}}></AssignmentIcon>
                        </h1>
                  <div className="ms-3">
                  <h5>Manage Person</h5>
                        <small className="">Person</small>
                  </div>
                    </div>
                    <div>
                        <small className=" fw-bold border p-2 mt-2">
                            Manage / Person
                        </small>
                    </div>
                </div>
                
               
            </Box>
            <Box sx={{ borderBottom: "1px solid lightGray", display:'flex', backgroundColor:'#f1f3f6' , marginTop:'px',  marginLeft:'15px' ,marginRight:'15px' }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "gray",
                                fontSize: "3vh",
                                margin: "10px",
                                textAlign:'start'
                            }}
                        >
                          Seacrh By Person
                        </Typography>
                        <Box sx={{ display: "flex", padding: "5px",marginTop:'5px' }}>
                         
                            <input
                                className="p-2 mb-3"
                                type="search"
                                placeholder="Seacrh Here"
                                name=""
                                id=""
                            />
                              <button style={{ backgroundColor: '#002447', height:'40px' }} className='  text-light btn fw-bold ms-3'>Search</button>
                        </Box>
                    </Box>
            <div className='text-end mt-3 me-3'>
                <Link to="/addOfficeLoan">
                    <button style={{ backgroundColor: '#45c203' }} className='  text-light btn fw-bold py-2'>Add Person Loan</button>
                </Link>
            </div>
            
            <Container sx={{ width: "100%" }}>


                <Paper sx={{ marginTop: "50px", paddingBottom: "1px", backgroundColor:'#f1f3f6' }}>
                    <Box sx={{ borderBottom: "1px solid lightGray", display:'flex' }}>
                         <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "gray",
                                fontSize: "3vh",
                                margin: "10px",
                                textAlign:'start'
                            }}
                        >
                            Manage Person
                        </Typography>
                        {/* <Box sx={{ display: "flex", padding: "5px",marginTop:'5px' }}>
                         
                            <input
                                className="p-2 mb-3"
                                type="search"
                                placeholder="Seacrh Here"
                                name=""
                                id=""
                            />
                        </Box>  */}
                    </Box>
                    <TableContainer
                        component={Paper}
                        sx={{ width: "97%", margin: "15px", border: "1px solid lightGray" }}
                    >
                        <Table aria-label="simple table">
                            <TableHead sx={{backgroundColor:'#002447'}}>
                                <TableRow className="text-light">
                                    <TableCell sx={{ fontWeight: "bold", color:'white' }} align="center">
                                        Name
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color:'white' }} align="center">
                                        Address
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold" , color:'white'}} align="center">
                                        Phone.
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color:'white' }} align="center">
                                        Action.
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((user) => (
                                        <Row key={user._id} user={user} />
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <Typography className="mt-3">
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Typography>
            </Container>
        </Box>
    );
};

export default ManageOfficeLoan;
