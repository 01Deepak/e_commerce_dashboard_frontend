import { IAddProductFormInput } from "../add-product/AddProduct";

export const getSingleProduct = async (id: string) => {
    const response = await fetch(`http://localhost:4000/product/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const responseData = await response.json();
    if (response.ok) {
        return responseData;
    } else {
        throw new Error(responseData.message);
    }
};

export const updateProductApi = async (data: IAddProductFormInput) => {
    const response = await fetch(`http://localhost:4000/update/product/${data._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (response.ok) {
        return responseData;
    } else {
        throw new Error(responseData.message);
    }
}