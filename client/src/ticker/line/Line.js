import React from 'react';
import compareLine from './compareLine';

const Line = (props) => { // one row of a table

  const current = props.current;
  const prev = props.prev;
  const headonly = props.headonly;

  const compared = compareLine(prev, current);

  return (
    headonly===true ?
    <tr>{Object.entries(current).map((item, id) => (<th key={id}>{item[0]}</th>))}</tr>
    :
    <tr>{Object.entries(current).map((item, id) => (
        <td className={compared[id]} key={id}>{item[1]}</td>
      ))}</tr>
  )
}

export default Line;
