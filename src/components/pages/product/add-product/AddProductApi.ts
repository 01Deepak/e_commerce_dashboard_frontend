import { IAddProductFormInput } from './AddProduct';

export const hitAddProductApi = async (data: IAddProductFormInput, token: string) => {
    console.log(data);
    const response = await fetch("http://localhost:4000/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-token": token,
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log("data responseData =", responseData);
    if (response.ok) {
      return responseData;
    } else {
        return response.ok;
      throw new Error(responseData.message);
    }
  }