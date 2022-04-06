import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';
import { createStore } from 'redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {

};

const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(<App />, document.getElementById('root'));
