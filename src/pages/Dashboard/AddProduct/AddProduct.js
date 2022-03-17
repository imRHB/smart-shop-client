import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Autocomplete, Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from './AddProduct.module.css';
import useProducts from "../../../hooks/useProducts";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const products = useProducts();

    const [selectedProduct, setSelectedProduct] = useState({});

    const findProduct = products.find(foundedPd => {
        if (foundedPd.name === selectedProduct) {
            return true;
        }
        return false;
    })


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Product</span>{" "}
                    <br /> <span style={{ color: "#969494" }}>Add Product</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "right", my: 2 }}>
                <Button className={`${styles.manageProductBtn}`}>Manage Products</Button>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Add New Product
                </Typography>
                <hr />
                <div className="mt-2">
                    <div className="form-container">
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gx-3 mb-3 gy-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Product Name{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <Stack spacing={2} sx={{ width: 'auto' }}>
                                                    <Autocomplete
                                                        {...register("name", { required: false })}
                                                        style={{ backgroundColor: "#f1f3f6", border: 'none' }}
                                                        freeSolo
                                                        id="free-solo-demo"
                                                        size="small"
                                                        options={products.map((product) => product.name)}
                                                        renderInput={(params) => <TextField
                                                            style={{ background: '#E5E5E5' }}
                                                            onSelectCapture={(e) => setSelectedProduct(e.target.value)}
                                                            {...params} label="Select product" />}
                                                    />
                                                </Stack>

                                                {/* {errors.name && (
                                                    <span className="text-danger">
                                                        Please select product
                                                    </span>
                                                )} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Category{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Product Category"
                                                    defaultValue={findProduct?.category}
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("category", { required: false })}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3 gy-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Barcode/QR-code{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Barcode/QR-code"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("barcode", { required: false })}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Product ID{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Product ID"
                                                    defaultValue={findProduct?.productId}
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("productId", { required: false })}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3 gy-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Supplier Price{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Supplier Price"
                                                    defaultValue={findProduct?.supplierPrice}
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("supplierPrice", { required: false })}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Sell Price{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter Product Sell Price"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("sellPrice", { required: true })}
                                                />
                                                {errors.name && (
                                                    <span className="text-danger">
                                                        Please enter product sell price.
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3 gy-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Details
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    placeholder="Product Details"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("description", { required: false })}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <span
                                                    className="mb-2 d-inline-block"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Image
                                                </span>
                                                <div className="input-group mb-4">
                                                    <label
                                                        className="input-group-text"
                                                        htmlFor="inputGroupFile02"
                                                    >
                                                        <img
                                                            style={{ height: "35px" }}
                                                            src=""
                                                            alt=""
                                                        />{" "}
                                                        <span
                                                            style={{ color: "#251D58", fontWeight: "bold" }}
                                                        >
                                                            Upload image
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="form-control"
                                                        style={{ background: "#E5E5E5" }}
                                                        id="inputGroupFile02"
                                                        {...register("img", { required: false })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <Box sx={{ textAlign: "center", my: 2 }}>
                                                    <input
                                                        type="reset"
                                                        className={`${"btn"} ${styles.resetBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Reset"
                                                    />
                                                    <input
                                                        type="submit"
                                                        className={`${"btn"} ${styles.saveBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Save"
                                                    />
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    );

};

export default AddProduct;