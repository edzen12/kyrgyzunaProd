import { GET_ALL_NEWS, GET_SINGLE_NEWS } from "../constants"

export const getAllNewsAction = (data) => {
    return {
        type: `${GET_ALL_NEWS}_REQUEST`,
        payload: data
    }
}

export const getSingleNewsAction = data => {
    return {
        type: `${GET_SINGLE_NEWS}_REQUEST`,
        payload: data
    }
}