import { ruLangData, enLangData } from "../../../utils/langData";
import { LANGUAGE } from "../../constants";

const initState = {
    selectedLang: ruLangData,
    selectedLangSlug: 'RU'
}

export default function LangsReducer(state = initState, { type, payload }){
    switch(type){
        case `${LANGUAGE}_RU`: {
            return {
                ...state,
                selectedLang: ruLangData,
                selectedLangSlug: 'RU'
            }
        }
        case `${LANGUAGE}_EN`: {
            return {
                ...state,
                selectedLang: enLangData,
                selectedLangSlug: 'EN'
            }
        }
        default: 
            return state
    }
}