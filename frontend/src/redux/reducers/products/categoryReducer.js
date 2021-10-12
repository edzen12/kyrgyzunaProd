import { GET_ALL_CATEGORIES } from "../../constants";

const initState = {
    categorySuccess: null,
    categoryLoading: false,
    categories: null
}

export default function CategoryReducer(state = initState, { type, payload }){
    switch(type){
        case `${GET_ALL_CATEGORIES}_REQUEST`: {
            return {
                ...state,
                categorySuccess: null,
                categoryLoading: true
            }
        }
        case `${GET_ALL_CATEGORIES}_SUCCESS`: {
            return {
                ...state,
                categorySuccess: true,
                categoryLoading: false,
                categories: payload?.data
            }
        }
        case `${GET_ALL_CATEGORIES}_FAILED`: {
            return {
                ...state,
                categorySuccess: false,
                categoryLoading: false,
                categories: payload
            }
        }
        default: 
            return state
    }
}