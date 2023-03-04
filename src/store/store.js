import{ compose, createStore, appplyMiddleware} from 'redux';
import logger from 'redux-logger';

import {rootReducer } from './root-reducer';

const middleWares = [logger];

const composedEnhancers = compose(appplyMiddleware(...middleWares));


export const store = createStore(rootReducer, undefined, composedEnhancers);
