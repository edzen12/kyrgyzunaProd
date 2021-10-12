import { GET_ALL_PRODUCTS } from "../../constants";

const initState = {
    productsSuccess: null,
    productsLoading: false,
    data: null
}

export default function ProductsReducer(state = initState, { type, payload }){
    switch(type){
        case `${GET_ALL_PRODUCTS}_REQUEST`: {
            return {
                ...state,
                productsSuccess: null,
                productsLoading: true
            }
        }
        case `${GET_ALL_PRODUCTS}_SUCCESS`: {
            return {
                ...state,
                productsSuccess: true,
                productsLoading: false,
                data: payload?.data
            }
        }
        case `${GET_ALL_PRODUCTS}_FAILED`: {
            return {
                ...state,
                productsSuccess: false,
                productsLoading: false,
                data: payload
            }
        }
        default: 
            return state
    }
}