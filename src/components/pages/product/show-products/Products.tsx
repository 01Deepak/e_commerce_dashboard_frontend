import React, {useState, useEffect } from "react";
import { Typography } from "@mui/material";
import styles from "./Products.module.scss";
import ProductCard from "../../ui/ProductCard";
import { deleteProduct, ProductsApi } from "./ProductsApi";
import { useNavigate } from "react-router-dom";


export interface Product {
    _id: string;
    name: string;
    price: number;
    category: string;
    company: string;
    // other properties of the product object
  }
const Products: React.FC = () => {
 const [products, setProducts] = useState<Product[]>([]);
 const natigate = useNavigate();

 useEffect(() => {
    const fetchProducts = async () => {
      const response = await ProductsApi();
      setProducts(response);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    const response = await deleteProduct(id);
    if (response) {
      setProducts(products.filter((product) => product._id !== id));
    }else{
        alert("Something went wrong")
    }
  };

  const handleUpdate = async (id: string) => {
    console.log("update product id = ", id);
    natigate(`/update/product/${id}`);
  }
  

  return (
    <div className={styles.products_container}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
         Product page
      </Typography>
      <div className={styles.products}>
      {
          products.map((product) => (
              <ProductCard key={product._id} product={product} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            ))
        }
        </div>
     
    </div>
  );
};

export default Products;
