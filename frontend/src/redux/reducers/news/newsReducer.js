import { GET_ALL_NEWS } from "../../constants";

const initState = {
    newsSuccess: null,
    newsLoading: false,
    data: null
}

export default function NewsReducer(state = initState, { type, payload }){
    switch(type){
        case `${GET_ALL_NEWS}_REQUEST`: {
            return {
                ...state,
                newsSuccess: null,
                newsLoading: true
            }
        }
        case `${GET_ALL_NEWS}_SUCCESS`: {
            return {
                ...state,
                newsSuccess: true,
                newsLoading: false,
                data: payload?.data
            }
        }
        case `${GET_ALL_NEWS}_FAILED`: {
            return {
                ...state,
                newsSuccess: false,
                newsLoading: false,
                data: payload
            }
        }
        default: 
            return state
    }
}