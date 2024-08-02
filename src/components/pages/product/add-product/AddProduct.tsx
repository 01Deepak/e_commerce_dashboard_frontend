import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./AddProduct.module.scss";

export interface IAddProductFormInput {
  name: string;
  price: string;
  category: string;
  company: string;
}

const AddProduct: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAddProductFormInput>();

  let userId = localStorage.getItem("user");
  userId = JSON.parse(userId || "{}")._id;

  const onSubmit: SubmitHandler<IAddProductFormInput> = async (
    data: IAddProductFormInput
  ) => {
    
    console.log("add product data = ", data);
    reset();
  };

  return (
    <Container className={styles.add_product} maxWidth="xs">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Add Product
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
          autoFocus
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
          autoFocus
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
          autoFocus
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
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default AddProduct;
