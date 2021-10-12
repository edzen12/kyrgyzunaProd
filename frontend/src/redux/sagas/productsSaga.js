import { call, put, takeLatest } from "redux-saga/effects";
import { getAllProducts, getAllCategory, getSingleProducts } from '../../API';
import { GET_ALL_PRODUCTS, GET_ALL_CATEGORIES, GET_SINGLE_PRODUCT } from "../constants";

function* getAllProductsSaga({payload}){
    try{
        const response = yield call(getAllProducts, payload);
        yield put({ type: `${GET_ALL_PRODUCTS}_SUCCESS`, payload: response })
    }catch(err){
        yield put({ type: `${GET_ALL_PRODUCTS}_FAILED`, payload: err })
    }
}

function* getAllCategoriesSaga({payload}){
    try{
        const response = yield call(getAllCategory, payload);
        yield put({ type: `${GET_ALL_CATEGORIES}_SUCCESS`, payload: response })
    }catch(err){
        yield put({ type: `${GET_ALL_CATEGORIES}_FAILED`, payload: err })
    }
}

function* getSingleProductsSaga({payload}){
    try{
        const response = yield call(getSingleProducts, payload);
        yield put({ type: `${GET_SINGLE_PRODUCT}_SUCCESS`, payload: response })
    }catch(err){
        yield put({ type: `${GET_SINGLE_PRODUCT}_FAILED`, payload: err })
    }
}

export function* productsActionWatcher(){
    yield takeLatest(`${GET_ALL_PRODUCTS}_REQUEST`, getAllProductsSaga)
}

export function* categoryActionWatcher(){
    yield takeLatest(`${GET_ALL_CATEGORIES}_REQUEST`, getAllCategoriesSaga)
}

export function* singleProductsActionWatcher(){
    yield takeLatest(`${GET_SINGLE_PRODUCT}_REQUEST`, getSingleProductsSaga)
}
