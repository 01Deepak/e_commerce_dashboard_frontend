import React, {useState, useEffect } from "react";
import { Typography } from "@mui/material";
import styles from "./Products.module.scss";
import ProductCard from "../../ui/ProductCard";
import { deleteProduct, ProductsApi, searchProduct } from "./ProductsApi";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../ui/SearchInput";


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
 const [searchQuery, setSearchQuery] = useState("");
 const natigate = useNavigate();

 

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

  const handleSearch = async (query: string) => {
    console.log('Searching for:', query);
    // Add your search logic here
    setSearchQuery(query);
    // const searchResponse = await searchProduct(query);
    // setProducts(searchResponse);
  };


  const fetchProducts = async () => {
    const response = await ProductsApi();
    setProducts(response);
  };

  useEffect(() => {
    const searchResponse = async () => {
      const response = await searchProduct(searchQuery);
      setProducts(response);
    };
    console.log("search query = ", searchQuery);
    if (searchQuery) {
        searchResponse();
    }else{
        fetchProducts();
    }
  }, [searchQuery]);


  useEffect(() => {
    fetchProducts();
  }, []);

  


  return (
    <div className={styles.products_container}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
         Product page
      </Typography>
      <div style={{width: "30%" ,margin: "auto", marginBottom: "20px" }}>
      <SearchInput onSearch={handleSearch} />
    </div>
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
