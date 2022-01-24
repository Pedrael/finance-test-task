import React from 'react';
import Line from './line/Line';
import './Ticker.css';

const Ticker = (props) => { // one partition of data visualised as table

  const current = props.current;
  const prev = props.prev;

  return (
    <table className="tickerTable">
      <thead>
        { <Line current={current[0]} headonly={true} /> }
      </thead>
      <tbody>
        {current.map((item, id) => <Line current={item} prev={prev[id]} headonly={false} key={id} />)}
      </tbody>
    </table>
  )
}

export default Ticker;
