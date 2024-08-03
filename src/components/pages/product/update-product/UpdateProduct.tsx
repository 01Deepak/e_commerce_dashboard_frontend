import React, { useEffect, useState } from 'react'
import AddProduct, { IAddProductFormInput } from '../add-product/AddProduct'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from './UpdateProductApi';


const UpdateProduct = () => {
    const [dataForUpdate, setDataForUpdate] = useState<IAddProductFormInput>();
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                console.log("update product id = ", id);
                const product = await getSingleProduct(id);
                setDataForUpdate(product);
            }
        };
    
        fetchData();
    }, [id]);

  return (
    <>
    <div>UpdateProduct - {id}</div>
    <AddProduct dataForUpdate={dataForUpdate}/>
    </>
  )
}

export default UpdateProduct