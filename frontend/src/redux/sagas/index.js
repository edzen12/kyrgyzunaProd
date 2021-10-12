import { all } from 'redux-saga/effects';
import { newsActionWatcher, singleNewsActionWatcher } from './newsSaga';
import { productsActionWatcher, categoryActionWatcher, singleProductsActionWatcher } from './productsSaga'

export default function* root(){
    const tasks = [
        newsActionWatcher(),
        singleNewsActionWatcher(),
        productsActionWatcher(),
        categoryActionWatcher(),
        singleProductsActionWatcher()
    ]

    yield all(tasks)
}