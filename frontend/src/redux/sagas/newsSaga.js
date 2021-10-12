import { call, put, takeLatest } from "redux-saga/effects";
import { getAllNews, getSingleNews } from '../../API';
import { GET_ALL_NEWS, GET_SINGLE_NEWS } from "../constants";

function* getAllNewsSaga({payload}){
    try{
        const response = yield call(getAllNews, payload);
        yield put({ type: `${GET_ALL_NEWS}_SUCCESS`, payload: response })
    }catch(err){
        yield put({ type: `${GET_ALL_NEWS}_FAILED`, payload: err })
    }
}

function* getSingleNewsSaga({payload}){
    try{
        const response = yield call(getSingleNews, payload);
        yield put({ type: `${GET_SINGLE_NEWS}_SUCCESS`, payload: response })
    }catch(err){
        yield put({ type: `${GET_SINGLE_NEWS}_FAILED`, payload: err })
    }
}

export function* newsActionWatcher(){
    yield takeLatest(`${GET_ALL_NEWS}_REQUEST`, getAllNewsSaga)
}

export function* singleNewsActionWatcher(){
    yield takeLatest(`${GET_SINGLE_NEWS}_REQUEST`, getSingleNewsSaga)
}