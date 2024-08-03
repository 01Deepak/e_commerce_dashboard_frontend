import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import styles from "./AddProduct.module.scss";
import { hitAddProductApi } from "./AddProductApi";
import { useNavigate } from "react-router-dom";
import { updateProductApi } from "../update-product/UpdateProductApi";

export interface IAddProductFormInput {
  name: string;
  price: string;
  category: string;
  company: string;
  userId: string;
  _id: string;
}

export interface AddProductProps {
  dataForUpdate?: IAddProductFormInput;
}

const AddProduct: React.FC<AddProductProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAddProductFormInput>();
  const {dataForUpdate} = props;
  const navigate = useNavigate();

  let userId = localStorage.getItem("user");
  userId = JSON.parse(userId || "{}")._id;

  const addProduct = async (data: IAddProductFormInput) => {
    console.log("add product data = ", data);
    const response = await hitAddProductApi(data);
    if (response.name) {
        alert("Product added successfully");
    }
  }

  const updateProduct = async (data: IAddProductFormInput) => {
   console.log("update product data = ", data, dataForUpdate);
   const body = {
    _id: dataForUpdate?._id || "",
    name: data.name,
    price: data.price,
    category: data.category,
    company: data.company,
    userId: data.userId,
   }
   console.log("update product body = ", body);
   

   const updateResponse = await updateProductApi(body);
   console.log("update product response = ", updateResponse);
   if (updateResponse?.modifiedCount > 0) {
    alert("Product updated successfully");
    navigate("/products");
   }else{
    alert("Something went wrong");
   }
  }
  

  const onSubmit: SubmitHandler<IAddProductFormInput> = async (
    data: IAddProductFormInput
  ) => {
    if (userId) {
        data["userId"] = userId;
    }
    if ( dataForUpdate?.name) {
      await updateProduct(data);
    }else{
      await addProduct(data);
    }

   
    reset();
  };

  useEffect(() => {
    if (dataForUpdate?.name) {
      reset(dataForUpdate);
    }
  }, [dataForUpdate, reset]);

  return (
    <Container className={styles.add_product} maxWidth="xs">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {dataForUpdate?.name ? "Update" : "Add"} Product
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          fullWidth
          id="name"
          label="Name"
          autoComplete="name"
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
          {...register("name", {
            required: "Name is required",
            validate: (value) =>
              value.trim() !== "" || "name cannot be empty spaces",
          })}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
        />
        <TextField
          margin="normal"
          fullWidth
          id="price"
          label="Price"
          autoComplete="price"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("price", {
            required: "Price is required",
            validate: (value) =>
              value.trim() !== "" || "price cannot be empty spaces",
          })}
          error={!!errors.price}
          helperText={errors.price ? errors.price.message : ""}
        />
        <TextField
          margin="normal"
          fullWidth
          id="category"
          label="Category"
          autoComplete="category"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("category", {
            required: "Category is required",
            validate: (value) =>
              value.trim() !== "" || "category cannot be empty spaces",
          })}
          error={!!errors.category}
          helperText={errors.category ? errors.category.message : ""}
        />
        <TextField
          margin="normal"
          fullWidth
          id="company"
          label="Company"
          autoComplete="company"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("company", {
            required: "Company is required",
            validate: (value) =>
              value.trim() !== "" || "company cannot be empty spaces",
          })}
          error={!!errors.company}
          helperText={errors.company ? errors.company.message : ""}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {dataForUpdate?.name ? "Update" : "Add"}
        </Button>
      </Box>
    </Container>
  );
};

export default AddProduct;
