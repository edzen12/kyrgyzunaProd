import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT, GET_ALL_CATEGORIES } from "../constants"

export const getAllProductsAction = (data) => {
    return {
        type: `${GET_ALL_PRODUCTS}_REQUEST`,
        payload: data
    }
}

export const getSingleProductsAction = data => {
    return {
        type: `${GET_SINGLE_PRODUCT}_REQUEST`,
        payload: data
    }
}

export const getAllCategoriesAction = data => {
    return {
        type: `${GET_ALL_CATEGORIES}_REQUEST`,
        payload: data
    }
}