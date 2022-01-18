// here will be Redux store...

import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "../asyncActions/index";

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  tickers: [],
  oldValue: [],
  newValue: [],
}

const ADD_TICKER = "ADD_TICKER";
const SET_TICKER = "SET_TICKER";

export const FETCH_TICKERS = "FETCH_TICKERS"; // Action type for saga

const reducer = (state = defaultState, action) => {
  switch(action.type) {

    case ADD_TICKER: {
      return {...state, tickers: [...state.tickers, [...action.payload] ] }
    }
    case SET_TICKER: {
      return {...state, oldValue: [...state.newValue], newValue: [...action.payload] }
    }


    default: return state;
  }
}

export const addTickerAction = (payload) => ({type: ADD_TICKER, payload});
export const setTickerAction = (payload) => ({type: SET_TICKER, payload});

export const fetchTickersAction = () => ({type: FETCH_TICKERS}); // For saga

const composedEnchancer = compose(applyMiddleware(sagaMiddleware), composeWithDevTools());
// applyMiddleware should be first otherwise sagas won`t work
export const store = createStore(reducer, undefined, composedEnchancer);
sagaMiddleware.run(rootSaga);
