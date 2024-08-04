export const ProductsApi = async (token: string) => {
        const response = await fetch("http://localhost:4000/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "access-token": token,
            },
        });
        const responseData = await response.json();
        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.message);
        }
    }

export const deleteProduct = async (id: string, token: string) => {
    const response = await fetch(`http://localhost:4000/delete/product/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "access-token": token,
        },
    });
    const responseData = await response.json();
    if (response.ok) {
        return responseData;
    } else {
        throw new Error(responseData.message);
    }
}

export const searchProduct = async (query: string, token: string) => {
    const response = await fetch(`http://localhost:4000/search/product/${query}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "access-token": token,
        },
    });
    const responseData = await response.json();
    if (response.ok) {
        return responseData;
    } else {
        throw new Error(responseData.message);
    }
}