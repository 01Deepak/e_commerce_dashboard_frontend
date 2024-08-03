import React, {useState, useEffect } from "react";
import { Typography } from "@mui/material";
import styles from "./Products.module.scss";
import ProductCard from "../../ui/ProductCard";
import { ProductsApi } from "./ProductsApi";


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

 useEffect(() => {
    const fetchProducts = async () => {
      const response = await ProductsApi();
      setProducts(response);
    };
    fetchProducts();
  }, []);
  

  return (
    <div className={styles.products_container}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
         Product page
      </Typography>
      <div className={styles.products}>
      {
          products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
        }
        </div>
     
    </div>
  );
};

export default Products;
