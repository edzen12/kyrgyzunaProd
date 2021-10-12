import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware, { sagaMiddleware } from "./middleware";
import reducers from './reducers';
import saga from './sagas'

const store = createStore(
    combineReducers({
        ...reducers
    }),
    composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(saga);

export default store;