import{ compose, createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {rootReducer } from './root-reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV  !== 'production' && logger, thunk].filter(
    Boolean
);

const composeEhancer =(process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEhancer(applyMiddleware(...middleWares));


export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const  persistor = persistStore(store);
