import { ILoginFormInput } from "./Login";

export const loginApi = async (data: ILoginFormInput) => {
        console.log(data);
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log("data responseData111 =", response);
        const responseData = await response.json();
        console.log("data responseData =", responseData);
        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.message);
        }
    }