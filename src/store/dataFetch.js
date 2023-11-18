import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient()

export const fetchCategories = async () => {
    try {

        const response = await fetch(`https://reat-https-default-rtdb.firebaseio.com/categoriesList.json`)
        if (!response.ok) {
            console.error("load Failed");
        }
        const data = await response.json()
        const fetchedDataList = []
        for (const key in data) {
            fetchedDataList.push(...data[key]);
        }
        return fetchedDataList
    } catch (error) {
        throw new Error(error)
    }
}


export const fetchCategoriesData = async (productId) => {
    try {
        let link = productId.replace("-","/")

        const response = await fetch(`https://reat-https-default-rtdb.firebaseio.com/${link}.json`)
        if (!response.ok) {
            console.error("load Failed");
        }
        const data = await response.json()
        const fetchedDataList = []
        for (const key in data) {
            fetchedDataList.push(...data[key].data);
        }
        return fetchedDataList
    } catch (error) {
        throw new Error(error)
    }
}
export const homeCategoriesData = async (productId) => {
    try {
        let link = productId.replace("-","/")
        const response = await fetch(`https://reat-https-default-rtdb.firebaseio.com/${link}.json`)
        if (!response.ok) {
            console.error("load Failed");
        }
        const data = await response.json()
        const fetchedDataList = []
        for (const key in data) {
            fetchedDataList.push(...data[key].data);
        }
        return fetchedDataList
    } catch (error) {
        throw new Error(error)
    }
}