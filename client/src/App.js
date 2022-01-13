import './App.css';

import React from 'react';
import Ticker from './ticker/Ticker';

import {useDispatch, useSelector} from "react-redux";
import {fetchTickersAction} from './store/index';

function App() {

  const dispatch = useDispatch();
  const tickers = useSelector(state => state.tickers);

  const addTicker = () => {
    dispatch(fetchTickersAction()); // Start pulling data
  }

  return (
    <div className="App">
      <button onClick={() => addTicker()}>ADD</button>
      {
        tickers.length > 0 ?
        <Ticker name = {"Pedrael"}/>
        :
        <div>Empty</div>
      }
    </div>
  );
}

export default App;
