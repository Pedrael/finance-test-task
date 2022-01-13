// here will be Redux store...

import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "../asyncActions/index";

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  tickers: []
}

const ADD_TICKER = "ADD_TICKER";
const ADD_MANY_TICKERS = "ADD_MANY_TICKERS";
const REMOVE_TICKER = "REMOVE_TICKER";

export const FETCH_TICKERS = "FETCH_TICKERS"; // Action type for saga

const reducer = (state = defaultState, action) => {
  switch(action.type) {

    case ADD_TICKER: {
      return {...state, tickers: [...state.tickers, action.payload] }
    }
    case ADD_MANY_TICKERS: {
      return {...state, tickers: [...state.tickers, ...action.payload] }
    }
    case REMOVE_TICKER: {
      return {...state, tickers: state.tickers.filter(ticker => ticker !== action.payload ) }
    }
  }

  return state;
}

export const addTickerAction = (payload) => ({type: ADD_TICKER, payload});
export const addManyTickersAction = (payload) => ({type: ADD_MANY_TICKERS, payload});
export const fetchTickersAction = () => ({type: FETCH_TICKERS}); // For saga

//const composedEnchancer = compose(composeWithDevTools(), applyMiddleware(sagaMiddleware));
// LOL, IT CRASHES SAGAS :D
export const store = createStore(reducer, undefined, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
