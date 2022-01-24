import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import Ticker from '../ticker/Ticker';
import './TickersList.css';

const TickersList = () => {

  const currentTicker = useSelector(state => state.newValue);
  const oldTicker = useSelector(state => state.oldValue);
  const [checked, setChecked] = useState();
  const [size, setSize] = useState(0);


  const handleChange = (current) => {
    setChecked(checked.map((check, i) => (i === current ? !check : check)));
  };

  useEffect(() => {
    setSize(currentTicker.length);
  }, [currentTicker]); // we aquire new size of tickers` array when they arrive

  useEffect(() => {
    setChecked(currentTicker.map(ticker => true));
  }, [size]); // we set array of true as initial state when size changes

  return (
    <div>
      {
        currentTicker.length > 0 ?
        <Ticker current={currentTicker} prev={oldTicker} isVisible={checked}/>
        :
        <h1>No data</h1>
      }
      <div className="checkBoxes">{
        currentTicker.map((ticker, id) =>(
          <div key={id} className="checkItem"> // checkboxes for hiding tickers
            <input
              type="checkbox"
              onChange={() => handleChange(id)}
              checked={typeof checked[id] !== "undefined" ? checked[id] : true}
              id={ticker?.ticker} />
            <label htmlFor={ticker?.ticker}> {ticker?.ticker}</label>
          </div>
        ))
      }</div>
    </div>
  )
}

export default TickersList;
