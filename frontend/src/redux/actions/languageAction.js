import { LANGUAGE } from "../constants"

export const ruLangAction = data => {
    return {
        type: `${LANGUAGE}_RU`,
        payload: data
    }
}

export const enLangAction = data => {
    return {
        type: `${LANGUAGE}_EN`,
        payload: data
    }
}

export const kgLangAction = data => {
    return {
        type: `${LANGUAGE}_KG`,
        payload: data
    }
}