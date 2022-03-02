import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
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
import { Button, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from "./ManageSupplier.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import TextField from "@mui/material/TextField";
import UpgradeIcon from '@mui/icons-material/Upgrade';


function Row(props) {
    const { supplier, setSuppliers, suppliers } = props;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //delete supplier
    const handleDeleteSupplier = id => {
        const url = `https://smart-shop-pos.herokuapp.com/suppliers/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainSuppliers = suppliers.filter(item => item._id !== id);
                    setSuppliers(remainSuppliers);
                }
            })
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    const onSubmit = data => {

        axios.post('https://stormy-woodland-90777.herokuapp.com/colorCastleOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Service Booked Successfully!!");
                    reset();
                    setShow(false)
                }
            })
    };

    return (
        <React.Fragment>
            <TableRow
                className={`${styles.tableHover}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                {/* <TableCell component="th" scope="row">
                    {supplier._id}
                </TableCell> */}
                <TableCell align="center">{supplier.name}</TableCell>
                <TableCell align="center">{supplier.address}</TableCell>
                <TableCell align="center">{supplier.contact}</TableCell>
                <TableCell align="center">BDT {supplier.balance}</TableCell>
                <TableCell align="center">
                    <EditIcon onClick={() => { setShow(true); }} className={`${styles.editIcon}`} />
                    <Delete onClick={() => { setShow(true); }} className={`${styles.deleteIcon}`} />
                </TableCell>
            </TableRow>

            {/* Confirmation alert */}
            <Modal show={show} onHide={handleClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <div className={`${"modal-header"}`}>
                    <h5 className={`${"modal-title text-danger fw-bold"}`} id="exampleModalLabel">Delete Supplier</h5>
                </div>

                <Modal.Body>Are you sure you want to delete supplier?</Modal.Body>
                <Modal.Footer>
                    {/* confirmation button */}
                    <Button variant="outlined" className={`${styles.paymentBtn}`} onClick={() => { handleDeleteSupplier(supplier._id) }} startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button className={`${styles.receiptBtn}`} startIcon={<CloseIcon />} onClick={handleNoBtn}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* manage supplier */}
            {/* order now form */}
            <Modal show={show} centered onHide={handleClose}>
                <div className='shadow rounded' style={{ 'background': 'linear-gradient(to right, #1e3c72, #2a5298)' }}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: "white" }}>Update Supplier</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* form */}
                        <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>
                            <Box>
                                <TextField
                                    id="outlined-basic"
                                    size="small"
                                    className={`${styles.supplierTextField}`}
                                    label="Supplier Name"
                                    variant="outlined"
                                    {...register("name", { required: true })}
                                />
                                <TextField
                                    id="outlined-textarea"
                                    size="small"
                                    label="Supplier Address"
                                    className={`${styles.supplierTextField}`}
                                    multiline
                                    {...register("address", { required: true })}
                                />
                                <TextField
                                    id="outlined-basic"
                                    size="small"
                                    className={`${styles.supplierTextField}`}
                                    label="Supplier Contact No."
                                    variant="outlined"
                                    {...register("contact", { required: true })}
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="Balance"
                                    size="small"
                                    multiline
                                    className={`${styles.supplierTextField}`}
                                    {...register("balance", { required: true })}
                                />
                            </Box>
                            {/* <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" defaultValue={user.displayName} {...register("name")} />

                            {details.name &&
                                <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" value={details.name} {...register("service", { required: true })} />
                            }

                            {details.price &&
                                <input className="my-2 w-75 mx-auto d-block px-4 py-1 border-0 rounded" value={details.price} {...register("price", { required: true })} />
                            } */}

                            <Modal.Footer>
                                {/* confirmation button */}
                                <Button variant="outlined" className={`${styles.paymentBtn}`} onClick={() => { handleDeleteSupplier(supplier._id) }} endIcon={<UpgradeIcon />}>
                                    Update
                                </Button>
                                <Button className={`${styles.receiptBtn}`} endIcon={<CloseIcon />} onClick={handleNoBtn}>
                                    Cancel
                                </Button>
                            </Modal.Footer>

                        </form>
                    </Modal.Body>
                </div>
            </Modal>


        </React.Fragment >
    );
}


const ManageSupplier = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [suppliers, setSuppliers] = useState([]);
    useEffect(() => {
        fetch('https://smart-shop-pos.herokuapp.com/suppliers')
            .then(res => res.json())
            .then(data => setSuppliers(data))
    }, []);


    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Manage Supplier</span> <br />{" "}
                    <span style={{ color: "#969494" }}>Manage your Supplier</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "right", my: 2 }}>
                <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>Add Supplier</Button>
                <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>Supplier Ledger</Button>
                <Button className={`${styles.paymentBtn}`} startIcon={<ReceiptIcon />}>Supplier Payment</Button>
                <Button className={`${styles.receiptBtn}`} startIcon={<ReceiptIcon />}>Supplier Sales Details</Button>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold" }}>Manage Supplier</Typography>
                <hr />
                <TableContainer
                    component={Paper}
                    sx={{ border: 1, borderColor: "grey.300" }}
                >
                    <Table aria-label="simple table">
                        <TableHead className={`${styles.tableHeader}`}>
                            <TableRow>

                                {/* <TableCell className={`${styles.tableCell}`}>SL.</TableCell> */}
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Supplier Name
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Address
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Mobile
                                </TableCell>
                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Balance
                                </TableCell>

                                <TableCell align="center" className={`${styles.tableCell}`}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {suppliers
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((supplier) => (
                                    <Row key={supplier._id} suppliers={suppliers} setSuppliers={setSuppliers} supplier={supplier} />
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    className="mt-3"
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={suppliers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </Container>


    );
};
export default ManageSupplier;