import React from 'react';
import { useForm } from 'react-hook-form';
import styles from "./AddSupplier.module.css";
import TextField from '@mui/material/TextField';
import { Box, Button, Container } from '@mui/material';
import Icon from '@mui/material/Icon';

const AddSupplier = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (

        <div className={`${styles.addSupplier}`}>
            {/* add supplier form */}

            <form >
                {/* form title */}
                <h4 >ADD SUPPLIER</h4>
                <hr />
                <div className={`${styles.addSupplierField} ${'pb-4 pt-4'}`}>
                    <p>Supplier Name <span>*</span></p>
                    <TextField id="outlined-basic" sx={{ width: '400px' }} label="Supplier Name" variant="outlined" {...register("name", { required: true })} />
                </div>

                <div className={`${styles.addSupplierField} ${'pb-4'}`}>
                    <p>Supplier Contact No.<span>*</span></p>
                    <TextField id="outlined-basic" sx={{ width: '400px' }} label="Supplier Contact No." variant="outlined" {...register("contact", { required: true })} />
                </div>

                <div className={`${styles.addSupplierField} ${'pb-4'}`}>
                    <p>Supplier Address <span>*</span></p>
                    <TextField
                        id="outlined-textarea"
                        label="Supplier Address"
                        sx={{ width: '400px' }}
                        multiline
                        {...register("address", { required: true })}
                    />
                </div>

                <div className={`${styles.addSupplierField} ${'pb-4'}`}>
                    <p>Supplier Details <span>*</span></p>
                    <TextField
                        id="outlined-textarea"
                        label="Supplier Details"
                        multiline
                        sx={{ width: '400px' }}
                        {...register("details", { required: true })}
                    />
                </div>

                <div className={`${styles.addSupplierField} ${'pb-4'}`}>
                    <p>Previous Balance <span>*</span></p>
                    <TextField
                        id="outlined-textarea"
                        label="Balance"
                        multiline
                        sx={{ width: '400px' }}
                        {...register("balance", { required: true })}
                    />
                </div>
                <div className='d-flex justify-content-between'>
                    <Button type='submit' className={`${styles.addSupplierButton}`}>Save Supplier</Button>
                    <Button type='submit' className={`${styles.addAnotherButton}`}>Save and Add Another</Button>
                </div>



            </form>
        </div >
    );
};

export default AddSupplier;