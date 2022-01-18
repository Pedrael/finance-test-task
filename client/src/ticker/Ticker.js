import React from 'react';
import Line from './line/Line';
import {useSelector} from "react-redux";
import './Ticker.css';

const Ticker = (props) => { // one partition of data visualised as table

  const payload = props.payload;

  const compareLine = (oldValue, newValue) => {
    const olds = Object.entries(oldValue).map(item => item[1]);
    const news = Object.entries(newValue).map(item => item[1]);
    const result = [];
    olds.forEach((item, i) => result.push(item - news[i]));
    console.table(result);
    return result;
  }

  return (
    <table className="tickerTable">
      <thead>
        { <Line payload={payload[0]} headonly={true} /> }
      </thead>
      <tbody>
        {payload.map((item, id) => <Line payload={item} headonly={false} key={id} />)}
      </tbody>
    </table>
  )
}

export default Ticker;
