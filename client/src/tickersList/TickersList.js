import React from 'react';
import {useSelector} from "react-redux";
import Ticker from '../ticker/Ticker';

const TickersList = () => {

  const currentTicker = useSelector(state => state.newValue);
  const oldTicker = useSelector(state => state.oldValue);

  return (
    <div>
      {
        currentTicker.length > 0 ?
        <Ticker payload={currentTicker} />
        :
        <h1>No data</h1>
      }
      {
        oldTicker.length > 0 ?
        <Ticker payload={oldTicker} />
        :
        undefined
      }
    </div>
  )
}

export default TickersList;
