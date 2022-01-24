// here will be Redux store...

import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "../asyncActions/index";

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  oldValue: [], // previous set of tickers
  newValue: [], // current set of tickers
}

const SET_TICKER = "SET_TICKER";

export const FETCH_TICKERS = "FETCH_TICKERS"; // Action type for saga

const reducer = (state = defaultState, action) => {
  switch(action.type) {

    case SET_TICKER: {
      return {...state, oldValue: [...state.newValue], newValue: [...action.payload] }
    }


    default: return state;
  }
}

export const setTickerAction = (payload) => ({type: SET_TICKER, payload});

export const fetchTickersAction = () => ({type: FETCH_TICKERS}); // For saga

const composedEnchancer = compose(applyMiddleware(sagaMiddleware), composeWithDevTools());
// applyMiddleware should be first otherwise sagas won`t work
export const store = createStore(reducer, undefined, composedEnchancer);
sagaMiddleware.run(rootSaga);
