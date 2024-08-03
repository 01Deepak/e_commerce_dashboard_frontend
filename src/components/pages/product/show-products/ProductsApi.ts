export const ProductsApi = async () => {
        const response = await fetch("http://localhost:4000/products", {
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
    }