import React, { useEffect, useState } from 'react'
import AddProduct, { IAddProductFormInput } from '../add-product/AddProduct'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from './UpdateProductApi';


const UpdateProduct = () => {
    const [dataForUpdate, setDataForUpdate] = useState<IAddProductFormInput>();
    const {id} = useParams();
    const loginData = JSON.parse(localStorage.getItem("user") ?? "null");
    const token = loginData?.token;

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                console.log("update product id = ", id);
                const product = await getSingleProduct(id, token);
                setDataForUpdate(product);
            }
        };
    
        fetchData();
    }, [id]);

  return (
    <>
    <AddProduct dataForUpdate={dataForUpdate}/>
    </>
  )
}

export default UpdateProduct