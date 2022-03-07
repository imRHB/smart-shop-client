import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Button, Container, Grid, Link, TextField } from "@mui/material";
import expenses from "../../../assets/data/expenses.json";
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

function Row(props) {
    const { expense } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow className="colunm" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>

                <TableCell width="15%" align="center" component="th" scope="row">
                    {expense._id}
                </TableCell>
                <TableCell align="center">{expense.item}</TableCell>

                <TableCell align="center">

              

                    <Button>
                        <DeleteForeverIcon sx={{ backgroundColor: 'red', borderRadius: '5px', color: 'white', padding: '2px' }} />
                    </Button>
                </TableCell>
            </TableRow>

        </React.Fragment>
    );
}

const ExpenseItem = () => {
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
        <Box className="mt-3">
            <Box sx={{ marginBottom: '30px', backgroundColor: '#f1f3f6' }}>
                <div className='d-flex justify-content-between  border'>
                    <div className='d-flex text-start ms-2 p-2 '>
                        <AssignmentIcon style={{ fontSize: '60px', backgroundColor: '#002447', color: 'white' }}></AssignmentIcon>

                        <div className="ms-2">
                            <h5> Expense </h5>
                            <small className=''>Manage Expense Item</small>
                        </div>
                    </div>
                    <div>
                        <small className=' fw-bold border p-1'>Manage Expense Item</small>
                    </div>

                </div>
            </Box>
            <div className='text-end '>

                <Link to="/addExpense">
                <button style={{ backgroundColor: '#45c203 ' }} className='  text-light btn fw-bold py-2 me-3'><FormatAlignJustifyIcon></FormatAlignJustifyIcon> Add ExpenseItem</button>
                </Link>
            </div>
            <Container sx={{ width: "100%", marginTop:'20px' }}>


                <Box sx={{ boxShadow: '0px 0px 01px 2px whiteSmoke', backgroundColor: '#f1f3f6' }}>
                    <Typography variant="h6" sx={{ borderBottom: '1px solid lightGray', color: 'gray' }}>
                        Add Expense Item

                    </Typography>
                    <Grid sx={{ padding: '20px' }} container spacing={2}>
                        <Grid item xs={2}>
                            <Typography variant="small" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                Expence Name *
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sx={{ marginBottom: '50px' }}>
                            <TextField sx={{ width: '50%' }} id="outlined-basic" label="Category Name" variant="outlined" />
                            <Button variant="contained" sx={{ marginLeft: '20px', marginTop: '5px', backgroundColor: '#002447' }}>Save</Button>
                        </Grid>
                    </Grid>

                </Box>
                <Box sx={{ borderBottom: "1px solid lightGray", display:'flex', backgroundColor:'#f1f3f6' , marginTop:'35px',  marginLeft:'5px' ,marginRight:'5px' }}>
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
                          Seacrh By Expese Name
                        </Typography>
                        <Box sx={{ display: "flex", padding: "5px",marginTop:'5px' }}>

                            <input
                                className="p-2 mb-3"
                                type="search"
                                placeholder="Seacrh Here"
                                name=""
                                id=""
                            />
                              <button style={{ backgroundColor: '#45c203 ', height:'40px' }} className='  text-light btn fw-bold ms-3'>Search</button>
                        </Box>
                    </Box>

                <Paper sx={{ marginTop: '50px', paddingBottom: '5px', backgroundColor:'#f1f3f6'}}>
                    <Box sx={{ borderBottom: '1px solid lightGray', display: 'flex' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'gray', fontSize: '3vh', margin: '10px', }}>
                            Expense Item
                        </Typography>
                        
                    </Box>
                    <TableContainer component={Paper} sx={{ width: '97%', margin: '15px', border: '1px solid lightGray' }}>

                        <Table aria-label="simple table">
                            <TableHead sx={{ backgroundColor: '#002447' }}>
                                <TableRow className="">

                                    <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center" >SL.</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Expense Item</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Action</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {expenses
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((expense) => (
                                        <Row key={expense._id} expense={expense} />
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <Typography className="mt-3">
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={expenses.length}
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

export default ExpenseItem;
