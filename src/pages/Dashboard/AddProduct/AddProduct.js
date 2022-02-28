import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from "react-bootstrap";
import { Box, Button, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from './AddProduct.module.css';
import useCategory from "../../../hooks/useCategory";
import useSuppliers from "../../../hooks/useSuppliers";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const category = useCategory();
    const suppliers = useSuppliers();

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
                                <div className="row gx-3 mb-3">
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
                                                    {...register("productId", { required: false })}
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
                                                    Model{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Product Model"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("model", { required: false })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
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
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Product Name"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("name", { required: true })}
                                                />
                                                {errors.name && (
                                                    <span className="text-danger">
                                                        Please enter product name.
                                                    </span>
                                                )}
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

                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("category", { required: true })}
                                                >
                                                    <option>-- select category --</option>
                                                    {category.map((ctgry) => (
                                                        <option
                                                            key={ctgry._id}
                                                            value={ctgry?.name}
                                                        >
                                                            {ctgry?.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.category && (
                                                    <span className="text-danger">
                                                        Please select product category
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
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
                                                    placeholder="Enter Product Price"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("name", { required: true })}
                                                />
                                                {errors.name && (
                                                    <span className="text-danger">
                                                        Please enter product price.
                                                    </span>
                                                )}
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
                                                    Supplier{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>

                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("supplier", { required: true })}
                                                >
                                                    <option>-- select supplier --</option>
                                                    {suppliers.map((supplier) => (
                                                        <option
                                                            key={supplier._id}
                                                            value={supplier?.name}
                                                        >
                                                            {supplier?.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.category && (
                                                    <span className="text-danger">
                                                        Please select supplier
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
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