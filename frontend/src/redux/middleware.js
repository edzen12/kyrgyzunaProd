import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const sagaArray = [sagaMiddleware]

export default sagaArray;