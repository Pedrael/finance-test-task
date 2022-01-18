import './App.css';

import React, {useEffect} from 'react';

import {useDispatch} from "react-redux";
import {fetchTickersAction} from './store/index';
import TickersList from './tickersList/TickersList';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickersAction());
  });

  return (
    <div className="App">
      <TickersList />
    </div>
  );
}

export default App;
