import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import filterAgeCost from "./reducer/filterReducer";
import rootSaga from "./saga/filterSaga";


export const configureAll = () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        filterAgeCost,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    
    sagaMiddleware.run(rootSaga);
    
    return store;
}
