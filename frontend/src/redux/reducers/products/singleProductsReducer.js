import { GET_SINGLE_PRODUCT } from "../../constants"
const initState = {
    productsSuccess: null,
    productsLoading: false,
    data: null
}

export default function SingleProductsReducer(state = initState, { type, payload }){
    switch(type){
        case `${GET_SINGLE_PRODUCT}_REQUEST`: {
            return {
                ...state,
                productsSuccess: null,
                productsLoading: true
            }
        }
        case `${GET_SINGLE_PRODUCT}_SUCCESS`: {
            return {
                ...state,
                productsSuccess: true,
                productsLoading: false,
                data: payload?.data
            }
        }
        case `${GET_SINGLE_PRODUCT}_FAILED`: {
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