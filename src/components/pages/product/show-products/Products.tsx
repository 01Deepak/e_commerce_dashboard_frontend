import React from "react";
import { Typography } from "@mui/material";
import styles from "./Products.module.scss";
import ProductCard from "../../ui/ProductCard";



const Products: React.FC = () => {
 
  

  return (
    <div className={styles.products_container}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
         Product page
      </Typography>
      
      <ProductCard />
     
    </div>
  );
};

export default Products;
