import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
yield takeEvery('SET_QUERY', fetchSearch);
yield takeEvery('ADD_FAV', addFavorite);
yield takeEvery('GET_CATEGORIES', getCategories)
};

function* getCategories() {
    try { 
        let response = yield axios.get('/api/category')
        yield put({type: 'SET_CATEGORIES', payload: response.data})
}   catch (err) {
    console.log(err);
}
}

const categoryReducer = ( state = [], action) => {
    if (action.type === 'SET_CATEGORIES') {
        return action.payload
    }
    return state;
}

function* addFavorite() {
    //axios.post('/api/favorite')
}

function* fetchSearch(action) {
    try {
        
        let response = yield axios.get(`/api/search/${action.payload}`)
        yield put({ type: 'SET_RESULTS', payload: response.data.data });


    } catch (err) {
        console.log(err);
    }
}

const getResults = (state = [], action) => {
    if (action.type === 'SET_RESULTS') {
       return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        getResults, categoryReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
