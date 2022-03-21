import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from './CrudTest.module.css';
import useProducts from "../../../hooks/useProducts";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { saveProductToDb, loadProducts, selectedProduct, setReload } from '../../../store/products';

const CrudTest = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const products = useSelector((state) => state.entities.products.allProduct);
    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);

    // const [selectedProduct, setSelectedProduct] = useState("");
    // console.log(selectedProduct);

    const [selectPd, setSelectPd] = useState("--- select product ---");


    const handleProductSelect = (_id, name) => {
        // console.log('selected product:', _id);
        // console.log('selected product:', name);
        dispatch(selectedProduct(_id));
        setSelectPd(name);
    };

    const singleProduct = useSelector((state) => state.entities.products.singleProduct);
    console.log(singleProduct);

    const findProduct = products.find(foundedPd => {
        if (foundedPd.name === selectedProduct) {
            return true;
        }
        return false;
    })


    const onSubmit = (data) => {
        // data.name = selectedProduct;
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
                <NavLink
                    to="/dashboard/manage-product"
                    style={{ textDecoration: "none" }}
                >
                    <Button className={`${styles.manageProductBtn}`}>Manage Products</Button>
                </NavLink>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Add New Product
                </Typography>
                <hr />
                <div className="mt-2">
                    <div className="form-container">
                        <div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="p-3 border bg-light">
                                    <div className="mb-3">
                                        <label
                                            className="form-label"
                                            style={{ fontWeight: "bold" }}
                                        >
                                            Product{" "}
                                            <sup className="text-danger fw-bold fs-6">*</sup>
                                        </label>
                                        <Dropdown className="form-control">
                                            <Dropdown.Toggle id="dropdown-basic" style={{ background: "#E5E5E5", color: '#000' }}>
                                                {selectPd}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {
                                                    products.map(product => (
                                                        <Dropdown.Item onClick={() => handleProductSelect(product._id, product.name)}>{product.name}</Dropdown.Item>
                                                    ))
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gx-3 mb-3 gy-3">

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
                                                    {...register("category", { required: false })}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Product Category"
                                                    value={singleProduct?.category}
                                                    style={{ background: "#E5E5E5" }}
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
                                                    defaultValue={singleProduct?.productId}
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
                                                    defaultValue={singleProduct?.supplierPrice}
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
                <hr />

            </Box>

            {/* test dropdown */}

        </Container >
    );

};

export default CrudTest;