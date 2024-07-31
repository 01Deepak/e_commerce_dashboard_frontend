import { IFormInput } from "./Register";

export const hitRegisterApi = async (data: IFormInput) => {
    console.log(data);
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    const responseData = await response.json();
    console.log("data", responseData);
    if (response.ok) {
      return responseData;
    } else {
      throw new Error(responseData.message);
    }
  }