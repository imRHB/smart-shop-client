import React from 'react';
import { useForm } from 'react-hook-form';
import styles from "./AddSupplier.module.css";
import TextField from '@mui/material/TextField';
import { Box, Container } from '@mui/material';

const AddSupplier = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (

        <div className={`${styles.addSupplier}`}>

            <form >
                <div className={`${styles.addSupplierField}`}>
                    <p>Supplier Name <span>*</span></p>
                    <TextField id="outlined-basic" sx={{ width: '400px' }} label="Supplier Name" variant="outlined" {...register("name", { required: true })} />
                </div>

                <div className={`${styles.addSupplierField}`}>
                    <p>Supplier Contact No.<span>*</span></p>
                    <TextField id="outlined-basic" sx={{ width: '400px' }} label="Supplier Contact No." variant="outlined" {...register("contact", { required: true })} />
                </div>

                <div className={`${styles.addSupplierField}`}>
                    <p>Supplier Address <span>*</span></p>
                    <TextField
                        id="outlined-textarea"
                        label="Supplier Address"
                        sx={{ width: '400px' }}
                        multiline
                        {...register("address", { required: true })}
                    />
                </div>

                <div className={`${styles.addSupplierField}`}>
                    <p>Supplier Details <span>*</span></p>
                    <TextField
                        id="outlined-textarea"
                        label="Supplier Details"
                        multiline
                        sx={{ width: '400px' }}
                        {...register("details", { required: true })}
                    />
                </div>

                <div className={`${styles.addSupplierField}`}>
                    <p>Previous Balance <span>*</span></p>
                    <TextField
                        id="outlined-textarea"
                        label="Balance"
                        multiline
                        sx={{ width: '400px' }}
                        {...register("balance", { required: true })}
                    />
                </div>

            </form>

        </div >

    );
};

export default AddSupplier;