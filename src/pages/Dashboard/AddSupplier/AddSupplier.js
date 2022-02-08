import React from 'react';
import { useForm } from 'react-hook-form';
import styles from "./AddSupplier.module.css";
import TextField from '@mui/material/TextField';
import { Box, Container } from '@mui/material';

const AddSupplier = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (

        <Container className={`${styles.addSupplier}`}>



            {/*             
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <form>
                    <div className={`${''}`}>
                        <p>Supplier Name</p>
                        <TextField id="outlined-basic" label="Supplier Name" variant="outlined" {...register("name", { required: true })} />
                    </div>

                    <div className={`${''}`}>
                        <p>Supplier Contact No.</p>
                        <TextField id="outlined-basic" sx={{ width: '50%' }} label="Supplier Contact No." variant="outlined" {...register("contact", { required: true })} />
                    </div>

                    <div className={`${''}`}>
                        <p>Supplier Address</p>
                        <TextField
                            id="outlined-textarea"
                            label="Supplier Address"
                            sx={{ width: '50%' }}
                            multiline
                            {...register("address", { required: true })}
                        />
                    </div>

                    <div className={`${''}`}>
                        <p>Supplier Details</p>
                        <TextField
                            id="outlined-textarea"
                            label="Supplier Details"
                            multiline
                            sx={{ width: '50%' }}
                            {...register("details", { required: true })}
                        />
                    </div>

                    <div className={`${''}`}>
                        <p>Previous Balance</p>
                        <TextField
                            id="outlined-textarea"
                            label="Balance"
                            multiline
                            sx={{ width: '50%' }}
                            {...register("balance", { required: true })}
                        />
                    </div>

                </form>

            </Box> */}
        </Container >

    );
};

export default AddSupplier;