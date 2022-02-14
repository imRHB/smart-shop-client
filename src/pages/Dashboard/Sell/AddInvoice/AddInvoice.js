import React from 'react';
import { useForm } from "react-hook-form";
import styles from "./AddInvoice.module.css";
import TextField from "@mui/material/TextField";
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from '@mui/icons-material/Menu';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import Delete from "@mui/icons-material/Delete";
import Collapse from "@mui/material/Collapse";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const AddInvoice = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [open, setOpen] = React.useState(false);

    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>ADD NEW INVOICE</span> <br />{" "}
                    <span style={{ color: "#969494" }}>Add New Invoice</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "right", my: 2 }}>
                <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>Manage Invoice</Button>
                <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>POS</Button>
            </Box>

            <Box className={`${styles.paymentContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "start" }}>Add New Invoice</Typography>
                <hr />

                <form className={`${'shadow'}`}>
                    <Box className={`${styles.tableContainer}`}>
                        <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                            <Typography sx={{ textAlign: "start" }}>Customer Name<span>*</span></Typography>

                            <TextField
                                id="outlined-basic"
                                size="small"
                                sx={{ width: "400px" }}
                                label="Customer Name"
                                variant="outlined"
                                {...register("name", { required: true })}
                            />
                            <Button sx={{ borderRadius: 0, marginTop: '2px' }} onClick={() => setOpen(!open)} className={`${styles.paymentBtn}`}>New Customer

                            </Button>
                        </Box>

                        <Collapse in={open} timeout="auto" >
                            <Box className={`${styles.addSupplierField} ${"pb-4"}`}>

                                <Typography sx={{ textAlign: "start" }}>Address <span>*</span></Typography>

                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    sx={{ width: "400px" }}
                                    label="Customer Address"
                                    variant="outlined"
                                    {...register("address", { required: true })}
                                />
                            </Box>
                        </Collapse>


                        <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                            <Typography sx={{ textAlign: "start" }}>Date<span>*</span></Typography>

                            <input type="date" {...register("date", { required: true })} style={{ width: '400px', padding: "8px", backgroundColor: "#e4e4e4", border: "1px solid #aeaeae", borderRadius: "3px" }} />
                        </Box>
                        <TableContainer
                            component={Paper}
                            sx={{ border: 1, borderColor: "grey.300" }}
                        >
                            <Table aria-label="simple table">
                                <TableHead className={`${styles.tableHeader}`}>
                                    <TableRow>

                                        <TableCell className={`${styles.tableCell}`} sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Item Information<span>*</span></TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} className={`${styles.tableCell}`}>
                                            Available Ctn.
                                        </TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} className={`${styles.tableCell}`}>
                                            Carton
                                        </TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} className={`${styles.tableCell}`}>
                                            Item
                                        </TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} className={`${styles.tableCell}`}>
                                            Quantity
                                        </TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} className={`${styles.tableCell}`}>
                                            Rate<span>*</span>
                                        </TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} className={`${styles.tableCell}`}>
                                            Discount/Pcs.
                                        </TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }} className={`${styles.tableCell}`}>
                                            Total
                                        </TableCell>

                                        <TableCell align="center" className={`${styles.tableCell}`}>
                                            Action
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>

                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>

                                            <input type="text" placeholder="Product Name" {...register("product", { required: true })} style={{ padding: "8px", backgroundColor: "#e4e4e4", border: "1px solid #aeaeae", borderRadius: "3px" }} />
                                        </TableCell>

                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
                                            <input type="text" {...register("ctn", { required: true })} style={{ width: "70px", padding: "8px", backgroundColor: "#e4e4e4", border: "1px solid #aeaeae", borderRadius: "3px" }} />
                                        </TableCell>

                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
                                            <input type="number" {...register("carton", { required: true })} style={{ width: "50px", padding: "8px", backgroundColor: "#e4e4e4", border: "1px solid #aeaeae", borderRadius: "3px" }} />
                                        </TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
                                            <input type="text" placeholder='0' {...register("quantity", { required: true })} style={{ width: "50px", padding: "8px", backgroundColor: "#e4e4e4", border: "1px solid #aeaeae", borderRadius: "3px" }} />
                                        </TableCell>

                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
                                            <input type="text" {...register("item", { required: true })} style={{ width: "80px", padding: "8px", backgroundColor: "#e4e4e4", border: "1px solid #aeaeae", borderRadius: "3px" }} />
                                        </TableCell>

                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
                                            <input type="text" placeholder='rating' {...register("rate", { required: true })} style={{ width: "50px", padding: "8px", backgroundColor: "#e4e4e4", border: "1px solid #aeaeae", borderRadius: "3px" }} />
                                        </TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
                                            <input type="text" placeholder='0.00' {...register("discount", { required: true })} style={{ width: "60px", padding: "8px", backgroundColor: "#e4e4e4", border: "1px solid #aeaeae", borderRadius: "3px" }} />
                                        </TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
                                            <input type="text" placeholder='0' {...register("total", { required: true })} style={{ width: "60px", padding: "8px", backgroundColor: "#e4e4e4", border: "1px solid #aeaeae", borderRadius: "3px" }} />
                                        </TableCell>
                                        <TableCell align="center" > <Delete color="error" className={`${styles.deleteIcon}`} /></TableCell>


                                    </TableRow>
                                    <TableRow>

                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Total Discount:</TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>hello</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Grand Total:</TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>hello</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
                                            <Button variant="contained" color="success">
                                                Add New Item
                                            </Button></TableCell>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Paid Amount:</TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>hello</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
                                            <Button variant="contained" color="success">
                                                Submit
                                            </Button>
                                            <Button variant="contained" color="success">
                                                Full Paid
                                            </Button>
                                        </TableCell>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>Due:</TableCell>
                                        <TableCell align="center" sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>hello</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </form>
            </Box >
        </Container >
    );
};

export default AddInvoice;